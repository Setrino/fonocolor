SELECT DISTINCT lex2.entryID , lex2.content,  lex2.phonetic1, lex2.phonetic2
FROM lex2_inflection AS lex2 
WHERE lex2.content = "plus"