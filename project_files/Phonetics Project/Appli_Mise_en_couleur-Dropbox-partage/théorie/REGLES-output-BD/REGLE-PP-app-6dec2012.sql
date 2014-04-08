SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%pp%" AND phonetic1 LIKE "%p%" 
AND content NOT LIKE "%opp%" AND content NOT LIKE "%epp%"AND content NOT LIKE "%ipp%"
AND content NOT LIKE "%oupp%" AND content NOT LIKE "%upp%"
