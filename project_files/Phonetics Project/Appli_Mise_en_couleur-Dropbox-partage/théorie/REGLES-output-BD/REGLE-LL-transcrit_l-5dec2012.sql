SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%ll%" AND phonetic1 LIKE "%l%" AND content NOT LIKE "%all%"
AND content NOT LIKE "%ell%" AND content NOT LIKE "%oll%" AND content NOT LIKE "%yll%"
