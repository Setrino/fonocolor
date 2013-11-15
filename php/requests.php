<?php

header ('Content-type: text/html; charset=utf-8');
define('INCLUDE_CHECK',true);
require_once 'login.php';

// Checks the request
if(isset($_POST['text'])){

    $word = $_POST['text'];
    $letterArray = str_split_utf8($word);
    $colorArray = array();

    for($i = 0; $i < sizeof($letterArray); $i++){

        $colorArray[$i][0] = $letterArray[$i];
    }



    //$request = checkWord($letterArray, 0, null, null, $colorArray);
    $request = retrieveWord($word, $letterArray, $colorArray);

    if(true){

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
    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phonetic1 FROM lex2_lemma WHERE content ='".$text."'") or die(mysql_error());

    if((mysql_num_rows($sql_check) != 0)){

        $rows = mysql_fetch_assoc($sql_check);
        $phonemes = $rows['phonetic1'];
        $phonemesArray = explode(" ", $phonemes);


        if($arrayLength != sizeof($phonemesArray)){

            /*$currentPos = 0;

            for($i = 0; $i < $arrayLength; $i++){

                if(equalityRequest($letterArray[$i], $phonemesArray[$i])){

                    addArrayColor(checkColor($phonemesArray[$i]), $i, 1, $colorArray);
                }

                $doublePhoneme = $phonemesArray[$i] . " " . $phonemesArray[$i + 1];

                if(equalityRequest($letterArray[$i], $doublePhoneme)){

                    addArrayColor(checkColor($doublePhoneme), $i, 1, $colorArray);

                }else if(equalityRequest($letterArray[$i] . $letterArray[$i + 1], $phonemesArray[$i])){

                    addArrayColor(checkColor($phonemesArray[$i]), $i, 2, $colorArray);

                    $currentPos += 2;
                }
            }

            //addArrayColor(checkColor($lastPhoneme), $arrayLength - 1, 1, $colorArray);*/
            return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, 0, null, null, false);
            //return checkWord($letterArray, 0, null, null, $colorArray, $phonemesArray);

        }else{

            return solidColor($phonemesArray, $arrayLength, $colorArray);
        }

    }else{

        addArrayColor("#FFFFFF", 0, $arrayLength, $colorArray);
        return $colorArray;
    }
}

/*
 * $phonemesArray - Tail of phonemes received for the current word from the database
 * $letteArray - Tail of letters for the current word being broken down
 * $colorArray - Array of colors assigned per letter
 * $c - pointer for the array
 * $gr - no of letters currently selected for check
 * $ph - head of the array, no of phonemes for a specific letter
 * $found - a checker whether the $phoneme(s) is equivalent to $grapheme(s)
 */

function recursiveWordCheck($phonemesArray, $letterArray, &$colorArray, $c, $gr, $ph, $found){

    $tempGr = null;
    $tempPh = null;
    $arrayTail = array();
    $phArrayTail = array();
    $arrayLength = sizeof($letterArray);
    $phArrayLength = sizeof($phonemesArray);
    $clArrayLength = sizeof($colorArray);

    if($arrayLength == 0){

        addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
        return $colorArray;
    }
    else{

        //Check if the last phoneme is @, and if so, replace with the color of the previous value
       if($arrayLength == 1 && $phonemesArray[0] == '@' && $clArrayLength > 2){

           if($ph != null && $gr != null){

               addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
           }

            if($colorArray[$clArrayLength - 2][2]){

                $colorArray[$clArrayLength - 1][1] = $colorArray[$clArrayLength - 2][1];
                $colorArray[$clArrayLength - 1][2] = $colorArray[$clArrayLength - 2][2];
            }else{

                $colorArray[$clArrayLength - 1][1] = $colorArray[$clArrayLength - 2][1];
            }

           return $colorArray;
       }else{

           $tempGr = $gr . $letterArray[0];
           $tempPh = ($ph == null) ? $phonemesArray[0] : $ph . " " . $phonemesArray[0];

           for($i = 1; $i < $arrayLength; $i++){

               $arrayTail[$i - 1] = $letterArray[$i];
           }

           $phLength = (strlen($tempPh) > 1) ? 2 : 1;

           for($i = $phLength; $i < $phArrayLength; $i++){

               $phArrayTail[$i - $phLength] = $phonemesArray[$i];
           }

               if($ph != null && equalityRequest($tempGr, $ph)){

                   if(equalityRequest($letterArray[0], $phonemesArray[0])){

                        addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                        return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + strlen($gr), null, null, false);
                   }else{

                        return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true);
                   }
               }else{

                   if(equalityRequest($tempGr, $tempPh)){

                       $tempPh = $tempPh . " " . $phonemesArray[1];

                           if($phonemesArray[1] != null && $ph == null && equalityRequest($tempGr, $tempPh)){

                               $phLength = (strlen($tempPh) > 1) ? 2 : 1;

                               $phArrayTail = array();

                               for($i = $phLength; $i < $phArrayLength; $i++){

                                   $phArrayTail[$i - $phLength] = $phonemesArray[$i];

                               }

                               return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true);

                               //If only one phoneme for the grapheme(s), then check for the next grapheme
                           }else{

                               return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $phonemesArray[0], true);
                           }
                   }else{

                       if($found){

                           //If no new phoneme found, old phoneme is used
                           addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);

                           return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + strlen($gr), null, null, false);
                       }else{

                           return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, false);
                       }
                   }
               }
       }

    }
}

//Copy exactly the array of colors to $colorArray
function solidColor($phonemesArray, $arrayLength, &$colorArray){

    $counter = 0;

    if($phonemesArray[$arrayLength - 1] == '@' && $arrayLength > 2){

        $phonemesArray[$arrayLength - 1] = $phonemesArray[$arrayLength - 2];
    }

    for($i = 0; $i < $arrayLength; $i++){

        if($counter != 0){
            $counter = 0;
            continue;
        }

        $tempPh = $phonemesArray[$i] . " " . $phonemesArray[$i + 1];

        if($phonemesArray[$i + 1] != null && graphemeRequest($tempPh)){

            addArrayColor(checkColor($tempPh), $i, 2, $colorArray);
            $counter++;
        }else{
            addArrayColor(checkColor($phonemesArray[$i]), $i, 1, $colorArray);
        }
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

function graphemeRequest($phoneme){

    $sql_check = mysql_query("SELECT grapheme FROM graphemes WHERE phoneme='".$phoneme."'") or die(mysql_error());
    $noOfRows = mysql_num_rows($sql_check);

    return $noOfRows != null;
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

function str_split_utf8($jstring)
{
    if (mb_strlen ($jstring, 'UTF-8') == 0)
        return array();

    $ret  = array ();
    $alen = strlen ($jstring);
    $char = '';
    for ($i = 0; $i < $alen; $i++) {
        $char .= $jstring[$i];
        if (mb_check_encoding ($char, 'UTF-8')) {
            array_push ($ret, $char);
            $char = '';
        }
    }
    return $ret;
}

?>