-- phpMyAdmin SQL Dump
-- version 3.5.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 15, 2013 at 08:56 AM
-- Server version: 5.1.49
-- PHP Version: 5.3.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fonocolor`
--

-- --------------------------------------------------------

--
-- Table structure for table `relation`
--

CREATE TABLE IF NOT EXISTS `relation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phoneme` varchar(128) CHARACTER SET latin1 DEFAULT NULL,
  `color` varchar(128) CHARACTER SET latin1 DEFAULT NULL,
  `colorTop` varchar(128) CHARACTER SET latin1 DEFAULT NULL,
  `colorBottom` varchar(128) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=41 ;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`id`, `phoneme`, `color`, `colorTop`, `colorBottom`) VALUES
(1, 'j', '#FA002E', NULL, NULL),
(2, 'i', '#FA002E', NULL, NULL),
(3, 'e', '#FF5800', NULL, NULL),
(4, 'E', '#F7007E', NULL, NULL),
(5, 'a', '#B634BB', NULL, NULL),
(6, 'O', '#4171d7', NULL, NULL),
(7, 'o', '#002fb2', NULL, NULL),
(8, 'u', '#4AD6CA', NULL, NULL),
(9, 'w', '#4AD6CA', NULL, NULL),
(10, 'y', '#FDD50E', NULL, NULL),
(11, 'H', '#FDD50E', NULL, NULL),
(12, '2', '#61DE4D', NULL, NULL),
(13, '9', '#BDEC65', NULL, NULL),
(14, '@', '#BDEC65', NULL, NULL),
(15, 'e~', '#FFAD87', NULL, NULL),
(16, '9~', '#FFAD87', NULL, NULL),
(17, 'a~', '#E7C1E3', NULL, NULL),
(18, 'o~', '#C2DEEA', NULL, NULL),
(19, 'p', '#1f5630', NULL, NULL),
(20, 't', '#007363', NULL, NULL),
(21, 'k', '#380096', NULL, NULL),
(22, 'b', '#84003C', NULL, NULL),
(23, 'd', '#B06F00', NULL, NULL),
(24, 'g', '#602144', NULL, NULL),
(25, 'f', '#787A7B', NULL, NULL),
(26, 's', '#af8970', NULL, NULL),
(27, 'S', '#4A3651', NULL, NULL),
(28, 'v', '#AE9A00', NULL, NULL),
(29, 'z', '#912b14', NULL, NULL),
(30, 'Z', '#8A44C6', NULL, NULL),
(31, 'l', '#91BAA3', NULL, NULL),
(32, 'R', '#ADA188', NULL, NULL),
(33, 'm', '#c5858f', NULL, NULL),
(34, 'n', '#546856', NULL, NULL),
(35, 'k s', NULL, '#af8970', '#380096'),
(36, 'g z', NULL, '#602144', '#912b14'),
(37, 't S', NULL, '#007363', '#4A3651'),
(38, 'd Z', NULL, '#B06F00', '#8A44C6'),
(39, 'a~ n', NULL, '#E7C1E3', '#7d250e'),
(40, 'w a', NULL, '#4AD6CA', '#B634BB');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
