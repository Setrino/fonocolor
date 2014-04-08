SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%O j%"
AND content NOT LIKE "%oy"
AND content NOT LIKE "%oys"
AND content NOT LIKE "%oï"
AND content NOT LIKE "%oïs"

AND content NOT LIKE "%oy%"
AND content NOT LIKE "%oï%"
AND content NOT LIKE "%oi%"
AND content NOT LIKE "%oill%"
