USE morphalounouv;
SELECT  lex2_lemma.* ,lex2_inflection.content
FROM lex2_lemma  LEFT JOIN lex2_inflection
ON lex2_inflection.entryID = lex2_lemma.entryID
WHERE lex2_inflection.entryID IS NULL