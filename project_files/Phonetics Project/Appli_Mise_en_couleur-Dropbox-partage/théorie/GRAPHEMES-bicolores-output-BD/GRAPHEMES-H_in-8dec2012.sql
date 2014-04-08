SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%H e~%" 
AND content NOT LIKE "%uints"
AND content NOT LIKE "%uint"
AND content NOT LIKE "%uins"
AND content NOT LIKE "%uin%"