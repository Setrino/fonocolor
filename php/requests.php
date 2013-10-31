<?php

define('INCLUDE_CHECK',true);
require_once "login.php";

ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL);

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
   elseif(!ctype_alpha($array[0])){

       $temp = $gr . $array[0];
       $arrayLength = sizeof($array);

       if($ph != null){

           addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
       }

       addArrayColor("#000000", $c + strlen($gr), strlen($temp),$colorArray);

       for($i = 1; $i < $arrayLength; $i++){

           $arrayTail[$i - 1] = $array[$i];
       }

       return checkWord($arrayTail, $c + strlen($temp), null, null, $colorArray);
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

?>