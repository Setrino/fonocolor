<?php

if(!defined('INCLUDE_CHECK')) die('You are not allowed to execute this file directly');

/* Database config */

$db_host		= 'localhost';
$db_user		= 'fonocolor';
$db_pass		= 'fZ4hr5!oBx1';
$db_database	= 'fonocolor';

/* End config */

$link = mysql_connect($db_host,$db_user,$db_pass) or die('Unable to establish a DB connection');

mysql_select_db($db_database,$link);
mysql_query("SET names 'LATIN1'");

?>