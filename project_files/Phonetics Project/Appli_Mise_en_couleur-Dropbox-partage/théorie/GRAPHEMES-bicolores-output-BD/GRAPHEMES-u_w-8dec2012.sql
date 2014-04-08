SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%u w%"
AND content NOT LIKE "%ew%"
AND content NOT LIKE "%oua%"
