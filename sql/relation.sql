-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 21, 2013 at 02:25 AM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

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

CREATE TABLE `relation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phoneme` varchar(128) DEFAULT NULL,
  `color` varchar(128) DEFAULT NULL,
  `colorTop` varchar(128) DEFAULT NULL,
  `colorBottom` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=225 ;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`id`, `phoneme`, `color`, `colorTop`, `colorBottom`) VALUES
(218, 'J', NULL, '#2B4C3F', '#E8112D'),
(41, 'j', '#E8112D', NULL, NULL),
(42, 'i', '#E8112D', NULL, NULL),
(43, 'e', '#ED6E00', NULL, NULL),
(44, 'E', '#F43FA5', NULL, NULL),
(45, 'a', '#930FA5', NULL, NULL),
(46, 'O', '#5B77CC', NULL, NULL),
(47, 'o', '#0051BA', NULL, NULL),
(48, 'u', '#4CCED1', NULL, NULL),
(220, 'H i', NULL, '#F7D917', '#E8112D'),
(50, 'y', '#F7D917', NULL, NULL),
(222, 'H', NULL, '#F7D917', '#E8112D'),
(52, '2', '#00B760', NULL, NULL),
(53, '9', '#CEEA82', NULL, NULL),
(54, '@', '#BDEC65', NULL, NULL),
(55, 'e~', '#F9BF9E', NULL, NULL),
(56, '9~', '#F9BF9E', NULL, NULL),
(57, 'a~', '#E7C1E3', NULL, NULL),
(58, 'o~', '#C4D8E2', NULL, NULL),
(59, 'p', '#3A7728', NULL, NULL),
(60, 't', '#007770', NULL, NULL),
(61, 'k', '#3A4972', NULL, NULL),
(62, 'b', '#84003C', NULL, NULL),
(63, 'd', '#B06F00', NULL, NULL),
(64, 'g', '#602144', NULL, NULL),
(65, 'f', '#787A7B', NULL, NULL),
(66, 's', '#af8970', NULL, NULL),
(67, 'S', '#CE898C', NULL, NULL),
(68, 'v', '#AE9A00', NULL, NULL),
(69, 'z', '#FC9BB2', NULL, NULL),
(70, 'Z', '#894FBF', NULL, NULL),
(71, 'l', '#A3C1AD', NULL, NULL),
(72, 'R', '#D3BFB7', NULL, NULL),
(73, 'm', '#A53F0F', NULL, NULL),
(74, 'n', '#2B4C3F', NULL, NULL),
(75, 'k s', NULL, '#3A4972', '#F7D3B5'),
(76, 'g z', NULL, '#9B0070', '#FC9BB2'),
(77, 't S', NULL, '#007770', '#CE898C'),
(78, 'd Z', NULL, '#E29100', '#894FBF'),
(79, 'a~ n', NULL, '#EDC4DD', '#2B4C3F'),
(80, 'w a', NULL, '#4AD6CA', '#B634BB'),
(81, 'j E', NULL, '#F43FA5', '#E8112D'),
(82, 'j e', NULL, '#ED6E00', '#E8112D'),
(83, 'j 2', NULL, '#00B760', '#E8112D'),
(219, 'w e~', NULL, '#4CCED1', '#F9BF9E'),
(221, 'H i', NULL, '#F7D917', '#E8112D'),
(223, '-', '#FFFFFF', NULL, NULL),
(224, 'w', '#4AD6CA', NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
