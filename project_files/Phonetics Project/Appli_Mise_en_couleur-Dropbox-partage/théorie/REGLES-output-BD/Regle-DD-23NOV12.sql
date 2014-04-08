SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%d" AND content NOT LIKE "%ord" AND content NOT LIKE "%ard" 
AND content NOT LIKE "%and"AND content NOT LIKE "%aud"
AND content NOT LIKE "%ourd"AND content NOT LIKE "%aid"
AND content NOT LIKE "%end" AND content NOT LIKE "%ied"
AND content NOT LIKE "%ond"AND phonetic1 NOT LIKE "%d"
