SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%H e%" AND phonetic1 NOT LIKE "%H e~%"
AND content NOT LIKE "%uer" AND content NOT LIKE "%uez"
AND content LIKE "%ué%"
