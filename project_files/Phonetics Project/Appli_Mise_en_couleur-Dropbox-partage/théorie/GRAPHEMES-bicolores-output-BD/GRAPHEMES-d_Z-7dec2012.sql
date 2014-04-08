SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%d Z%" AND content NOT LIKE "%dj%"
AND content NOT LIKE "%dg%"AND content NOT LIKE "%gg%"
AND content NOT LIKE "%j%" AND content NOT LIKE "%g%"