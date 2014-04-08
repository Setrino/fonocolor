SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%u j%"
AND content NOT LIKE "%ouil"
AND content NOT LIKE "%ouient"
AND content NOT LIKE "%ouies"
AND content NOT LIKE "%ouils"

AND content NOT LIKE "%ouill%"
AND content NOT LIKE "%ouille%"
AND content NOT LIKE "%ouillent%"
AND content NOT LIKE "%ouilles%"
AND content NOT LIKE "%ui%"
AND content NOT LIKE "%ouyi%"
AND content NOT LIKE "%ouy%"
AND content NOT LIKE "%oui%"
AND content NOT LIKE "%ouï%"
