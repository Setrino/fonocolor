SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%e j%"
AND content NOT LIKE "%éi%"
AND content NOT LIKE "%ay%"
AND content NOT LIKE "%éy%"
AND content NOT LIKE "%ai%"