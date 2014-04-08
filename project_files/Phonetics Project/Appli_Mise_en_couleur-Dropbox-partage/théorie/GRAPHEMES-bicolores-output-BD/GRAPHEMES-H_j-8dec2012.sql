SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%H j%"
AND content NOT LIKE "%ui%"
AND content NOT LIKE "%uy%"