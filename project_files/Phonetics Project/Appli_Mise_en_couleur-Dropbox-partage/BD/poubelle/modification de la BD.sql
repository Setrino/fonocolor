USE morphalounouv;
ALTER TABLE lex2_inflection 
ADD siHomographeGagne boolean NOT NULL default false ;
 ADD `dateCreation` DATETIME ,
 ADD `dateModif` DATETIME,
 ADD `remarques` TEXT CHARACTER SET utf8,
-- la structure d'une date '2011-01-26 14:30:00'


UPDATE book_details AS bd, book_details_old AS old
SET bd.live=1
WHERE bd.isbn13=old.isbn13
AND old.live=1

DATA LOCAL INFILE 'test_modif.csv' 
INTO TABLE modif_inflection FIELDS TERMINATED BY ',' lines terminated by '\n';


CREATE TABLE IF NOT EXISTS `Modif_inflection` (
  `entryID` int(4) NOT NULL default '0',
   `remarques` TEXT CHARACTER SET utf8,
  `content` varchar(32) character set utf8 collate utf8_bin NOT NULL default '',
  `phonetic1` varchar(64) character set utf8 collate utf8_bin default NULL,
  `phonetic2` varchar(64) character set utf8 collate utf8_bin default NULL,
  `dateCreation` DATETIME ,
  `dateModif` DATETIME,

  KEY `content` (`content`),
  KEY `phonetic1` (`phonetic1`),
  KEY `phonetic2` (`phonetic2`),
  KEY `entryID` (`entryID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `MODIF_inflection` (
  `entryID` int(4) NOT NULL default '0',
  `content` varchar(32) character set utf8 collate utf8_bin NOT NULL default '',
  `phonetic1` varchar(64) character set utf8 collate utf8_bin default NULL,
  `phonetic2` varchar(64) character set utf8 collate utf8_bin default NULL,
  `dateCreation` DATETIME ,
  `dateModif` DATETIME,
  `remarques` TEXT CHARACTER SET utf8,
  KEY `content` (`content`),
  KEY `phonetic1` (`phonetic1`),
  KEY `phonetic2` (`phonetic2`),
  KEY `entryID` (`entryID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

UPDATE `morphalounouv`.`lex2_inflection`
SET
`siHomographeGagne` = TRUE
WHERE 
`entryID` =  599 AND
`content` = 'acceptions' AND
`phonetic1` =  'a k s E p t j o~' AND
`phonetic2` = 'a k s E p t j o~';

UPDATE `morphalounouv`.`modif_inlection` 
SET
`dateModif`  = `2011-01-26 14:30:00`,
`remarques`  = "lalala"
WHERE 
`entryID` =  599 AND
`content` = 'acceptions' AND
`phonetic1` =  'a k s E p t j o~' AND
`phonetic2` = 'a k s E p t j o~';


SELECT * 
FROM `morphalounouv`.`lex2_inflection`
WHERE 
`entryID` =  599 AND
`content` = 'acceptions' AND
`phonetic1` =  'a k s E p t j o~' AND
`phonetic2` = 'a k s E p t j o~';




SELECT * 
FROM `morphalounouv`.`lex2_inflection`
WHERE 
`content` = 'acceptions' AND
`phonetic1` =  'a k s E p t j o~' AND
`phonetic2` = 'a k s E p t j o~';


