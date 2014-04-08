SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%y j%"
AND content NOT LIKE "%ui%"
AND content NOT LIKE "%uy%"
AND content NOT LIKE "%u%"