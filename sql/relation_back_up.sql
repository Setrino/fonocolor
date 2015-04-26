-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 17, 2014 at 01:32 AM
-- Server version: 5.5.35
-- PHP Version: 5.3.10-1ubuntu3.9

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
  `phoneme` varchar(128) DEFAULT NULL,
  `color` varchar(128) DEFAULT NULL,
  `colorTop` varchar(128) DEFAULT NULL,
  `colorBottom` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=281 ;

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
(52, '2', '#00B760', NULL, NULL),
(53, '9', '#CEEA82', NULL, NULL),
(54, '@', '#CEEA82', NULL, NULL),
(55, 'e~', '#F9BF9E', NULL, NULL),
(56, '9~', '#F9BF9E', NULL, NULL),
(57, 'a~', '#E7C1E3', NULL, NULL),
(58, 'o~', '#C4D8E2', NULL, NULL),
(59, 'p', '#3A7728', NULL, NULL),
(60, 't', NULL, '#007770', '#007770'),
(61, 'k', '#3A4972', NULL, NULL),
(62, 'b', '#84003C', NULL, NULL),
(63, 'd', '#B06F00', NULL, NULL),
(64, 'g', '#602144', NULL, NULL),
(65, 'f', '#96938E', NULL, NULL),
(66, 's', '#AF8970', NULL, NULL),
(67, 'S', '#CE898C', NULL, NULL),
(68, 'v', '#AA930A', NULL, NULL),
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
(82, 'j e', NULL, '#E8112D', '#ED6E00'),
(83, 'j 2', NULL, '#00B760', '#E8112D'),
(219, 'w e~', NULL, '#4CCED1', '#F9BF9E'),
(236, 'H e', NULL, '#F7D917', '#ED6E00'),
(223, '-', '#FFFFFF', NULL, NULL),
(224, 'w', '#4AD6CA', NULL, NULL),
(225, 'E s', NULL, '#F43FA5', '#AF8970'),
(227, 'E n', NULL, '#F43FA5', '#2B4C3F'),
(228, 'E l', NULL, '#F43FA5', '#A3C1AD'),
(229, 'N', NULL, '#2B4C3F', '#602144'),
(230, 'E f', NULL, '#F43FA5', '#787A7B'),
(231, 'a S', NULL, '#930FA5', '#CE898C'),
(232, 'E R', NULL, '#930FA5', '#D3BFB7'),
(233, 'd v', NULL, '#B06F00', '#AE9A00'),
(234, 'k s', NULL, '#3A4972', '#AF8970'),
(235, 'z d', NULL, '#FC9BB2', '#B06F00'),
(237, 'H E', NULL, '#F7D917', '#F43FA5'),
(238, 'H a', NULL, '#F7D917', '#930FA5'),
(239, 'H O', NULL, '#F7D917', '#5B77CC'),
(240, 'H 2', NULL, '#F7D917', '#00B760'),
(241, 'H 9', NULL, '#F7D917', '#CEEA82'),
(242, 'H e~', NULL, '#F7D917', '#F9BF9E'),
(243, 'H a~', NULL, '#F7D917', '#E7C1E3'),
(244, 'H R', NULL, '#F7D917', '#D3BFB7'),
(245, 'u j', NULL, '#4CCED1', '#E8112D'),
(246, 'u w', NULL, '#4CCED1', '#4AD6CA'),
(247, 'O j', NULL, '#5B77CC', '#E8112D'),
(248, 'O w', NULL, '#5B77CC', '#4AD6CA'),
(249, 'w i', NULL, '#4AD6CA', '#E8112D'),
(250, 'w E', NULL, '#4AD6CA', '#F43FA5'),
(251, 'w e', NULL, '#4AD6CA', '#ED6E00'),
(252, 'w O', NULL, '#4AD6CA', '#5B77CC'),
(253, 'w o', NULL, '#4AD6CA', '#0051BA'),
(254, 'w u', NULL, '#4AD6CA', '#4CCED1'),
(255, 'w 9', NULL, '#4AD6CA', '#CEEA82'),
(256, 'w @', NULL, '#4AD6CA', '#BDEC65'),
(257, 'w a', NULL, '#4AD6CA', '#930FA5'),
(258, 'w a~', NULL, '#4AD6CA', '#E7C1E3'),
(259, 'a w', NULL, '#930FA5', '#4AD6CA'),
(260, 'w o~', NULL, '#4AD6CA', '#C4D8E2'),
(261, 'j i', NULL, '#2B4C3F', '#E8112D'),
(262, 'a j', NULL, '#930FA5', '#E8112D'),
(263, 'j a', NULL, '#E8112D', '#930FA5'),
(264, 'j O', NULL, '#E8112D', '#5B77CC'),
(265, 'j o', NULL, '#E8112D', '#0051BA'),
(266, 'j u', NULL, '#E8112D', '#4CCED1'),
(267, 'j y', NULL, '#E8112D', '#F7D917'),
(268, 'j 2', NULL, '#E8112D', '#00B760'),
(269, 'j 9', NULL, '#E8112D', '#CEEA82'),
(270, 'j @', NULL, '#E8112D', '#BDEC65'),
(271, 'j e~', NULL, '#E8112D', '#F9BF9E'),
(272, 'j a~', NULL, '#E8112D', '#E7C1E3'),
(273, 'j o~', NULL, '#E8112D', '#C4D8E2'),
(278, 'y j', NULL, '#F7D917', '#E8112D'),
(275, 'i j', NULL, '#E8112D', '#2B4C3F'),
(276, 'E j', NULL, '#F43FA5', '#E8112D'),
(277, 'e j', NULL, '#ED6E00', '#E8112D'),
(279, '2 j', NULL, '#00B760', '#E8112D'),
(280, '9 j', NULL, '#CEEA82', '#E8112D');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
