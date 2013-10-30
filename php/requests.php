<?php

define('INCLUDE_CHECK',true);
require_once "login.php";

// Checks the request
if(isset($_POST['text'])){

    $word = $_POST['text'];
    $letterArray = str_split($word);
    $colorArray = [];

    for($i = 0; $i < sizeof($letterArray); $i++){

        $colorArray[$i][0] = $letterArray[$i];
    }

    $request = checkWord($letterArray, 0, null, null, $colorArray);

    if($request){

        echo json_encode($request);

    }else{
        echo 'ERROR';
    }
}

//$array [] - word,
//$ph - String phoneme,
//$gr - String grapheme
//$c - number, current character (combine $c + $gr)
//Recursive function used for finding the letters
function checkWord($array, $c, $ph, $gr, &$colorArray){

    $arrayTail = [];
    $noOfRows = 0;
    $phoneme = '';

   if(sizeof($array) == 0 && $gr == null){

       return $colorArray;
   }
   elseif(sizeof($array) == 1 && $gr == null){

        $temp = $gr . $array[0];

        phonemeRequest($temp, $phoneme, $noOfRows);

        addArrayColor(checkColor($phoneme), $c, strlen($temp), $colorArray);

        return $colorArray;

    }else{

        $temp = $gr . $array[0];
        $arrayLength = sizeof($array);

        for($i = 1; $i < $arrayLength; $i++){

            $arrayTail[$i - 1] = $array[$i];
        }

       phonemeRequest($temp, $phoneme, $noOfRows);

        if($noOfRows > 1){

            if(sizeof($array) == 0){

                addArrayColor(checkColor($phoneme), $c, strlen($temp), $colorArray);
                return $colorArray;
            }
            else{
                return checkWord($arrayTail, $c, $phoneme, $temp, $colorArray);
            }

        }elseif($noOfRows == 1){

            addArrayColor(checkColor($phoneme), $c, strlen($temp), $colorArray);

            if(sizeof($array) == 0){

                return $colorArray;
            }else{

                return checkWord($arrayTail, $c + strlen($temp), null, null, $colorArray);
            }
        }elseif($noOfRows == 0){

            addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);

            return checkWord($array, $c + strlen($temp) - 1, null, null, $colorArray);
        }
    }
}

function phonemeRequest($temp, &$phoneme, &$noOfRows){

    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme='".$temp."'") or die(mysql_error());
    $rows = mysql_fetch_assoc($sql_check);
    $noOfRows = mysql_num_rows($sql_check);
    $phonemes = $rows['phoneme'];
    $phoneme = $phonemes[0];

}

//$c - starting character
//$length - length of colors to fill in

function addArrayColor($color, $c, $length, &$colorArray){

    for($i = $c; $i < $c + $length; $i++){

        if(is_array($color)){
            $colorArray[$i][1] = $color[0];
            $colorArray[$i][2] = $color[1];
        }else{
            $colorArray[$i][1] = $color;
        }
    }
}

function checkColor($letter){

    $sql_check = mysql_query("SELECT color, colorTop, colorBottom FROM relation WHERE phoneme='".$letter."'")
        or die(mysql_error());

    $rows = mysql_fetch_array($sql_check, MYSQL_ASSOC);
    $color = $rows['color'];

    if($color != ''){

        return $color;
    }else{

        return array($rows['colorTop'], $rows['colorBottom']);
    }
}

/*
 * JOIN
 * type - 1v1, 2v2, 3v3, 4v4
 * lp - localPlayer nick
 * Get the user details from the users database (color, size)
 * Get all the current pvp games that the user can join which are in waiting state
 * Find the optimal game for you and join it
 */
