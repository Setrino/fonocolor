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

    //Check whether the alphanumeric value is an escape character (non-letter or number)
    if(preg_match('~([^\A-Z0-9ÀÁÅÃÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿœæ ])~i', $text)){

        $previousNonAlpha = 0;
        $letterArrayLength = 0;
        $counter = 0;
        $tempV = 0;

        if(substr_count($text, "-") > 0){

            if($phonemesArrayFull = checkHyphen($text)){
                return hyphenatedWord($text, $letterArray, $colorArray, strrpos($text, "-"), $phonemesArrayFull);
            }
        }

        for($i = 0; $i < $arrayLength; $i++){

            if($letterArray[$i] == "’"){

                $letterArray[$i] = $colorArray[$i][0] = '\'';
                $text = str_replace(array("’"), array('\''), $text);
            }

            $tempV += (strlen($letterArray[$i]) > 1) ? 1 : 0;

            if(preg_match('~([^\A-Z0-9ÀÁÅÃÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿœæ ])~i', $letterArray[$i])){

                addArrayColor("#FFFFFF", $i, 1, $colorArray);

                if($counter != 0){

                    $tempPreviousAlpha = ($letterArrayLength > 1) ? 1 : 0;
                    $currentAlpha = (strlen($letterArray[$i]) > 1) ? 1 : 0;

                    if(preg_match("/^[’']+$/",$letterArray[$i])) {
                        setTrueApostrophe();
                    }

                    checkDatabase(substr($text, $previousNonAlpha , $counter + $tempV - $tempPreviousAlpha - $currentAlpha), array_slice($letterArray,
                        $previousNonAlpha - $tempPreviousAlpha, $counter), $colorArray, $previousNonAlpha - $tempPreviousAlpha);
                    $counter = 0;
                }

                $letterArrayLength = strlen($letterArray[$i]);
                $previousNonAlpha = $i + $letterArrayLength;
            }else{

                $counter++;
            }

            if($i == $arrayLength - 1){

                addArrayColor("#FFFFFF", $i, 1, $colorArray);

                if($counter != 0){

                    $tempPreviousAlpha = ($letterArrayLength > 1) ? 1 : 0;

                    checkDatabase(substr($text, $previousNonAlpha , ($counter + $tempV - $tempPreviousAlpha)), array_slice($letterArray,
                        $previousNonAlpha - $tempPreviousAlpha, $counter), $colorArray, $previousNonAlpha - $tempPreviousAlpha);
                    $counter = 0;
                }
                $letterArrayLength = strlen($letterArray[$i]);
                $previousNonAlpha = $i + $letterArrayLength;
            }
        }

        return $colorArray;
    }else{

        return checkDatabase($text, $letterArray, $colorArray, 0);
    }
}

function checkDatabase($text, $letterArray, &$colorArray, $begin){

    $arrayLength = sizeof($letterArray);
    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phonetic1 FROM lex2_inflection WHERE content ='".$text."'") or die(mysql_error());

    $sql_checkL = mysql_query("SELECT phonetic1 FROM lex2_lemma WHERE content ='".$text."'") or die(mysql_error());

    if((mysql_num_rows($sql_check) != 0) || (mysql_num_rows($sql_checkL) != 0)){

        $tempQuery = (mysql_num_rows($sql_check) != 0) ? $sql_check : $sql_checkL;

        $rows = mysql_fetch_assoc($tempQuery);
        $phonemes = $rows['phonetic1'];
        $phonemesArray = explode(" ", $phonemes);

        return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $begin, null, null, false, $begin, $arrayLength);

    }else{

        if(strpos($text, 'oe')){

            $text = strtr ($text, array ('oe' => 'œ'));
            return checkDatabase($text, $letterArray, $colorArray, 0);

        }elseif(strpos($text, 'ae')){

            $text = strtr ($text, array ('oe' => 'æ'));
            return checkDatabase($text, $letterArray, $colorArray, 0);

        }else{

            addArrayColor("#FFFFFF", 0, $arrayLength, $colorArray);
            return $colorArray;
        }
    }
}

