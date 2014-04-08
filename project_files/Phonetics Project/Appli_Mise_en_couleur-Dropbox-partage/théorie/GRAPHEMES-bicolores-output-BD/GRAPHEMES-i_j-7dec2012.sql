SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%i j%" 
AND content NOT LIKE "%illi%"
AND content NOT LIKE "%ill%"
AND content NOT LIKE "%ii%"
AND content NOT LIKE "%y%"
AND content NOT LIKE "%i%"