if(isset($_POST['type']) && isset($_POST['lP'])){

    $type = $_POST['type'];
    $nick = $_POST['lP'];
    $color = '';
    $size = '';

    mysql_query("set names 'utf8'");
    $user_data = mysql_query("SELECT color, size FROM users WHERE nick='".$nick."'") or die (mysql_error());

    if($user_data){

        $u_rows = mysql_fetch_array($user_data, MYSQL_ASSOC);
        $color = $u_rows['color'];
        $size = $u_rows['size'];


        $pvpRooms = mysql_query("SELECT name FROM rooms WHERE pvpNo='".$type."' && state=0") or die(mysql_error());

        if($pvpRooms){

            $p_no_rows = mysql_num_rows($pvpRooms);
            $selected = '';
            for($i = 0; $i < $p_no_rows; $i++){

                $room = mysql_fetch_row($pvpRooms);

                $pvpRoom = mysql_query("SELECT * FROM $room[0]") or die(mysql_error());

                if($pvpRoom){

                    $room_player_rows = mysql_num_rows($pvpRoom);

                    for($j = 0; $j < $room_player_rows; $j++){

                        $player = mysql_fetch_row($pvpRoom);

                        if(abs($player[7] - $size) < 3){
                            $selected = $room[0];
                            break;
                        }
                    }
                }else{
                    echo 'ERROR';
                }
            }
            echo $selected;
        }else{
            echo 'ERROR';
        }
    }else{
        echo 'ERROR';
    }
}

/*
 * HOST
 * type - 1v1, 2v2, 3v3, 4v4
 * lp - localPlayer nick
 * Get the user details from the users database (color, size)
 * Get all the current pvp games that the user can join which are in waiting state
 * Find the optimal game for you and join it
 */
if(isset($_POST['type']) && isset($_POST['player'])){

    $type = $_POST['type'];
    $nick = $_POST['player'];
    $color = '';
    $size = '';

    mysql_query("set names 'utf8'");
    $user_data = mysql_query("SELECT color, size FROM users WHERE nick='".$nick."'") or die (mysql_error());
    $roomID = uniqid('p');

    $room = mysql_query("SELECT room FROM online WHERE nick='".$nick."'") or die (mysql_error());

    if(($room != '' || $room != null)){

        $room_name = mysql_fetch_array($room, MYSQL_ASSOC);
        $room = $room_name['room'];
        $room_query = mysql_query("SELECT pvpNo, state FROM rooms WHERE name='".$room."'") or die (mysql_error());
        $room_details = mysql_fetch_array($room_query, MYSQL_ASSOC);
        $pvpNo = $room_details['pvpNo'];
        $state = $room_details['state'];

        if($state == 0 && $pvpNo == $type){
            echo $room;
            return;
        }else{
            mysql_query("DROP TABLE IF EXISTS " .$room. ", chat_" .$room);
            mysql_query("DELETE FROM rooms WHERE name='".$room."'");
        }
    }

    if($user_data){

        $u_rows = mysql_fetch_array($user_data, MYSQL_ASSOC);
        $color = $u_rows['color'];
        $size = $u_rows['size'];

        $pvpRooms = mysql_query("INSERT INTO rooms(name, pvpNo, width, height, state) VALUES('".$roomID."',
         '".$type."', 500, 320, 0)") or die(mysql_error());

        if($pvpRooms){

            $pvp_room = mysql_query("CREATE TABLE $roomID(nick VARCHAR (32) NOT NULL, team INT(1) NOT NULL, number INT(1)
         NOT NULL, status INT(1) NOT NULL DEFAULT 0, color VARCHAR(10) NOT NULL, orgX INT(3) NOT NULL, orgY INT(3)
          NOT NULL, size INT(2) NOT NULL, orgDir INT(1) NOT NULL DEFAULT 0,
           UNIQUE KEY(nick)) engine myisam") or die (mysql_error());

            if($pvp_room){

                // ------ CHANGE ----- //
                $add_User = mysql_query("INSERT INTO $roomID VALUES('$nick', 0, 4, 0, '$color', 4, 14, '$size', 0)")
                    or die(mysql_error());
                mysql_query("UPDATE online SET room='$roomID', status=2 WHERE nick='$nick'") or die(mysql_error());

                $chat_room = mysql_query("CREATE TABLE chat_$roomID(id int UNSIGNED NOT NULL auto_increment, nick VARCHAR(32)
                  NOT NULL, p_time datetime NOT NULL, message VARCHAR(255) NOT NULL, PRIMARY KEY(id)) engine myisam") or die (mysql_error());

                if($chat_room){

                    echo $roomID;

                }else{
                    echo 'ERROR';
                }
            }else{
                echo 'ERROR';
            }
        }else{
            echo 'ERROR';
        }
    }else{
        echo 'ERROR';
    }
}

