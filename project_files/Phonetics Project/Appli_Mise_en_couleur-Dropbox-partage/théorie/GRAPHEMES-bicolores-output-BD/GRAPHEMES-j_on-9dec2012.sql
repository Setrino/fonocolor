SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%j o~%"
AND content NOT LIKE "%ion"
AND content NOT LIKE "%ions"
AND content NOT LIKE "%illon"
AND content NOT LIKE "%illons"
AND content NOT LIKE "%yon"
AND content NOT LIKE "%yons"
AND content NOT LIKE "%ion%"
AND content NOT LIKE "%iom%"

