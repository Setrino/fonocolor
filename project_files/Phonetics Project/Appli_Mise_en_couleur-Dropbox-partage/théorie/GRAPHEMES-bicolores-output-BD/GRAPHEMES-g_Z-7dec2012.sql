SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%g z%" AND content NOT LIKE "%cz%" 
AND content NOT LIKE "%cs%" AND content NOT LIKE "%x%"