SELECT * 
FROM LEX2_inflection
WHERE phonetic1 LIKE "%w e%" AND phonetic1 NOT LIKE "%w e~%" 
AND content NOT LIKE "%wa%"
AND content NOT LIKE "%we%"
AND content NOT LIKE "%ouées%"
AND content NOT LIKE "%ouée%"
AND content NOT LIKE "%oués%"
AND content NOT LIKE "%oué%"
AND content NOT LIKE "%ouai%"
AND content NOT LIKE "%ouets%"
AND content NOT LIKE "%ouet%"
AND content NOT LIKE "%uai%"
AND content NOT LIKE "%ue%"