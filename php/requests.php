<?php

define('INCLUDE_CHECK',true);
require_once 'login.php';

// Checks the request
if(isset($_POST['text'])){

    $word = $_POST['text'];
    $letterArray = str_split($word);
    $colorArray = array();

    for($i = 0; $i < sizeof($letterArray); $i++){

        $colorArray[$i][0] = $letterArray[$i];
    }

    //$request = checkWord($letterArray, 0, null, null, $colorArray);
    $request = retrieveWord($word, $letterArray, $colorArray);

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

    $arrayTail = array();
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

       addArrayColor("#FFFFFF", $c + strlen($gr), strlen($temp), $colorArray);

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


//Check whether a word with such spelling exists. If yes, return its phonetic state
function retrieveWord($text, $letterArray, &$colorArray){

    $arrayLength = sizeof($letterArray);

    $sql_check = mysql_query("SELECT phonetic1 FROM lex2_lemma WHERE content ='".$text."'") or die(mysql_error());

    if((mysql_num_rows($sql_check) != 0)){

        $rows = mysql_fetch_assoc($sql_check);
        $phonemes = $rows['phonetic1'];
        $phonemesArray = explode(" ", $phonemes);
        $lastPhoneme = $phonemesArray[sizeof($phonemesArray) - 1];


        if($arrayLength != sizeof($phonemesArray)){

            $currentPos = 0;

            for($i = 0; $i < $arrayLength; $i++){

                if(equalityRequest($letterArray[$i], $phonemesArray[$i])){

                    addArrayColor(checkColor($phonemesArray[$i]), $i, 1, $colorArray);
                }

                $doublePhoneme = $phonemesArray[$i] . " " . $phonemesArray[$i + 1];

                if(equalityRequest($letterArray[$i], $doublePhoneme)){

                    addArrayColor(checkColor($doublePhoneme), $i, 1, $colorArray);

                }else if(equalityRequest($letterArray[$i] . $letterArray[$i + 1], $phonemesArray[$i])){

                    addArrayColor(checkColor($phonemesArray[$i]), $i, 2, $colorArray);

                    $currentPos += 1;
                }
            }

            addArrayColor(checkColor($lastPhoneme), $arrayLength - 1, 1, $colorArray);

            if($lastPhoneme == '@' && $arrayLength > 2){

                $phonemesArray[sizeof($phonemesArray) - 1] = $phonemesArray[sizeof($phonemesArray) - 2];
                addArrayColor(checkColor($lastPhoneme), $arrayLength - 1, 1, $colorArray);
            }

            return $colorArray;

        }else{

            return solidColor($phonemesArray, $arrayLength, $colorArray);
        }

    }else{

        addArrayColor("#FFFFFF", 0, $arrayLength, $colorArray);
        return $colorArray;
    }
}

//Copy exactly the array of colors to $colorArray
function solidColor($phonemesArray, $arrayLength, &$colorArray){

    if($phonemesArray[$arrayLength - 1] == '@' && $arrayLength > 2){

        $phonemesArray[$arrayLength - 1] = $phonemesArray[$arrayLength - 2];
    }

    for($i = 0; $i < $arrayLength; $i++){

        addArrayColor(checkColor($phonemesArray[$i]), $i, 1, $colorArray);
    }

    return $colorArray;
}

function phonemeRequest($temp, &$phoneme, &$noOfRows){

    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme='".$temp."'") or die(mysql_error());
    $rows = mysql_fetch_assoc($sql_check);
    $noOfRows = mysql_num_rows($sql_check);
    $phonemes = $rows['phoneme'];
    $phoneme = $phonemes[0];
}

function equalityRequest($grapheme, $phoneme){

    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme='".$grapheme."' AND phoneme='".$phoneme."'")
        or die(mysql_error());
    $noOfRows = mysql_num_rows($sql_check);

    return $noOfRows != 0;
}

//$c - starting character
//$length - length of colors to fill in

function addArrayColor($color, $c, $length, &$colorArray){

    for($i = $c; $i < $c + $length; $i++){

        if($c + $length <= sizeof($colorArray)){

            if(is_array($color)){
                $colorArray[$i][1] = $color[0];
                $colorArray[$i][2] = $color[1];
            }else{
                $colorArray[$i][1] = $color;
            }
        }
    }
}

function checkColor($letter){

    $sql_check = mysql_query("SELECT color, colorTop, colorBottom FROM relation WHERE phoneme='".$letter."'")
        or die(mysql_error());

    $rows = mysql_fetch_array($sql_check, MYSQL_ASSOC);
    $color = $rows['color'];

    if($color != NULL){

        return $color;
    }else{

        $colorTop = $rows['colorTop'];
        $colorBottom = $rows['colorBottom'];

        return array($colorTop, $colorBottom);
    }
}

?>