/*
 * JOIN the room
 * room - name of the room to join
 * nick - localPlayer nick
 * Get the all user details from the users database (color, size)
 * Add them all to the current room
 */
if(isset($_POST['room']) && isset($_POST['nick']) && isset($_POST['join'])){

    $roomID = $_POST['room'];
    $nick = $_POST['nick'];
    $color = '';
    $size = '';

    mysql_query("set names 'utf8'");
    $user_data = mysql_query("SELECT color, size FROM users WHERE nick='".$nick."'") or die (mysql_error());

    if($user_data){

        $u_rows = mysql_fetch_array($user_data, MYSQL_ASSOC);
        $color = $u_rows['color'];
        $size = $u_rows['size'];

        $add_User = mysql_query("REPLACE INTO $roomID VALUES('$nick', 1, 4, 0, '$color', 4, 4, '$size', 2)")
            or die(mysql_error());
        if($add_User){
            mysql_query("UPDATE online SET room='$roomID', status=2 WHERE nick='$nick'") or die(mysql_error());
        }else{
            echo 'ERROR';
        }
    }else{
        echo 'ERROR';
    }
}

/*
 * Add notification to the database for a specific user
 * to - nick which receives the notification
 * r_type - type of notification (request, accept, decline, room)
 * text - text includes the room name, otherwise is blank
 * from - from_who the message is coming from
 */
if(isset($_POST['to']) && isset($_POST['r_type']) && isset($_POST['text']) && isset($_POST['from'])){

    $nick = $_POST['to'];
    $type = $_POST['r_type'];
    $text = $_POST['text'];
    $from_who = $_POST['from'];
    mysql_query("set names 'utf8'");
    $query = mysql_query("REPLACE INTO notifications(nick, text, type, from_who) VALUES('".$nick."',
     '".$text."', '".$type."', '".$from_who."') ") or die (mysql_error());

    if(!$query)
        echo 'ERROR';
}

// Remove the message from notifications
// nick = who's message
// type = type of message removed
// from = from_who came the message
if(isset($_POST['nick']) && isset($_POST['type']) && isset($_POST['from'])){

    $nick = $_POST['nick'];
    $type = $_POST['type'];
    $from_who = $_POST['from'];

    mysql_query("set names 'utf8'");
    $query = mysql_query("DELETE FROM notifications WHERE nick='".$nick."' && type='".$type."'
     && from_who='".$from_who."'") or die (mysql_error());

    if(!$query)
        echo 'ERROR';


}

// Get all the notifications for the current user
if(isset($_POST['nick']) && isset($_POST['notifications'])){

    $nick = $_POST['nick'];
    mysql_query("set names 'utf8'");
    mysql_query('SET CHARACTER SET utf8');
    $query = mysql_query("SELECT * FROM notifications WHERE nick='".$_POST['nick']."'") or die (mysql_error());

    if($query){

        $rows = array();
        while($row = mysql_fetch_assoc($query)) {
            $rows[] = $row;
        }
        echo json_encode($rows);

    }else{
        echo 'ERROR';
    }
}

// Check whether a user has an active room
if(isset($_POST['nick']) && isset($_POST['room'])){

    $nick = $_POST['nick'];
    mysql_query("set names 'utf8'");
    $query = mysql_query("SELECT room FROM online WHERE nick='".$_POST['nick']."'") or die (mysql_error());

    if($query){

        $array = mysql_fetch_array($query, MYSQL_ASSOC);

        echo $array['room'];

    }else{
        echo 'ERROR';
    }
}

?>