SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w i%"
AND content NOT LIKE "%oui%"
AND content NOT LIKE "%wi%"
AND content NOT LIKE "%ouïes%"
AND content NOT LIKE "%ouïe%"
AND content NOT LIKE "%ouï%"
AND content NOT LIKE "%ooi%"
AND content NOT LIKE "%wee%"
AND content NOT LIKE "%whi%"