function checkHyphen($text){

    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phonetic1 FROM lex2_inflection WHERE content ='".$text."'") or die(mysql_error());
    $sql_checkL = mysql_query("SELECT phonetic1 FROM lex2_lemma WHERE content ='".$text."'") or die(mysql_error());

    if((mysql_num_rows($sql_check) != 0) || (mysql_num_rows($sql_checkL) != 0)){

        $tempQuery = (mysql_num_rows($sql_check) != 0) ? $sql_check : $sql_checkL;

        $rows = mysql_fetch_assoc($tempQuery);
        $phonemes = $rows['phonetic1'];
        $phonemesArray = explode(" ", $phonemes);

        return $phonemesArray;
    }else{
        return false;
    }
}

function hyphenatedWord($text, $letterArray, &$colorArray, $hyphenPosition, $phonemesArrayFull){

    $subString = substr($text, $hyphenPosition + 1, strlen($text) - 1);
    $phonemesArray = null;
    $phArrayFullLength = sizeof($phonemesArrayFull);

    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phonetic1 FROM lex2_inflection WHERE content ='".$subString."'") or die(mysql_error());

    $sql_checkL = mysql_query("SELECT phonetic1 FROM lex2_lemma WHERE content ='".$subString."'") or die(mysql_error());

    if((mysql_num_rows($sql_check) != 0) || (mysql_num_rows($sql_checkL) != 0)){

        $tempQuery = (mysql_num_rows($sql_check) != 0) ? $sql_check : $sql_checkL;

        $rows = mysql_fetch_assoc($tempQuery);
        $phonemes = $rows['phonetic1'];
        $phonemesArray = explode(" ", $phonemes);
    }

    $differenceArrayLength = $phArrayFullLength - sizeof($phonemesArray);

    recursiveWordCheck(array_slice($phonemesArrayFull, 0, $differenceArrayLength), array_slice($letterArray, 0, $hyphenPosition), $colorArray, 0, null, null, false, 0, $differenceArrayLength + 1);
    checkDatabase(substr($text, $hyphenPosition + 1, strlen($text) - 1), array_slice($letterArray, $hyphenPosition + 1, strlen($text) - 1),
        $colorArray, $hyphenPosition + 1);

    addArrayColor("#FFFFFF", $hyphenPosition, 1, $colorArray);

    return $colorArray;
}

// peut - substr($text, 0, $hyphenPosition)
// etre - substr($text, $hyphenPosition + 1, strlen($text) - 1)

/*
 * $phonemesArray - Tail of phonemes received for the current word from the database
 * $letteArray - Tail of letters for the current word being broken down
 * $colorArray - Array of colors assigned per letter
 * $c - pointer for the array
 * $gr - no of letters currently selected for check
 * $ph - head of the array, no of phonemes for a specific letter
 * $found - a checker whether the $phoneme(s) is equivalent to $grapheme(s)
 */

