SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%ss"
AND content NOT LIKE "%ass%" AND content NOT LIKE "%ess%"
AND content NOT LIKE "%iss%" AND content NOT LIKE "%nss%"
AND content NOT LIKE "%uss%"
AND content NOT LIKE "%yss%"