SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%j y%"
AND content NOT LIKE "%u"
AND content NOT LIKE "%ue"
AND content NOT LIKE "%ues"
AND content NOT LIKE "%us"
AND content NOT LIKE "%iu%"
AND content NOT LIKE "%illu%"
AND content NOT LIKE "%yu%"