function recursiveWordCheck($phonemesArray, $letterArray, &$colorArray, $c, $gr, $ph, $found, $begin, $wordLength){

    if($ph[strlen($ph) - 1] == ' '){

        $ph = substr($ph, 0, strlen($ph) - 1);
    }

    $tempGr = null;
    $tempPh = null;
    $arrayTail = array();
    $phArrayTail = array();
    $arrayLength = sizeof($letterArray);
    $phArrayLength = sizeof($phonemesArray);
    $clArrayLength = sizeof($colorArray);

    //PHONEMES ARRAY SIE PASSED

    if($arrayLength == 0 && $phonemesArray == null){

        addArrayColor(checkColor($ph), $c, mb_strlen($gr, "UTF-8"), $colorArray);

        return $colorArray;
    }elseif(($letterArray[0] == 's' || $letterArray[0] == 'n') && $wordLength == 1 && constant('apostrophe')){

        addArrayColor(checkColor($letterArray[0]), $c, 1, $colorArray);
        setFalseApostrophe();
        return $colorArray;
    }
    else{
        //Check if the last phoneme is @, and if so, replace with the color of the previous value
        // && $clArrayLength > 2 && $colorArray[$wordLength + $begin - 2][0] != 'u'
       if($arrayLength < 4 && $phonemesArray[0] == '@' && $phArrayLength == 1 && $gr == null && ($wordLength > 3 || $colorArray[0][0] == 'â'
           || $colorArray[0][0] == 'î')){

           if($ph != null && $gr != null){

               addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
           }

           $lastLetter = $wordLength + $begin;

           //return $lastLetter . ' ' . $c . ' ' . $wordLength . ' ' . $colorArray[$lastLetter - 1][0];

            if($colorArray[$lastLetter - 2][2]){

                $colorArray[$lastLetter - 1][1] = $colorArray[$lastLetter - 2][1];
                $colorArray[$lastLetter - 1][2] = $colorArray[$lastLetter - 2][2];
            }else{

                $colorArray[$lastLetter - 1][1] = $colorArray[$lastLetter - 2][1];
            }

           return $colorArray;
       }else{

           $tempGr = $gr . $letterArray[0];
           $tempPh = ($ph == null) ? $phonemesArray[0] : $ph . " " . $phonemesArray[0];

           for($i = 1; $i < $arrayLength; $i++){

               $arrayTail[$i - 1] = $letterArray[$i];
           }


           if($letterArray[0] == '-' && $gr != null){

               addArrayColor(checkColor($ph), $c, mb_strlen($gr, "UTF-8"), $colorArray);
               addArrayColor(checkColor($letterArray[0]), $c + mb_strlen($gr, "UTF-8"), 1, $colorArray);
               return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 1, null, null, false,  $begin, $wordLength);
           }elseif($letterArray[0] == '-' && $gr == null){

               addArrayColor(checkColor($letterArray[0]), $c, 1, $colorArray);
               return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + 1, null, null, false,  $begin, $wordLength);
           }

           //$phLength = (strlen($tempPh) > 2) ? 2 : 1;

           for($i = 1; $i < $phArrayLength; $i++){

               $phArrayTail[$i - 1] = $phonemesArray[$i];
           }

               if($ph != null && equalityRequest($tempGr, $ph)){

                   if($tempGr == 'ch' || $tempGr == 'th' || $tempGr == 'sh' || $tempGr == 'hi'){
                       addArrayColor(checkColor($ph), $c, strlen($tempGr), $colorArray);
                       return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                   }

                   if($tempGr == 'qu'){
                       addArrayColor(checkColor($ph), $c, strlen($tempGr), $colorArray);
                       return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                   }

                   if($tempGr == 'ie' && $letterArray[1] == 'r'){
                       addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                       return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                   }

                   if($tempGr == 'hu' && $tempPh == 'H i'){

                       $arrayTail = array();
                       $phArrayTail = array();

                       for($i = 2; $i < $arrayLength; $i++){

                           $arrayTail[$i - 2] = $letterArray[$i];
                       }

                       for($i = 1; $i < $phArrayLength; $i++){

                           $phArrayTail[$i - 1] = $phonemesArray[$i];
                       }

                       addArrayColor(checkColor($tempPh), $c, strlen($tempGr) + 1, $colorArray);
                       return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8") + 1, null, null, false,  $begin, $wordLength);
                   }

                   if(equalityRequest($letterArray[0], $phonemesArray[0]) && $phArrayLength != 0){

                       if(!equalityRequest($letterArray[1], $phonemesArray[1]) && $arrayLength != 1){

                           //catch neuf (n9f)
                           if((equalityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) || equalityRequest($letterArray[0] . $letterArray[1] . $letterArray[2], $phonemesArray[0])) && $gr == $ph){

                               addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                               return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                           }else if((equalityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) && $phonemesArray < $letterArray) || (strtolower($gr) == strtolower($ph))
                               || ($letterArray[0] == $phonemesArray[0]) || (equalityRequest($letterArray[1] . $letterArray[2], $phonemesArray[1]))){

                                addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                                return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                           }else{

                               addArrayColor(checkColor($ph), $c, strlen($tempGr), $colorArray);
                               return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                           }
                       }else{

                           addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                           return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                       }
                   }else{

                       //catch peu (p2), deux (d2)
                       if(likeEqualityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) && $tempGr != 'ph'){

                            addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                            return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                       }else{

                        return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true, $begin,  $wordLength);
                       }
                   }
               }elseif($wordLength > 3 && mb_strlen($tempGr, "UTF-8") == 2 && equalityRequest($letterArray[0], $phonemesArray[0])){

                   addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                   return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);

               }else{

                   if(equalityRequest($tempGr, $tempPh)){

                            $tempPhD = $tempPh . " " . $phonemesArray[1];

                           if(equalityRequest($tempGr, $tempPhD) && $phonemesArray[1] != null){

                               $phLength = (strlen($tempPhD) > 2) ? 2 : 1;

                               $phArrayTailD = array();

                               for($i = $phLength; $i < $phArrayLength; $i++){

                                   $phArrayTailD[$i - $phLength] = $phonemesArray[$i];
                               }


                               if($tempPhD == 'k s' && $letterArray[1] == 'c'){

                                   addArrayColor(checkColor($tempPh), $c, 1, $colorArray);
                                   return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + 1, null, null, false, $begin, $wordLength);
                               }else{

                                   return recursiveWordCheck($phArrayTailD, $arrayTail, $colorArray, $c, $tempGr, $tempPhD, true, $begin, $wordLength);
                               }

                               //If only one phoneme for the grapheme(s), then check for the next grapheme
                           }else{

                               if($phArrayLength == 1 && equalityRequest(implode("", $letterArray), $tempPh)){

                                   addArrayColor(checkColor($tempPh), $c, $arrayLength, $colorArray);
                                   return recursiveWordCheck(array(), array(), $colorArray, $c + $arrayLength, null, null, false, $begin,  $wordLength);
                               }else{

                                   return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true,  $begin, $wordLength);
                               }
                           }
                   }elseif($ph != null && equalityRequest($tempGr = $tempGr . $letterArray[1], $ph) && mb_strlen($tempGr, "UTF-8") > 2){

                       $arrayTail = array();

                       for($i = 2; $i < $arrayLength; $i++){

                           $arrayTail[$i - 2] = $letterArray[$i];
                       }

                       return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true, $begin,  $wordLength);

                   }elseif($ph != null && equalityRequest($gr, $tempPh)){

                       $phLength = 1;

                       for($i = $phLength; $i < $phArrayLength; $i++){

                           $phArrayTail[$i - $phLength] = $phonemesArray[$i];
                       }

                           return recursiveWordCheck($phArrayTail, $letterArray, $colorArray, $c, $gr, $tempPh, true, $begin,  $wordLength);

                   }else{

                       if($found){

                           if($ph == 'w' && $phonemesArray[0] == 'e~'){

                               if($phArrayLength == 1){

                                   addArrayColor(checkColor('w e~'), $c, strlen($gr) + $arrayLength, $colorArray);
                                   return recursiveWordCheck(array(), array(), $colorArray, $c + mb_strlen($gr, "UTF-8") + $arrayLength, null, null, false, $begin,  $wordLength);
                               }else{

                                   $arrayTail = array();

                                   if($phonemesArray[2] == 's' || $phonemesArray[2] == 't' || $phonemesArray[2] == 'g'){

                                       for($i = 1; $i < $phArrayLength; $i++){

                                           $phArrayTail[$i - 1] = $phonemesArray[$i];
                                       }

                                       for($i = 3; $i < $arrayLength; $i++){

                                           $arrayTail[$i - 3] = $letterArray[$i];
                                       }

                                       addArrayColor(checkColor('w e~'), $c, strlen($gr) + 3, $colorArray);
                                       return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 3, null, null, false, $begin,  $wordLength);
                                   }else{

                                       for($i = 1; $i < $phArrayLength; $i++){

                                           $phArrayTail[$i - 1] = $phonemesArray[$i];
                                       }

                                       for($i = 2; $i < $arrayLength; $i++){

                                           $arrayTail[$i - 2] = $letterArray[$i];
                                       }

                                       addArrayColor(checkColor('w e~'), $c, strlen($gr) + 2, $colorArray);
                                       return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 2, null, null, false, $begin,  $wordLength);
                                   }
                               }
                           }else{

                               //If no new phoneme found, old phoneme is used
                           addArrayColor(checkColor($ph), $c, strlen($gr), $colorArray);
                           return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                           }
                       }else{

                           if($ph != null){

                               return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, false, $begin,  $wordLength);
                           }else{

                               return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, false, $begin,  $wordLength);
                           }
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

    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme='".$grapheme."' AND phoneme='".$phoneme."'")
        or die(mysql_error());
    $noOfRows = mysql_num_rows($sql_check);

    return $noOfRows != 0;
}

function likeEqualityRequest($grapheme, $phoneme){

    mysql_query("SET NAMES UTF8");
    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme LIKE '".$grapheme."%' AND phoneme='".$phoneme."'")
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

    $sql_check = mysql_query("SELECT color, colorTop, colorBottom FROM relation WHERE BINARY phoneme='".$letter."'")
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

function setTrueApostrophe(){

    define("Apostrophe", true, true);
}

function setFalseApostrophe(){

    define("Apostrophe", false, true);
};

?>