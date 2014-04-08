SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%j 9%"
AND content NOT LIKE "%yeu%"
AND content NOT LIKE "%ieu%"
AND content NOT LIKE "%ïeu%"
AND content NOT LIKE "%illeu%"
AND content NOT LIKE "%yea%"

