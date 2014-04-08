SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w o%" AND phonetic1 NOT LIKE "%w o~%"
AND content NOT LIKE "%uo%"
AND content NOT LIKE "%uaux%"
AND content NOT LIKE "%aws%"
AND content NOT LIKE "%aw%"