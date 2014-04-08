SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w a~%"
AND content NOT LIKE "%uants%"
AND content NOT LIKE "%ouant%"
AND content NOT LIKE "%ouans%"
AND content NOT LIKE "%uant%"
AND content NOT LIKE "%wan%"
AND content NOT LIKE "%ouan%"
