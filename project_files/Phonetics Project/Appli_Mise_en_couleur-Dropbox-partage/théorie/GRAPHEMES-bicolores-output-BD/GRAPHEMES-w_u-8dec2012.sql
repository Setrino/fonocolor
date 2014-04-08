SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w u%"
AND content NOT LIKE "%woo%"
AND content NOT LIKE "%auu%"