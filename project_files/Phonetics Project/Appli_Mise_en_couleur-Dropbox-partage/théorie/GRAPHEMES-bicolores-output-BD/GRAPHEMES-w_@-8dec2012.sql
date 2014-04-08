SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w @%"
AND content NOT LIKE "%went%"
AND content NOT LIKE "%wes%"
AND content NOT LIKE "%ouahé%"
AND content NOT LIKE "%we%"