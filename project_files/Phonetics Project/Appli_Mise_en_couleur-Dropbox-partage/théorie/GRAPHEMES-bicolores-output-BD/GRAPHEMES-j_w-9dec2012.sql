SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%j w%"
AND content NOT LIKE "%ouill%"
AND content NOT LIKE "%yoi%"
AND content NOT LIKE "%illoi%"
AND content NOT LIKE "%ioi%"