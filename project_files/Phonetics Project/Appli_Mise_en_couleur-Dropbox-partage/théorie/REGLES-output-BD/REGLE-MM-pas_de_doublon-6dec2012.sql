SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%mm%" AND phonetic1 LIKE "%m%" AND content NOT LIKE "%amm%"
AND content NOT LIKE "%emm%" AND content NOT LIKE "%omm%" AND content NOT LIKE "%imm%"
AND content NOT LIKE "%umm%"