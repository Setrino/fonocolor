SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%E j%"
AND content NOT LIKE "%eil"
AND content NOT LIKE "%eils"
AND content NOT LIKE "%yent"
AND content NOT LIKE "%yes"
AND content NOT LIKE "%eye"

AND content NOT LIKE "%eill%"
AND content NOT LIKE "%ey%"
AND content NOT LIKE "%ay%"
AND content NOT LIKE "%ei%"
AND content NOT LIKE "%a%"
AND content NOT LIKE "%ai%"