SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%H a~%" 
AND content NOT LIKE "%uents"
AND content NOT LIKE "%uan%"
AND content NOT LIKE "%uen%"