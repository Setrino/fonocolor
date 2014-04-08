SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%2 j%"
AND content NOT LIKE "%euillent%"
AND content NOT LIKE "%euill%"
AND content NOT LIKE "%eui%"
AND content NOT LIKE "%ueill%"