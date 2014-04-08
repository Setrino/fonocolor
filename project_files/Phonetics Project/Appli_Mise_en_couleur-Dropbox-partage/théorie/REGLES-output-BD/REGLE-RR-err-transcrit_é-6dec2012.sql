SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%rr%" AND phonetic1 LIKE "%R%" 
AND content NOT LIKE "%arr%" AND content NOT LIKE "%err%"
AND content NOT LIKE "%érr%" AND content NOT LIKE "%ourr%"
AND content NOT LIKE "%eurr%" AND content NOT LIKE "%orr%"
AND content NOT LIKE "%brr%" AND content NOT LIKE "%yrr%" 
AND content NOT LIKE "%irr%"AND content NOT LIKE "%urr%" 
 