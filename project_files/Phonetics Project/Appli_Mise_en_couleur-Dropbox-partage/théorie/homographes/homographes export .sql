<?xml version="1.0"?>

<resultset statement="

SELECT DISTINCT lex2.entryID , lex2.content,  lex2.phonetic1, lex2.phonetic2, 
lex21.entryID , lex21.content, lex21.phonetic1, lex21.phonetic2
FROM lex2_inflection AS lex2 ,  lex2_inflection AS Lex21
WHERE lex2.content = lex21.content AND lex2.phonetic1 <> lex21.phonetic1 
AND lex2.entryID <= lex21.entryID 
ORDER BY lex2.content"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

	<row>
		<field name="entryID">404</field>
		<field name="content">abstergent</field>
		<field name="phonetic1">a p s t E R Z a~</field>
		<field name="phonetic2">a p s t E R Z a~</field>
		<field name="entryID">405</field>
		<field name="content">abstergent</field>
		<field name="phonetic1">a p s t E R Z @</field>
		<field name="phonetic2">a p s t E R Z @</field>
	</row>

	<row>
		<field name="entryID">403</field>
		<field name="content">abstergent</field>
		<field name="phonetic1">a p s t E R Z a~</field>
		<field name="phonetic2">a p s t E R Z a~</field>
		<field name="entryID">405</field>
		<field name="content">abstergent</field>
		<field name="phonetic1">a p s t E R Z @</field>
		<field name="phonetic2">a p s t E R Z @</field>
	</row>

	<row>
		<field name="entryID">599</field>
		<field name="content">acceptions</field>
		<field name="phonetic1">a k s E p t j o~</field>
		<field name="phonetic2">a k s E p t j o~</field>
		<field name="entryID">602</field>
		<field name="content">acceptions</field>
		<field name="phonetic1">a k s E p s j o~</field>
		<field name="phonetic2">a k s E p s j o~</field>
	</row>

	<row>
		<field name="entryID">1607</field>
		<field name="content">adoptions</field>
		<field name="phonetic1">a d O p t j o~</field>
		<field name="phonetic2">a d O/ p t j o~</field>
		<field name="entryID">1612</field>
		<field name="content">adoptions</field>
		<field name="phonetic1">a d O p s j o~</field>
		<field name="phonetic2">a d O/ p s j o~</field>
	</row>

	<row>
		<field name="entryID">1701</field>
		<field name="content">adurent</field>
		<field name="phonetic1">a d y R a~</field>
		<field name="phonetic2">a d y R a~</field>
		<field name="entryID">1702</field>
		<field name="content">adurent</field>
		<field name="phonetic1">a d y R @</field>
		<field name="phonetic2">a d y R @</field>
	</row>

	<row>
		<field name="entryID">1874</field>
		<field name="content">affident</field>
		<field name="phonetic1">a f i d a~</field>
		<field name="phonetic2">a f i d a~</field>
		<field name="entryID">1875</field>
		<field name="content">affident</field>
		<field name="phonetic1">a f i d @</field>
		<field name="phonetic2">a f i d @</field>
	</row>

	<row>
		<field name="entryID">1960</field>
		<field name="content">affluent</field>
		<field name="phonetic1">a f l y a~</field>
		<field name="phonetic2">a f l y a~</field>
		<field name="entryID">1961</field>
		<field name="content">affluent</field>
		<field name="phonetic1">a f l y @</field>
		<field name="phonetic2">a f l y @</field>
	</row>

	<row>
		<field name="entryID">1959</field>
		<field name="content">affluent</field>
		<field name="phonetic1">a f l y a~</field>
		<field name="phonetic2">a f l y a~</field>
		<field name="entryID">1961</field>
		<field name="content">affluent</field>
		<field name="phonetic1">a f l y @</field>
		<field name="phonetic2">a f l y @</field>
	</row>

	<row>
		<field name="entryID">6240</field>
		<field name="content">as</field>
		<field name="phonetic1">a s</field>
		<field name="phonetic2">a s</field>
		<field name="entryID">7569</field>
		<field name="content">as</field>
		<field name="phonetic1">a</field>
		<field name="phonetic2">a</field>
	</row>

	<row>
		<field name="entryID">6559</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i</field>
		<field name="phonetic2">a s O/ t i</field>
		<field name="entryID">6560</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i s</field>
		<field name="phonetic2">a s O/ t i s</field>
	</row>

	<row>
		<field name="entryID">6560</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i s</field>
		<field name="phonetic2">a s O/ t i s</field>
		<field name="entryID">6560</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i</field>
		<field name="phonetic2">a s O/ t i</field>
	</row>

	<row>
		<field name="entryID">6560</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i</field>
		<field name="phonetic2">a s O/ t i</field>
		<field name="entryID">6560</field>
		<field name="content">assotis</field>
		<field name="phonetic1">a s O t i s</field>
		<field name="phonetic2">a s O/ t i s</field>
	</row>

	<row>
		<field name="entryID">6902</field>
		<field name="content">attentions</field>
		<field name="phonetic1">a t a~ t j o~</field>
		<field name="phonetic2">a t a~ t j o~</field>
		<field name="entryID">6904</field>
		<field name="content">attentions</field>
		<field name="phonetic1">a t a~ s j o~</field>
		<field name="phonetic2">a t a~ s j o~</field>
	</row>

	<row>
		<field name="entryID">9636</field>
		<field name="content">bitter</field>
		<field name="phonetic1">b i t E R</field>
		<field name="phonetic2">b i t E R</field>
		<field name="entryID">9637</field>
		<field name="content">bitter</field>
		<field name="phonetic1">b i t e</field>
		<field name="phonetic2">b i t e</field>
	</row>

	<row>
		<field name="entryID">10826</field>
		<field name="content">boxer</field>
		<field name="phonetic1">b O k s E R</field>
		<field name="phonetic2">b O/ k s E R</field>
		<field name="entryID">10827</field>
		<field name="content">boxer</field>
		<field name="phonetic1">b O k s e</field>
		<field name="phonetic2">b O/ k s e</field>
	</row>

	<row>
		<field name="entryID">12937</field>
		<field name="content">canter</field>
		<field name="phonetic1">k a~ t E R</field>
		<field name="phonetic2">k a~ t E R</field>
		<field name="entryID">12938</field>
		<field name="content">canter</field>
		<field name="phonetic1">k a~ t e</field>
		<field name="phonetic2">k a~ t e</field>
	</row>

	<row>
		<field name="entryID">13871</field>
		<field name="content">cavas</field>
		<field name="phonetic1">k a v a s</field>
		<field name="phonetic2">k a v a s</field>
		<field name="entryID">13878</field>
		<field name="content">cavas</field>
		<field name="phonetic1">k a v a</field>
		<field name="phonetic2">k a v a</field>
	</row>

	<row>
		<field name="entryID">14204</field>
		<field name="content">challenger</field>
		<field name="phonetic1">S a l e n Z 2 R</field>
		<field name="phonetic2">S a l e n Z 6 R</field>
		<field name="entryID">14205</field>
		<field name="content">challenger</field>
		<field name="phonetic1">S a l E n Z e</field>
		<field name="phonetic2">S a l E n Z e</field>
	</row>

	<row>
		<field name="entryID">16802</field>
		<field name="content">complétions</field>
		<field name="phonetic1">k o~ p l e t j o~</field>
		<field name="phonetic2">k o~ p l E/ t j o~</field>
		<field name="entryID">16804</field>
		<field name="content">complétions</field>
		<field name="phonetic1">k o~ p l e s j o~</field>
		<field name="phonetic2">k o~ p l E/ s j o~</field>
	</row>

	<row>
		<field name="entryID">17023</field>
		<field name="content">concoctions</field>
		<field name="phonetic1">k o~ k O k t j o~</field>
		<field name="phonetic2">k o~ k O/ k t j o~</field>
		<field name="entryID">17024</field>
		<field name="content">concoctions</field>
		<field name="phonetic1">k o~ k O k s j o~</field>
		<field name="phonetic2">k o~ k O/ k s j o~</field>
	</row>

	<row>
		<field name="entryID">17042</field>
		<field name="content">concrétions</field>
		<field name="phonetic1">k o~ k R e t j o~</field>
		<field name="phonetic2">k o~ k R E/ t j o~</field>
		<field name="entryID">17043</field>
		<field name="content">concrétions</field>
		<field name="phonetic1">k o~ k R e s j o~</field>
		<field name="phonetic2">k o~ k R E/ s j o~</field>
	</row>

	<row>
		<field name="entryID">17198</field>
		<field name="content">confluent</field>
		<field name="phonetic1">k o~ f l y a~</field>
		<field name="phonetic2">k o~ f l y a~</field>
		<field name="entryID">17199</field>
		<field name="content">confluent</field>
		<field name="phonetic1">k o~ f l y</field>
		<field name="phonetic2">k o~ f l y</field>
	</row>

	<row>
		<field name="entryID">17197</field>
		<field name="content">confluent</field>
		<field name="phonetic1">k o~ f l y a~</field>
		<field name="phonetic2">k o~ f l y a~</field>
		<field name="entryID">17199</field>
		<field name="content">confluent</field>
		<field name="phonetic1">k o~ f l y</field>
		<field name="phonetic2">k o~ f l y</field>
	</row>

	<row>
		<field name="entryID">17295</field>
		<field name="content">congruent</field>
		<field name="phonetic1">k o~ g R y a~</field>
		<field name="phonetic2">k o~ g R y a~</field>
		<field name="entryID">17296</field>
		<field name="content">congruent</field>
		<field name="phonetic1">k o~ g R y</field>
		<field name="phonetic2">k o~ g R y</field>
	</row>

	<row>
		<field name="entryID">17399</field>
		<field name="content">connivent</field>
		<field name="phonetic1">k O n i v a~</field>
		<field name="phonetic2">k O/ n i v a~</field>
		<field name="entryID">17400</field>
		<field name="content">connivent</field>
		<field name="phonetic1">k O n i v @</field>
		<field name="phonetic2">k O/ n i v @</field>
	</row>

	<row>
		<field name="entryID">17680</field>
		<field name="content">content</field>
		<field name="phonetic1">k o~ t a~</field>
		<field name="phonetic2">k o~ t a~</field>
		<field name="entryID">17693</field>
		<field name="content">content</field>
		<field name="phonetic1">k o~ t @</field>
		<field name="phonetic2">k o~ t @</field>
	</row>

	<row>
		<field name="entryID">17681</field>
		<field name="content">content</field>
		<field name="phonetic1">k o~ t a~</field>
		<field name="phonetic2">k o~ t a~</field>
		<field name="entryID">17693</field>
		<field name="content">content</field>
		<field name="phonetic1">k o~ t @</field>
		<field name="phonetic2">k o~ t @</field>
	</row>

	<row>
		<field name="entryID">17954</field>
		<field name="content">convergent</field>
		<field name="phonetic1">k o~ v E R Z a~</field>
		<field name="phonetic2">k o~ v E R Z a~</field>
		<field name="entryID">17955</field>
		<field name="content">convergent</field>
		<field name="phonetic1">k o~ v E R Z @</field>
		<field name="phonetic2">k o~ v E R Z @</field>
	</row>

	<row>
		<field name="entryID">17939</field>
		<field name="content">convient</field>
		<field name="phonetic1">k o~ v j e~</field>
		<field name="phonetic2">k o~ v j e~</field>
		<field name="entryID">17984</field>
		<field name="content">convient</field>
		<field name="phonetic1">k o~ v i</field>
		<field name="phonetic2">k o~ v i</field>
	</row>

	<row>
		<field name="entryID">18254</field>
		<field name="content">corner</field>
		<field name="phonetic1">k O R n E R</field>
		<field name="phonetic2">k O R n E R</field>
		<field name="entryID">18255</field>
		<field name="content">corner</field>
		<field name="phonetic1">k O R n e</field>
		<field name="phonetic2">k O R n e</field>
	</row>

	<row>
		<field name="entryID">18833</field>
		<field name="content">couvent</field>
		<field name="phonetic1">k u v a~</field>
		<field name="phonetic2">k u v a~</field>
		<field name="entryID">18835</field>
		<field name="content">couvent</field>
		<field name="phonetic1">k u v @</field>
		<field name="phonetic2">k u v @</field>
	</row>

	<row>
		<field name="entryID">18881</field>
		<field name="content">coïncident</field>
		<field name="phonetic1">k O e~ s i d a~</field>
		<field name="phonetic2">k O/ e~ s i d a~</field>
		<field name="entryID">18882</field>
		<field name="content">coïncident</field>
		<field name="phonetic1">k O e~ s i d @</field>
		<field name="phonetic2">k O/ e~ s i d @</field>
	</row>

	<row>
		<field name="entryID">20615</field>
		<field name="content">diffluent</field>
		<field name="phonetic1">d i f l y a~</field>
		<field name="phonetic2">d i f l y a~</field>
		<field name="entryID">20616</field>
		<field name="content">diffluent</field>
		<field name="phonetic1">d i f l y</field>
		<field name="phonetic2">d i f l y</field>
	</row>

	<row>
		<field name="entryID">21123</field>
		<field name="content">distrayiez</field>
		<field name="phonetic1">d i s t R E j e</field>
		<field name="phonetic2">d i s t R E/ j e</field>
		<field name="entryID">21123</field>
		<field name="content">distrayiez</field>
		<field name="phonetic1">d i s t R e j e</field>
		<field name="phonetic2">d i s t R E/ j e</field>
	</row>

	<row>
		<field name="entryID">21123</field>
		<field name="content">distrayiez</field>
		<field name="phonetic1">d i s t R e j e</field>
		<field name="phonetic2">d i s t R E/ j e</field>
		<field name="entryID">21123</field>
		<field name="content">distrayiez</field>
		<field name="phonetic1">d i s t R E j e</field>
		<field name="phonetic2">d i s t R E/ j e</field>
	</row>

	<row>
		<field name="entryID">21164</field>
		<field name="content">divergent</field>
		<field name="phonetic1">d i v E R Z a~</field>
		<field name="phonetic2">d i v E R Z a~</field>
		<field name="entryID">21165</field>
		<field name="content">divergent</field>
		<field name="phonetic1">d i v E R Z @</field>
		<field name="phonetic2">d i v E R Z @</field>
	</row>

	<row>
		<field name="entryID">21319</field>
		<field name="content">dolent</field>
		<field name="phonetic1">d O l a~</field>
		<field name="phonetic2">d O/ l a~</field>
		<field name="entryID">21321</field>
		<field name="content">dolent</field>
		<field name="phonetic1">d O l @</field>
		<field name="phonetic2">d O/ l @</field>
	</row>

	<row>
		<field name="entryID">23810</field>
		<field name="content">désertions</field>
		<field name="phonetic1">d e z E R t j o~</field>
		<field name="phonetic2">d E/ z E R t j o~</field>
		<field name="entryID">23812</field>
		<field name="content">désertions</field>
		<field name="phonetic1">d e z E R s j o~</field>
		<field name="phonetic2">d E/ z E R s j o~</field>
	</row>

	<row>
		<field name="entryID">23996</field>
		<field name="content">détergent</field>
		<field name="phonetic1">d e t E R Z a~</field>
		<field name="phonetic2">d E/ t E R Z a~</field>
		<field name="entryID">23997</field>
		<field name="content">détergent</field>
		<field name="phonetic1">d e t E R Z @</field>
		<field name="phonetic2">d E/ t E R Z @</field>
	</row>

	<row>
		<field name="entryID">23995</field>
		<field name="content">détergent</field>
		<field name="phonetic1">d e t E R Z a~</field>
		<field name="phonetic2">d E/ t E R Z a~</field>
		<field name="entryID">23997</field>
		<field name="content">détergent</field>
		<field name="phonetic1">d e t E R Z @</field>
		<field name="phonetic2">d E/ t E R Z @</field>
	</row>

	<row>
		<field name="entryID">24325</field>
		<field name="content">effluent</field>
		<field name="phonetic1">e f l y a~</field>
		<field name="phonetic2">E/ f l y a~</field>
		<field name="entryID">24326</field>
		<field name="content">effluent</field>
		<field name="phonetic1">e f l y</field>
		<field name="phonetic2">E/ f l y</field>
	</row>

	<row>
		<field name="entryID">24324</field>
		<field name="content">effluent</field>
		<field name="phonetic1">e f l y a~</field>
		<field name="phonetic2">E/ f l y a~</field>
		<field name="entryID">24326</field>
		<field name="content">effluent</field>
		<field name="phonetic1">e f l y</field>
		<field name="phonetic2">E/ f l y</field>
	</row>

	<row>
		<field name="entryID">25096</field>
		<field name="content">enfuyiez</field>
		<field name="phonetic1">a~ f H i j i e</field>
		<field name="phonetic2">a~ f H i j i e</field>
		<field name="entryID">25096</field>
		<field name="content">enfuyiez</field>
		<field name="phonetic1">a~ f H i j e</field>
		<field name="phonetic2">a~ f H i j e</field>
	</row>

	<row>
		<field name="entryID">25096</field>
		<field name="content">enfuyiez</field>
		<field name="phonetic1">a~ f H i j e</field>
		<field name="phonetic2">a~ f H i j e</field>
		<field name="entryID">25096</field>
		<field name="content">enfuyiez</field>
		<field name="phonetic1">a~ f H i j i e</field>
		<field name="phonetic2">a~ f H i j i e</field>
	</row>

	<row>
		<field name="entryID">25868</field>
		<field name="content">est</field>
		<field name="phonetic1">E s t</field>
		<field name="phonetic2">E s t</field>
		<field name="entryID">67366</field>
		<field name="content">est</field>
		<field name="phonetic1">e</field>
		<field name="phonetic2">E/</field>
	</row>

	<row>
		<field name="entryID">25882</field>
		<field name="content">ester</field>
		<field name="phonetic1">E s t E R</field>
		<field name="phonetic2">E s t E R</field>
		<field name="entryID">25883</field>
		<field name="content">ester</field>
		<field name="phonetic1">E s t e</field>
		<field name="phonetic2">E s t e</field>
	</row>

	<row>
		<field name="entryID">26079</field>
		<field name="content">excellent</field>
		<field name="phonetic1">E k s E l a~</field>
		<field name="phonetic2">E k s E l a~</field>
		<field name="entryID">26081</field>
		<field name="content">excellent</field>
		<field name="phonetic1">E k s E l @</field>
		<field name="phonetic2">E k s E l @</field>
	</row>

	<row>
		<field name="entryID">26140</field>
		<field name="content">excrétions</field>
		<field name="phonetic1">E k s k R e t j o~</field>
		<field name="phonetic2">E k s k R E/ t j o~</field>
		<field name="entryID">26142</field>
		<field name="content">excrétions</field>
		<field name="phonetic1">E k s k R e s j o~</field>
		<field name="phonetic2">E k s k R E/ s j o~</field>
	</row>

	<row>
		<field name="entryID">26378</field>
		<field name="content">expédient</field>
		<field name="phonetic1">E k s p e d j a~</field>
		<field name="phonetic2">E k s p E/ d j a~</field>
		<field name="entryID">26379</field>
		<field name="content">expédient</field>
		<field name="phonetic1">E k s p e d i</field>
		<field name="phonetic2">E k s p E/ d i</field>
	</row>

	<row>
		<field name="entryID">26377</field>
		<field name="content">expédient</field>
		<field name="phonetic1">E k s p e d j a~</field>
		<field name="phonetic2">E k s p E/ d j a~</field>
		<field name="entryID">26379</field>
		<field name="content">expédient</field>
		<field name="phonetic1">E k s p e d i</field>
		<field name="phonetic2">E k s p E/ d i</field>
	</row>

	<row>
		<field name="entryID">27058</field>
		<field name="content">ferment</field>
		<field name="phonetic1">f E R m a~</field>
		<field name="phonetic2">f E R m a~</field>
		<field name="entryID">27063</field>
		<field name="content">ferment</field>
		<field name="phonetic1">f E R m @</field>
		<field name="phonetic2">f E R m @</field>
	</row>

	<row>
		<field name="entryID">27240</field>
		<field name="content">fier</field>
		<field name="phonetic1">f j E R</field>
		<field name="phonetic2">f j E R</field>
		<field name="entryID">27241</field>
		<field name="content">fier</field>
		<field name="phonetic1">f j e</field>
		<field name="phonetic2">f j e</field>
	</row>

	<row>
		<field name="entryID">27599</field>
		<field name="content">flipper</field>
		<field name="phonetic1">f l i p 9 R</field>
		<field name="phonetic2">f l i p 9 R</field>
		<field name="entryID">27600</field>
		<field name="content">flipper</field>
		<field name="phonetic1">f l i p e</field>
		<field name="phonetic2">f l i p e</field>
	</row>

	<row>
		<field name="entryID">27672</field>
		<field name="content">fluent</field>
		<field name="phonetic1">f l y a~</field>
		<field name="phonetic2">f l y a~</field>
		<field name="entryID">27674</field>
		<field name="content">fluent</field>
		<field name="phonetic1">f l y</field>
		<field name="phonetic2">f l y</field>
	</row>

	<row>
		<field name="entryID">32746</field>
		<field name="content">imminent</field>
		<field name="phonetic1">i m i n a~</field>
		<field name="phonetic2">i m i n a~</field>
		<field name="entryID">32747</field>
		<field name="content">imminent</field>
		<field name="phonetic1">i m i n @</field>
		<field name="phonetic2">i m i n @</field>
	</row>

	<row>
		<field name="entryID">33891</field>
		<field name="content">influent</field>
		<field name="phonetic1">e~ f l y a~</field>
		<field name="phonetic2">e~ f l y a~</field>
		<field name="entryID">33894</field>
		<field name="content">influent</field>
		<field name="phonetic1">e~ f l y</field>
		<field name="phonetic2">e~ f l y</field>
	</row>

	<row>
		<field name="entryID">34216</field>
		<field name="content">insolent</field>
		<field name="phonetic1">e~ s O l a~</field>
		<field name="phonetic2">e~ s O l a~</field>
		<field name="entryID">34217</field>
		<field name="content">insolent</field>
		<field name="phonetic1">e~ s O l @</field>
		<field name="phonetic2">e~ s O l @</field>
	</row>

	<row>
		<field name="entryID">34352</field>
		<field name="content">insurgent</field>
		<field name="phonetic1">e~ s y R Z a~</field>
		<field name="phonetic2">e~ s y R Z a~</field>
		<field name="entryID">34353</field>
		<field name="content">insurgent</field>
		<field name="phonetic1">e~ s y R Z @</field>
		<field name="phonetic2">e~ s y R Z @</field>
	</row>

	<row>
		<field name="entryID">34430</field>
		<field name="content">intentions</field>
		<field name="phonetic1">e~ t a~ t j o~</field>
		<field name="phonetic2">e~ t a~ t j o~</field>
		<field name="entryID">34431</field>
		<field name="content">intentions</field>
		<field name="phonetic1">e~ t a~ s j o~</field>
		<field name="phonetic2">e~ t a~ s j o~</field>
	</row>

	<row>
		<field name="entryID">34636</field>
		<field name="content">interviewer</field>
		<field name="phonetic1">e~ t E R v j u v 9 R</field>
		<field name="phonetic2">e~ t E R v j u v 6 R</field>
		<field name="entryID">34637</field>
		<field name="content">interviewer</field>
		<field name="phonetic1">e~ t E R v j u v e</field>
		<field name="phonetic2">e~ t E R v j u v e</field>
	</row>

	<row>
		<field name="entryID">34801</field>
		<field name="content">inventions</field>
		<field name="phonetic1">e~ v a~ t j o~</field>
		<field name="phonetic2">e~ v a~ t j o~</field>
		<field name="entryID">34806</field>
		<field name="content">inventions</field>
		<field name="phonetic1">e~ v a~ s j o~</field>
		<field name="phonetic2">e~ v a~ s j o~</field>
	</row>

	<row>
		<field name="entryID">38517</field>
		<field name="content">manager</field>
		<field name="phonetic1">m a n a d Z E R</field>
		<field name="phonetic2">m a n a d Z E R</field>
		<field name="entryID">38518</field>
		<field name="content">manager</field>
		<field name="phonetic1">m a n a d Z e</field>
		<field name="phonetic2">m a n a d Z 6 e</field>
	</row>

	<row>
		<field name="entryID">39524</field>
		<field name="content">mentions</field>
		<field name="phonetic1">m a~ s j o~</field>
		<field name="phonetic2">m a~ s j o~</field>
		<field name="entryID">39527</field>
		<field name="content">mentions</field>
		<field name="phonetic1">m a~ t j o~</field>
		<field name="phonetic2">m a~ t j o~</field>
	</row>

	<row>
		<field name="entryID">39943</field>
		<field name="content">minerai</field>
		<field name="phonetic1">m i n @ R e</field>
		<field name="phonetic2">m i n @ R e</field>
		<field name="entryID">39944</field>
		<field name="content">minerai</field>
		<field name="phonetic1">m i n @ R E</field>
		<field name="phonetic2">m i n @ R E/</field>
	</row>

	<row>
		<field name="entryID">42893</field>
		<field name="content">notions</field>
		<field name="phonetic1">n O t j o~</field>
		<field name="phonetic2">n O/ t j o~</field>
		<field name="entryID">42898</field>
		<field name="content">notions</field>
		<field name="phonetic1">n O s j o~</field>
		<field name="phonetic2">n O/ s j o~</field>
	</row>

	<row>
		<field name="entryID">43208</field>
		<field name="content">négligent</field>
		<field name="phonetic1">n e g l i Z a~</field>
		<field name="phonetic2">n E/ g l i Z a~</field>
		<field name="entryID">43209</field>
		<field name="content">négligent</field>
		<field name="phonetic1">n e g l i Z @</field>
		<field name="phonetic2">n E/ g l i Z @</field>
	</row>

	<row>
		<field name="entryID">44986</field>
		<field name="content">palmer</field>
		<field name="phonetic1">p a l m E R</field>
		<field name="phonetic2">p a l m E R</field>
		<field name="entryID">44987</field>
		<field name="content">palmer</field>
		<field name="phonetic1">p a l m e</field>
		<field name="phonetic2">p a l m e</field>
	</row>

	<row>
		<field name="entryID">45524</field>
		<field name="content">parent</field>
		<field name="phonetic1">p a R a~</field>
		<field name="phonetic2">p a R a~</field>
		<field name="entryID">45533</field>
		<field name="content">parent</field>
		<field name="phonetic1">p a R @</field>
		<field name="phonetic2">p a R @</field>
	</row>

	<row>
		<field name="entryID">45523</field>
		<field name="content">parent</field>
		<field name="phonetic1">p a R a~</field>
		<field name="phonetic2">p a R a~</field>
		<field name="entryID">45533</field>
		<field name="content">parent</field>
		<field name="phonetic1">p a R @</field>
		<field name="phonetic2">p a R @</field>
	</row>

	<row>
		<field name="entryID">46520</field>
		<field name="content">permanent</field>
		<field name="phonetic1">p E R m a n a~</field>
		<field name="phonetic2">p E R m a n a~</field>
		<field name="entryID">46521</field>
		<field name="content">permanent</field>
		<field name="phonetic1">p E R m a n @</field>
		<field name="phonetic2">p E R m a n @</field>
	</row>

	<row>
		<field name="entryID">46519</field>
		<field name="content">permanent</field>
		<field name="phonetic1">p E R m a n a~</field>
		<field name="phonetic2">p E R m a n a~</field>
		<field name="entryID">46521</field>
		<field name="content">permanent</field>
		<field name="phonetic1">p E R m a n @</field>
		<field name="phonetic2">p E R m a n @</field>
	</row>

	<row>
		<field name="entryID">48640</field>
		<field name="content">portions</field>
		<field name="phonetic1">p O R t j o~</field>
		<field name="phonetic2">p O R t j o~</field>
		<field name="entryID">48648</field>
		<field name="content">portions</field>
		<field name="phonetic1">p O R s j o~</field>
		<field name="phonetic2">p O R s j o~</field>
	</row>

	<row>
		<field name="entryID">48724</field>
		<field name="content">poster</field>
		<field name="phonetic1">p O s t E R</field>
		<field name="phonetic2">p O/ s t E R</field>
		<field name="entryID">48725</field>
		<field name="content">poster</field>
		<field name="phonetic1">p O s t e</field>
		<field name="phonetic2">p O/ s t e</field>
	</row>

	<row>
		<field name="entryID">49756</field>
		<field name="content">proéminent</field>
		<field name="phonetic1">p R O e m i n a~</field>
		<field name="phonetic2">p R O/ E/ m i n a~</field>
		<field name="entryID">49757</field>
		<field name="content">proéminent</field>
		<field name="phonetic1">p R O e m i n @</field>
		<field name="phonetic2">p R O/ E/ m i n @</field>
	</row>

	<row>
		<field name="entryID">50091</field>
		<field name="content">président</field>
		<field name="phonetic1">p R e z i d a~</field>
		<field name="phonetic2">p R E/ z i d a~</field>
		<field name="entryID">50095</field>
		<field name="content">président</field>
		<field name="phonetic1">p R e z i d @</field>
		<field name="phonetic2">p R E/ z i d @</field>
	</row>

	<row>
		<field name="entryID">50141</field>
		<field name="content">prévalent</field>
		<field name="phonetic1">p R e v a l a~</field>
		<field name="phonetic2">p R E/ v a l a~</field>
		<field name="entryID">50142</field>
		<field name="content">prévalent</field>
		<field name="phonetic1">p R e v a l @</field>
		<field name="phonetic2">p R E/ v a l @</field>
	</row>

	<row>
		<field name="entryID">50553</field>
		<field name="content">purulent</field>
		<field name="phonetic1">p y R y l a~</field>
		<field name="phonetic2">p y R y l a~</field>
		<field name="entryID">50554</field>
		<field name="content">purulent</field>
		<field name="phonetic1">p y R y l @</field>
		<field name="phonetic2">p y R y l @</field>
	</row>

	<row>
		<field name="entryID">51220</field>
		<field name="content">quarter</field>
		<field name="phonetic1">k w a R t E R</field>
		<field name="phonetic2">k w a R t E R</field>
		<field name="entryID">51221</field>
		<field name="content">quarter</field>
		<field name="phonetic1">k a R t e</field>
		<field name="phonetic2">k a R t e</field>
	</row>

	<row>
		<field name="entryID">51833</field>
		<field name="content">ralentie</field>
		<field name="phonetic1">R a l a~ t i</field>
		<field name="phonetic2">R a l a~ t i</field>
		<field name="entryID">51834</field>
		<field name="content">ralentie</field>
		<field name="phonetic1">R a l a~ s i</field>
		<field name="phonetic2">R a l a~ s i</field>
	</row>

	<row>
		<field name="entryID">51831</field>
		<field name="content">ralentie</field>
		<field name="phonetic1">R a l a~ t i</field>
		<field name="phonetic2">R a l a~ t i</field>
		<field name="entryID">51834</field>
		<field name="content">ralentie</field>
		<field name="phonetic1">R a l a~ s i</field>
		<field name="phonetic2">R a l a~ s i</field>
	</row>

	<row>
		<field name="entryID">53147</field>
		<field name="content">reporter</field>
		<field name="phonetic1">R @ p O R t E R</field>
		<field name="phonetic2">R @ p O R t E R</field>
		<field name="entryID">53148</field>
		<field name="content">reporter</field>
		<field name="phonetic1">R @ p O R t e</field>
		<field name="phonetic2">R @ p O R t e</field>
	</row>

	<row>
		<field name="entryID">53264</field>
		<field name="content">ressaisis</field>
		<field name="phonetic1">R 2 s e z i</field>
		<field name="phonetic2">R 2 s E/ z i</field>
		<field name="entryID">53264</field>
		<field name="content">ressaisis</field>
		<field name="phonetic1">R @ s e z i</field>
		<field name="phonetic2">R @ s E/ z i</field>
	</row>

	<row>
		<field name="entryID">53264</field>
		<field name="content">ressaisis</field>
		<field name="phonetic1">R @ s e z i</field>
		<field name="phonetic2">R @ s E/ z i</field>
		<field name="entryID">53264</field>
		<field name="content">ressaisis</field>
		<field name="phonetic1">R 2 s e z i</field>
		<field name="phonetic2">R 2 s E/ z i</field>
	</row>

	<row>
		<field name="entryID">53509</field>
		<field name="content">rewriter</field>
		<field name="phonetic1">R i R a j t 9 R</field>
		<field name="phonetic2">R i R a j t 9 R</field>
		<field name="entryID">53510</field>
		<field name="content">rewriter</field>
		<field name="phonetic1">R i R a j t e</field>
		<field name="phonetic2">R i R a j t e</field>
	</row>

	<row>
		<field name="entryID">53611</field>
		<field name="content">riant</field>
		<field name="phonetic1">R i a~</field>
		<field name="phonetic2">R i a~</field>
		<field name="entryID">53783</field>
		<field name="content">riant</field>
		<field name="phonetic1">R i j a~</field>
		<field name="phonetic2">R i j a~</field>
	</row>

	<row>
		<field name="entryID">55178</field>
		<field name="content">résident</field>
		<field name="phonetic1">R e z i d a~</field>
		<field name="phonetic2">R E/ z i d a~</field>
		<field name="entryID">55180</field>
		<field name="content">résident</field>
		<field name="phonetic1">R e z i d @</field>
		<field name="phonetic2">R E/ z i d @</field>
	</row>

	<row>
		<field name="entryID">55177</field>
		<field name="content">résident</field>
		<field name="phonetic1">R e z i d a~</field>
		<field name="phonetic2">R E/ z i d a~</field>
		<field name="entryID">55180</field>
		<field name="content">résident</field>
		<field name="phonetic1">R e z i d @</field>
		<field name="phonetic2">R E/ z i d @</field>
	</row>

	<row>
		<field name="entryID">55193</field>
		<field name="content">résilient</field>
		<field name="phonetic1">R e z i l j a~</field>
		<field name="phonetic2">R E/ z i l j a~</field>
		<field name="entryID">55194</field>
		<field name="content">résilient</field>
		<field name="phonetic1">R e z i l i</field>
		<field name="phonetic2">R E/ z i l i</field>
	</row>

	<row>
		<field name="entryID">55405</field>
		<field name="content">rééditions</field>
		<field name="phonetic1">R e e d i t j o~</field>
		<field name="phonetic2">R E/ E/ d i t j o~</field>
		<field name="entryID">55406</field>
		<field name="content">rééditions</field>
		<field name="phonetic1">R e e d i s j o~</field>
		<field name="phonetic2">R E/ E/ d i s j o~</field>
	</row>

	<row>
		<field name="entryID">56732</field>
		<field name="content">sens</field>
		<field name="phonetic1">s a~ s</field>
		<field name="phonetic2">s a~ s</field>
		<field name="entryID">56795</field>
		<field name="content">sens</field>
		<field name="phonetic1">s a~</field>
		<field name="phonetic2">s a~</field>
	</row>

	<row>
		<field name="entryID">56719</field>
		<field name="content">sens</field>
		<field name="phonetic1">s a~ s</field>
		<field name="phonetic2">s a~ s</field>
		<field name="entryID">56795</field>
		<field name="content">sens</field>
		<field name="phonetic1">s a~</field>
		<field name="phonetic2">s a~</field>
	</row>

	<row>
		<field name="entryID">57704</field>
		<field name="content">somnolent</field>
		<field name="phonetic1">s O m n O l a~</field>
		<field name="phonetic2">s O/ m n O/ l a~</field>
		<field name="entryID">57705</field>
		<field name="content">somnolent</field>
		<field name="phonetic1">s O m n O l @</field>
		<field name="phonetic2">s O/ m n O/ l @</field>
	</row>

	<row>
		<field name="entryID">58305</field>
		<field name="content">sprinter</field>
		<field name="phonetic1">s p R i n t E R</field>
		<field name="phonetic2">s p R i n t E R</field>
		<field name="entryID">58306</field>
		<field name="content">sprinter</field>
		<field name="phonetic1">s p R i n t e</field>
		<field name="phonetic2">s p R i n t e</field>
	</row>

	<row>
		<field name="entryID">58362</field>
		<field name="content">squatter</field>
		<field name="phonetic1">s k w a t 9 R</field>
		<field name="phonetic2">s k w a t 9 R</field>
		<field name="entryID">58363</field>
		<field name="content">squatter</field>
		<field name="phonetic1">s k w a t e</field>
		<field name="phonetic2">s k w a t e</field>
	</row>

	<row>
		<field name="entryID">58648</field>
		<field name="content">strident</field>
		<field name="phonetic1">s t R i d a~</field>
		<field name="phonetic2">s t R i d a~</field>
		<field name="entryID">58649</field>
		<field name="content">strident</field>
		<field name="phonetic1">s t R i d @</field>
		<field name="phonetic2">s t R i d @</field>
	</row>

	<row>
		<field name="entryID">59120</field>
		<field name="content">super</field>
		<field name="phonetic1">s y p E R</field>
		<field name="phonetic2">s y p E R</field>
		<field name="entryID">59121</field>
		<field name="content">super</field>
		<field name="phonetic1">s y p e</field>
		<field name="phonetic2">s y p e</field>
	</row>

	<row>
		<field name="entryID">59119</field>
		<field name="content">super</field>
		<field name="phonetic1">s y p E R</field>
		<field name="phonetic2">s y p E R</field>
		<field name="entryID">59121</field>
		<field name="content">super</field>
		<field name="phonetic1">s y p e</field>
		<field name="phonetic2">s y p e</field>
	</row>

	<row>
		<field name="entryID">59193</field>
		<field name="content">supporter</field>
		<field name="phonetic1">s y p O R t E R</field>
		<field name="phonetic2">s y p O R t E R</field>
		<field name="entryID">59194</field>
		<field name="content">supporter</field>
		<field name="phonetic1">s y p O R t e</field>
		<field name="phonetic2">s y p O R t e</field>
	</row>

	<row>
		<field name="entryID">59315</field>
		<field name="content">surfassent</field>
		<field name="phonetic1">s y R f a s @</field>
		<field name="phonetic2">s y R f a s @</field>
		<field name="entryID">59320</field>
		<field name="content">surfassent</field>
		<field name="phonetic1">s 9 R f a s @</field>
		<field name="phonetic2">s 9 R f a s @</field>
	</row>

	<row>
		<field name="entryID">59796</field>
		<field name="content">sécrétions</field>
		<field name="phonetic1">s e k R e t j o~</field>
		<field name="phonetic2">s E/ k R E/ t j o~</field>
		<field name="entryID">59798</field>
		<field name="content">sécrétions</field>
		<field name="phonetic1">s e k R e s j o~</field>
		<field name="phonetic2">s E/ k R E/ s j o~</field>
	</row>

	<row>
		<field name="entryID">60181</field>
		<field name="content">talent</field>
		<field name="phonetic1">t a l a~</field>
		<field name="phonetic2">t a l a~</field>
		<field name="entryID">60183</field>
		<field name="content">talent</field>
		<field name="phonetic1">t a l @</field>
		<field name="phonetic2">t a l @</field>
	</row>

	<row>
		<field name="entryID">61978</field>
		<field name="content">transit</field>
		<field name="phonetic1">t R a~ z i</field>
		<field name="phonetic2">t R a~ z i</field>
		<field name="entryID">61982</field>
		<field name="content">transit</field>
		<field name="phonetic1">t R a~ z i t</field>
		<field name="phonetic2">t R a~ z i t</field>
	</row>

	<row>
		<field name="entryID">61986</field>
		<field name="content">transitions</field>
		<field name="phonetic1">t R a~ z i t j o~</field>
		<field name="phonetic2">t R a~ z i t j o~</field>
		<field name="entryID">61988</field>
		<field name="content">transitions</field>
		<field name="phonetic1">t R a~ z i s j o~</field>
		<field name="phonetic2">t R a~ z i s j o~</field>
	</row>

	<row>
		<field name="entryID">63421</field>
		<field name="content">urgent</field>
		<field name="phonetic1">y R Z a~</field>
		<field name="phonetic2">y R Z a~</field>
		<field name="entryID">63422</field>
		<field name="content">urgent</field>
		<field name="phonetic1">y R Z @</field>
		<field name="phonetic2">y R Z @</field>
	</row>

	<row>
		<field name="entryID">64452</field>
		<field name="content">violent</field>
		<field name="phonetic1">v j O l a~</field>
		<field name="phonetic2">v j O/ l a~</field>
		<field name="entryID">64454</field>
		<field name="content">violent</field>
		<field name="phonetic1">v j O l @</field>
		<field name="phonetic2">v j O/ l @</field>
	</row>

	<row>
		<field name="entryID">66047</field>
		<field name="content">éditions</field>
		<field name="phonetic1">e d i t j o~</field>
		<field name="phonetic2">e d i t j o~</field>
		<field name="entryID">66049</field>
		<field name="content">éditions</field>
		<field name="phonetic1">e d i s j o~</field>
		<field name="phonetic2">e d i s j o~</field>
	</row>

	<row>
		<field name="entryID">66395</field>
		<field name="content">émergent</field>
		<field name="phonetic1">e m E R Z a~</field>
		<field name="phonetic2">e m E R Z a~</field>
		<field name="entryID">66396</field>
		<field name="content">émergent</field>
		<field name="phonetic1">e m E R Z @</field>
		<field name="phonetic2">e m E R Z @</field>
	</row>

	<row>
		<field name="entryID">66927</field>
		<field name="content">équipollent</field>
		<field name="phonetic1">e k i p O l a~</field>
		<field name="phonetic2">e k i p O l a~</field>
		<field name="entryID">66928</field>
		<field name="content">équipollent</field>
		<field name="phonetic1">e k i p O l @</field>
		<field name="phonetic2">e k i p O l @</field>
	</row>

	<row>
		<field name="entryID">66943</field>
		<field name="content">équivalent</field>
		<field name="phonetic1">e k i v a l a~</field>
		<field name="phonetic2">e k i v a l a~</field>
		<field name="entryID">66944</field>
		<field name="content">équivalent</field>
		<field name="phonetic1">e k i v a l @</field>
		<field name="phonetic2">e k i v a l @</field>
	</row>

	<row>
		<field name="entryID">66942</field>
		<field name="content">équivalent</field>
		<field name="phonetic1">e k i v a l a~</field>
		<field name="phonetic2">e k i v a l a~</field>
		<field name="entryID">66944</field>
		<field name="content">équivalent</field>
		<field name="phonetic1">e k i v a l @</field>
		<field name="phonetic2">e k i v a l @</field>
	</row>

	<row>
		<field name="entryID">67334</field>
		<field name="content">évident</field>
		<field name="phonetic1">e v i d a~</field>
		<field name="phonetic2">e v i d a~</field>
		<field name="entryID">67335</field>
		<field name="content">évident</field>
		<field name="phonetic1">e v i d @</field>
		<field name="phonetic2">e v i d @</field>
	</row>
</resultset>
