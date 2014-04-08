SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%j e~%"
AND content NOT LIKE "%ien"
AND content NOT LIKE "%iens"
AND content NOT LIKE "%ient"
AND content NOT LIKE "%yen"
AND content NOT LIKE "%yens"
AND content NOT LIKE "%ïen"
AND content NOT LIKE "%ïens"
AND content NOT LIKE "%ients"
AND content NOT LIKE "%ien%"

