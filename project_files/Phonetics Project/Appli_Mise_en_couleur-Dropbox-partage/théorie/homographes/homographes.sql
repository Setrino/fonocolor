USE morphalounouv;
SELECT DISTINCT lex2.entryID , lex2.content,  lex2.phonetic1, lex2.phonetic2, 
lex21.entryID , lex21.content, lex21.phonetic1, lex21.phonetic2
FROM lex2_inflection AS lex2 ,  lex2_inflection AS Lex21
WHERE lex2.content = lex21.content AND lex2.phonetic1 <> lex21.phonetic1 
AND lex2.entryID <= lex21.entryID 
ORDER BY lex2.content
