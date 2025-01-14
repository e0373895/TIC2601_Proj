-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: musicdb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albumtransaction`
--

DROP TABLE IF EXISTS `albumtransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albumtransaction` (
  `Album_TransactionID` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Of_Purchased` datetime NOT NULL,
  `AlbumID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Album_Title` varchar(255) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`Album_TransactionID`),
  UNIQUE KEY `Album_TransactionID_UNIQUE` (`Album_TransactionID`),
  KEY `AlbumID_idx` (`AlbumID`),
  KEY `UserID_idx` (`UserID`),
  KEY `Price_idx` (`Price`),
  CONSTRAINT `AlbumID` FOREIGN KEY (`AlbumID`) REFERENCES `album` (`AlbumID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Price` FOREIGN KEY (`Price`) REFERENCES `album` (`Price`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserID2` FOREIGN KEY (`UserID`) REFERENCES `userdata` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albumtransaction`
--

LOCK TABLES `albumtransaction` WRITE;
/*!40000 ALTER TABLE `albumtransaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `albumtransaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-03 21:15:35
