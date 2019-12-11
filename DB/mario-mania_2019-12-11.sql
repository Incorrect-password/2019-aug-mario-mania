# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.27)
# Database: mario-mania
# Generation Time: 2019-12-11 15:25:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table result
# ------------------------------------------------------------

DROP TABLE IF EXISTS `result`;

CREATE TABLE `result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trackid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `position` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;

INSERT INTO `result` (`id`, `trackid`, `userid`, `position`)
VALUES
	(0,1,1,4),
	(1,1,1,1),
	(2,1,2,5),
	(3,1,3,6),
	(4,1,4,12),
	(5,2,1,4),
	(6,2,2,1),
	(7,2,3,5),
	(8,2,4,2),
	(9,6,1,2),
	(10,6,2,5),
	(11,6,3,12),
	(12,6,4,1),
	(13,4,1,5),
	(14,4,3,6),
	(15,4,4,1),
	(16,4,1,2),
	(17,4,2,3),
	(18,4,3,4),
	(19,4,4,12),
	(20,3,1,1),
	(21,3,2,2),
	(22,3,3,3),
	(23,3,4,4),
	(24,1,1,2),
	(25,1,1,2),
	(26,1,1,2),
	(28,1,2,12),
	(29,1,1,4),
	(30,1,1,4),
	(31,1,1,4);

/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
