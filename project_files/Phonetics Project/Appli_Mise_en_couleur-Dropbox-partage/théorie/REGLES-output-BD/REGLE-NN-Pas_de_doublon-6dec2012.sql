SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%nn%" AND phonetic1 LIKE "%n%" 
AND content NOT LIKE "%ann%"
AND content NOT LIKE "%enn%" AND content NOT LIKE "%onn%" AND content NOT LIKE "%inn%"
AND content NOT LIKE "%unn%"