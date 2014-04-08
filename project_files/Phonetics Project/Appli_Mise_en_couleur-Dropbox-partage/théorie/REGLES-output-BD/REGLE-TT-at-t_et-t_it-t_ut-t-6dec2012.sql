SELECT * 
FROM LEX2_inflection
WHERE content LIKE "%tt%"
AND content NOT LIKE "%att%" AND content NOT LIKE "%ett%"
AND content NOT LIKE "%itt%" AND content NOT LIKE "%utt%"
