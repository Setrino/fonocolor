<?php

session_start();
header ('Content-type: text/html; charset=utf-8');
define('INCLUDE_CHECK',true);
require_once 'login.php';

// Checks the request
if(isset($_POST['text'])){

    $word = $_POST['text'];
    $firstLetter = false;
    if(checkUpper($word)){
        $firstLetter = true;
        $word = mb_strtolower($word, "UTF-8");
    };
    $word = str_replace(array("’"), array('\''), $word);
    $letterArray = str_split_utf8($word);
    $colorArray = array();

    for($i = 0; $i < sizeof($letterArray); $i++){

        $colorArray[$i][0] = $letterArray[$i];
    }

    $request = retrieveWord($word, $letterArray, $colorArray);

    if(true){

        //Change back first letter of string to upper case if needed
        if($firstLetter){
            $request[0][0] = mb_strtoupper($request[0][0], "UTF-8");
        }
        echo json_encode($request);
        $firstLetter = false;

    }else{

        echo 'ERROR';
    }
}

//Check whether a word with such spelling exists. If yes, return its phonetic state
function retrieveWord($text, $letterArray, &$colorArray){

    if($text == ''){
        return array();
    }

    $arrayLength = sizeof($letterArray);

    //Check whether the alphanumeric value is an escape character (non-letter or number)
    if(preg_match('~([^\A-Z0-9ÀÁÅÃÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿœæ ])~i', $text)){

        /*if(substr_count($text, "-") > 0){

            if($phonemesArrayFull = checkHyphen($text)){
                return hyphenatedWord($text, $letterArray, $colorArray, strrpos($text, "-"), $phonemesArrayFull);
            }
        }*/

        $counterL = 0;
        $beginPhonetic = 0;
        $phoneticCounter = 0;
        $beginLetter = 0;
        $letterCounter = 0;
        $te = '';

        for($i = 0; $i < $arrayLength; $i++){

            if(preg_match("/^[’']+$/",$letterArray[$i])) {
                setTrueApostrophe();
            }

            $tempL = (strlen($letterArray[$i]) > 1) ? 2 : 1;

            if(checkRegEx($letterArray[$i])){

                $te .= $letterArray[$i];

                if($beginPhonetic == 0 && $letterCounter == 0){
                    $beginPhonetic = $i;
                    $beginLetter = $counterL;
                }
                $phoneticCounter ++;
                $letterCounter += $tempL;

                //If the word is the last thing
                if($i == $arrayLength - 1){
                    checkDatabase(substr($text, $beginLetter, $letterCounter), array_slice($letterArray, $beginPhonetic,
                        $phoneticCounter), $colorArray, $beginPhonetic);
                    $beginPhonetic = 0;
                    $phoneticCounter = 0;
                    $beginLetter = 0;
                    $letterCounter = 0;
                }
            }else{
                if($phoneticCounter != 0 && $letterCounter != 0){
                    checkDatabase(substr($text, $beginLetter, $letterCounter), array_slice($letterArray, $beginPhonetic,
                        $phoneticCounter), $colorArray, $beginPhonetic);
                    //Start database check
                    $beginPhonetic = 0;
                    $phoneticCounter = 0;
                    $beginLetter = 0;
                    $letterCounter = 0;
                    addArrayColor("#FFFFFF", null, $i, 1, $colorArray);
                }else{
                    addArrayColor("#FFFFFF", null, $i, 1, $colorArray);
                }
            }

            $counterL += $tempL;
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

            addArrayColor("#FFFFFF", null, 0, $arrayLength, $colorArray);
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

    $subString = substr($text, $hyphenPosition + 1, mb_strlen($text, "UTF-8") - 1);
    $hyphenPosArray = array_search('-', $letterArray);
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
    checkDatabase(substr($text, $hyphenPosition + 1, strlen($text) - 1), array_slice($letterArray, $hyphenPosArray + 1, strlen($text) - 1),
        $colorArray, $hyphenPosArray + 1);

    addArrayColor("#FFFFFF", null, $hyphenPosArray, 1, $colorArray);

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

        addArrayColor(checkColor($ph), $ph, $c, mb_strlen($gr, "UTF-8"), $colorArray);

        return $colorArray;
    }elseif(($letterArray[0] == 's' || $letterArray[0] == 'n') && $wordLength == 1 && constant('apostrophe')){

        addArrayColor(checkColor($letterArray[0]), $letterArray[0], $c, 1, $colorArray);
        setFalseApostrophe();
        return $colorArray;
    }
    else{
        //Check if the last phoneme is @, and if so, replace with the color of the previous value
        // && $clArrayLength > 2 && $colorArray[$wordLength + $begin - 2][0] != 'u'
        if($arrayLength < 4 && $phonemesArray[0] == '@' && $phArrayLength == 1 && $gr == null && ($wordLength > 2 || $colorArray[0][0] == 'â'
            || $colorArray[0][0] == 'î')){

            if($ph != null && $gr != null){

                addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
            }

            $lastLetter = $wordLength + $begin;

            //return $lastLetter . ' ' . $c . ' ' . $wordLength . ' ' . $colorArray[$lastLetter - 1][0];

            if($colorArray[$c - 1][2]){
                for($i = $c; $i < $wordLength; $i++){
                    $colorArray[$i][1] = $colorArray[$c - 1][1];
                    $colorArray[$i][2] = $colorArray[$c - 1][2];
                    $colorArray[$i][3] = $colorArray[$c - 1][3];
                }
            }else{
                for($i = $c; $i < $wordLength; $i++){
                    $colorArray[$i][1] = $colorArray[$c - 1][1];
                    $colorArray[$i][3] = $colorArray[$c - 1][3];
                }
            }

            return $colorArray;
        }else{

            $tempGr = $gr . $letterArray[0];
            $tempPh = ($ph == null) ? $phonemesArray[0] : $ph . " " . $phonemesArray[0];

            arrayTail($arrayTail, 1, $arrayLength, $letterArray);

            if($letterArray[0] == '-' && $gr != null){

                addArrayColor(checkColor($ph), $ph, $c, mb_strlen($gr, "UTF-8"), $colorArray);
                addArrayColor(checkColor($letterArray[0]), $letterArray[0], $c + mb_strlen($gr, "UTF-8"), 1, $colorArray);
                return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 1, null, null, false,  $begin, $wordLength);
            }elseif($letterArray[0] == '-' && $gr == null){

                addArrayColor(checkColor($letterArray[0]), $letterArray[0], $c, 1, $colorArray);
                return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + 1, null, null, false,  $begin, $wordLength);
            }

            arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);

            //guitare
            if($ph != null && equalityRequest($tempGr, $ph)){

                if($tempGr == 'ch' || $tempGr == 'th' || $tempGr == 'sh' || $tempGr == 'll' || $tempGr == 'hi' ||
                    ($tempGr == 'qu' && $letterArray[1] != 'a') ||
                    ($tempGr == 'ge' && $letterArray[1]. $letterArray[2] == 'ai') ||
                    ($tempGr == 'gu' && $ph == 'g' && $phonemesArray[0] != 'O' && $phonemesArray[0] != 'H') ||
                    ($tempGr == 'ui' && $ph == 'H i')){
                    addArrayColor(checkColor($ph), $ph, $c, strlen($tempGr), $colorArray);
                    return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                }

                if($tempGr == 'ie' && $letterArray[1] == 'r'){
                    addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                    return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                }

                if(($tempGr == 'hu' || $tempGr == 'ui') && $tempPh == 'H i'){

                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);
                    arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);

                    addArrayColor(checkColor($tempPh), $tempPh, $c, strlen($tempGr) + 1, $colorArray);
                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8") + 1, null, null, false,  $begin, $wordLength);
                }

                if(equalityRequest($letterArray[0], $phonemesArray[0]) && $phArrayLength != 0){

                    if(!equalityRequest($letterArray[1], $phonemesArray[1]) && $arrayLength != 1){

                        //catch neuf (n9f)
                        if((equalityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) || equalityRequest($letterArray[0] . $letterArray[1] . $letterArray[2], $phonemesArray[0])) && $gr == $ph){

                            addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                            return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                        }else if((equalityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) && $phonemesArray < $letterArray) || (strtolower($gr) == strtolower($ph))
                            || ($letterArray[0] == $phonemesArray[0]) || (equalityRequest($letterArray[1] . $letterArray[2], $phonemesArray[1]))){

                            if($tempPh == 'E j' && $phonemesArray[1] != '9' || $ph == 'j'){
                                //éveillait
                                if(equalityRequest($tempGr . $letterArray[1], $tempPh)){
                                    $tempGr = $tempGr . $letterArray[1];
                                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);
                                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true,  $begin, $wordLength);
                                }else{
                                    $tempGr = $tempGr . $letterArray[1];
                                    addArrayColor(checkColor($tempPh), $tempPh, $c, strlen($tempGr), $colorArray);
                                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);
                                    arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);
                                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                                }
                            }else{

                                addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                                return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false,  $begin, $wordLength);
                            }
                        }else{

                            addArrayColor(checkColor($ph), $ph, $c, strlen($tempGr), $colorArray);
                            return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false,  $begin, $wordLength);
                        }
                    }elseif(equalityRequest($tempGr, $tempPh)){

                        addArrayColor(checkColor($tempPh), $tempPh, $c, mb_strlen($tempGr, "UTF-8"), $colorArray);
                        return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false, $begin,  $wordLength);
                    }else{

                        addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                        return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                    }
                }else{

                    //catch peu (p2), deux (d2)
                    if(likeEqualityRequest($letterArray[0] . $letterArray[1], $phonemesArray[0]) && ($tempGr != 'ph')){

                        if($ph == 'j'){
                            return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true, $begin,  $wordLength);
                        }else{
                            addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                            return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                        }
                    }else{

                        return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true, $begin,  $wordLength);
                    }
                }
            }elseif($wordLength > 3 && mb_strlen($tempGr, "UTF-8") == 2 && equalityRequest($letterArray[0], $phonemesArray[0])){

                //2 grapheme, 2 phoneme on 2nd run
                if(equalityRequest($tempGr, $tempPh)){

                    if($phonemesArray[0] . ' ' .$phonemesArray[1] == 'j u'){
                        addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                        return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                    }else{
                        return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true,  $begin, $wordLength);
                    }
                    //H 9, but havent found it yet
                }else if($tempPh == 'H 9' || $ph == 'w' || $ph == '9' || $ph == 'j'){
                    if($tempPh == 'w a' || $tempPh == 'j O' || $gr == 'e'){
                        addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                        return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                    }else{
                        return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, false,  $begin, $wordLength);
                    }
                }else{

                    addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                    return recursiveWordCheck($phonemesArray, $letterArray, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                }
            }else{

                //1 grapheme, 1 phoneme on first recursion
                if(equalityRequest($tempGr, $tempPh)){

                    $tempPhD = $tempPh . " " . $phonemesArray[1];

                    //1 grapheme, 2 phoneme on first recursion
                    if(equalityRequest($tempGr, $tempPhD) && $phonemesArray[1] != null){

                        $phLength = (strlen($tempPhD) > 2) ? 2 : 1;

                        $phArrayTailD = array();

                        arrayTail($phArrayTailD, $phLength, $phArrayLength, $phonemesArray);

                        if($tempPhD == 'k s' && $letterArray[1] == 'c'){

                            addArrayColor(checkColor($tempPh), $tempPh, $c, 1, $colorArray);
                            return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + 1, null, null, false, $begin, $wordLength);
                        }else{

                            return recursiveWordCheck($phArrayTailD, $arrayTail, $colorArray, $c, $tempGr, $tempPhD, true, $begin, $wordLength);
                        }

                        //If only one phoneme for the grapheme(s), then check for the next grapheme
                    }else{

                        if($phArrayLength == 1 && equalityRequest(implode("", $letterArray), $tempPh)){

                            addArrayColor(checkColor($tempPh), $tempPh, $c, $arrayLength, $colorArray);
                            return recursiveWordCheck(array(), array(), $colorArray, $c + $arrayLength, null, null, false, $begin,  $wordLength);
                        }elseif($tempPh == 'u j' && $phonemesArray[1] == 'i'){

                            arrayTail($arrayTail, mb_strlen($gr, "UTF-8"), $arrayLength, $letterArray);
                            addArrayColor(checkColor($ph), $ph, $c, strlen($gr), $colorArray);
                            return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8"), null, null, false, $begin,  $wordLength);
                        }else{

                            return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true,  $begin, $wordLength);
                        }
                    }
                }elseif($ph != null && equalityRequest($tempGr = $tempGr . $letterArray[1], $ph) && mb_strlen($tempGr, "UTF-8") > 2){

                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);

                    return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, true, $begin,  $wordLength);

                }elseif($ph != null && equalityRequest($gr, $tempPh)){

                    arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);
                    return recursiveWordCheck($phArrayTail, $letterArray, $colorArray, $c, $gr, $tempPh, true, $begin,  $wordLength);

                }elseif($ph == 'w' || $ph == 'j'){

                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);
                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true, $begin, $wordLength);
                }else{

                    if($found){

                        if($ph == 'w' && $phonemesArray[0] == 'e~'){

                            if($phArrayLength == 1){

                                addArrayColor(checkColor('w e~'), 'w e~', $c, strlen($gr) + $arrayLength, $colorArray);
                                return recursiveWordCheck(array(), array(), $colorArray, $c + mb_strlen($gr, "UTF-8") + $arrayLength, null, null, false, $begin,  $wordLength);
                            }else{

                                if($phonemesArray[2] == 's' || $phonemesArray[2] == 't' || $phonemesArray[2] == 'g'){

                                    arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);
                                    arrayTail($arrayTail, 3, $arrayLength, $letterArray);

                                    addArrayColor(checkColor('w e~'), 'w e~', $c, strlen($gr) + 3, $colorArray);
                                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 3, null, null, false, $begin,  $wordLength);
                                }else{

                                    arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);
                                    arrayTail($arrayTail, 2, $arrayLength, $letterArray);

                                    addArrayColor(checkColor('w e~'), 'w e~', $c, strlen($gr) + 2, $colorArray);
                                    return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 2, null, null, false, $begin,  $wordLength);
                                }
                            }
                        }else if($tempPh == 'H 2'){

                            $tempGrF = $gr . implode('', array_slice($letterArray, 0, 3));

                            if(equalityRequest($tempGrF, $tempPh)){

                                arrayTail($arrayTail, 3, $arrayLength, $letterArray);
                                addArrayColor(checkColor($tempPh), $tempPh, $c, strlen($gr) + 3, $colorArray);
                                return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($gr, "UTF-8") + 3, null, null, false, $begin,  $wordLength);
                            }else{
                                return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c, $tempGr, $tempPh, true,  $begin, $wordLength);
                            }

                        }/*else if(empty($phArrayTail) && sizeof($arrayTail) > 2){

                                arrayTail($arrayTail, mb_strlen($tempGr, "UTF-8") - mb_strlen($gr, "UTF-8"), $arrayLength, $letterArray);
                               return recursiveWordCheck($phonemesArray, $arrayTail, $colorArray, $c, $tempGr, $ph, false,  $begin, $wordLength);
                           //Case oui (w i) covered
                           }*/else if(equalityRequest($tempGr, $tempPh)){

                            arrayTail($phArrayTail, 1, $phArrayLength, $phonemesArray);
                            arrayTail($arrayTail, mb_strlen($tempGr, "UTF-8") - mb_strlen($gr, "UTF-8"), $arrayLength, $letterArray);
                            addArrayColor(checkColor($tempPh), $tempPh, $c, mb_strlen($tempGr, "UTF-8"), $colorArray);
                            //return $colorArray;
                            return recursiveWordCheck($phArrayTail, $arrayTail, $colorArray, $c + mb_strlen($tempGr, "UTF-8"), null, null, false, $begin,  $wordLength);

                        }else{

                            //If no new phoneme found, old phoneme is used
                            addArrayColor(checkColor($ph), $ph, $c, mb_strlen($gr, "UTF-8"), $colorArray);
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

            addArrayColor(checkColor($tempPh), $tempPh, $i, 2, $colorArray);
            $counter++;
        }else{
            addArrayColor(checkColor($phonemesArray[$i]), $phonemesArray[$i], $i, 1, $colorArray);
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
    $sql_check = mysql_query("SELECT phoneme FROM graphemes WHERE grapheme='".$grapheme."' AND BINARY phoneme='".$phoneme."'")
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

//$arrayTail - phArray or arrayTail
//$pointer - from which start tail
//$length of array
//$phonemesArray or $letterArray
function arrayTail(&$arrayTail, $pointer, $length, $originalArray){

    $arrayTail = array();

    for($i = $pointer; $i < $length; $i++){

        $arrayTail[$i - $pointer] = $originalArray[$i];
    }
}

//$c - starting character
//$ph - phoneme associated with letter
//$length - length of colors to fill in

function addArrayColor($color, $ph, $c, $length, &$colorArray){

    for($i = $c; $i < $c + $length; $i++){

        if($c + $length <= sizeof($colorArray)){

            if(is_array($color)){
                $colorArray[$i][1] = $color[0];
                $colorArray[$i][2] = $color[1];
            }else{
                $colorArray[$i][1] = $color;
            }
        }
        $colorArray[$i][3] = checkVoyCon($ph);
    }
}

//Return the Vowel or Consonant for the letter
function checkVoyCon($letter){
    $sql_check = mysql_query("SELECT voycon FROM relation WHERE BINARY phoneme='".$letter."'")
        or die(mysql_error());

    $rows = mysql_fetch_array($sql_check, MYSQL_ASSOC);
    $voycon = $colorTop = $rows['voycon'];

    return $voycon;
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

function checkRegEx($letter){
    return preg_match("/^[a-zA-Z0-9ÀÁÅÃÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿœæ]+$/", $letter);
}

function checkUpper($word) {

    $chr = mb_substr ($word, 0, 1, "UTF-8");
    return mb_strtolower($chr, "UTF-8") != $chr;
}

function str_split_utf8($jstring){

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

function setFirstUpper($state){

    define("first_up", $state, true);
}

// Decode base64 image canvas image
if(isset($_POST['name'])){

    # we are a PNG image
    header('Content-type: image/png');

    # we are an attachment (eg download), and we have a name
    header('Content-Disposition: attachment; filename="' . $_POST['name'] .'"');

    #capture, replace any spaces w/ plusses, and decode
    $encoded = $_POST['imgdata'];
    $encoded = str_replace(' ', '+', $encoded);
    $decoded = base64_decode($encoded);

    #write decoded data
    echo $decoded;
}

if(isset($_POST['filepath'])){

    $temp = getcwd();
    $path = $_POST['filepath'];
    $audioFiles = scandir(substr($temp, 0, strlen($temp) - 3).$path);

    if(sizeof($audioFiles) > 0){
        echo json_encode($audioFiles);
    }else{
        echo 'ERROR';
    }
}

if(isset($_POST['textArray'])){

    $_SESSION['textArray'] = $_POST['textArray'];
    echo $_SESSION['textArray'];
}

?>