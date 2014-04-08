SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w O%"
AND content NOT LIKE "%wo%"
