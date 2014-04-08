SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%t S%" AND content NOT LIKE "%tch%"
AND content NOT LIKE "%tsch%" AND content NOT LIKE "%cc%"
AND content NOT LIKE "%ch%"  AND content NOT LIKE "%c%" 