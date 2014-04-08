SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%a w%"
AND content NOT LIKE "%ao"
AND content NOT LIKE "%aux"
AND content NOT LIKE "%au"
AND content NOT LIKE "%ou%"

