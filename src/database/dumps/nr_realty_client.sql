-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: nr_realty
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `client_name` varchar(50) NOT NULL,
  PRIMARY KEY (`client_id`),
  UNIQUE KEY `client_name` (`client_name`),
  UNIQUE KEY `client_name_2` (`client_name`),
  UNIQUE KEY `client_name_3` (`client_name`),
  UNIQUE KEY `client_name_4` (`client_name`),
  UNIQUE KEY `client_name_5` (`client_name`),
  UNIQUE KEY `client_name_6` (`client_name`),
  UNIQUE KEY `client_name_7` (`client_name`),
  UNIQUE KEY `client_name_8` (`client_name`),
  UNIQUE KEY `client_name_9` (`client_name`),
  UNIQUE KEY `client_name_10` (`client_name`),
  UNIQUE KEY `client_name_11` (`client_name`),
  UNIQUE KEY `client_name_12` (`client_name`),
  UNIQUE KEY `client_name_13` (`client_name`),
  UNIQUE KEY `client_name_14` (`client_name`),
  UNIQUE KEY `client_name_15` (`client_name`),
  UNIQUE KEY `client_name_16` (`client_name`),
  UNIQUE KEY `client_name_17` (`client_name`),
  UNIQUE KEY `client_name_18` (`client_name`),
  UNIQUE KEY `client_name_19` (`client_name`),
  UNIQUE KEY `client_name_20` (`client_name`),
  UNIQUE KEY `client_name_21` (`client_name`),
  UNIQUE KEY `client_name_22` (`client_name`),
  UNIQUE KEY `client_name_23` (`client_name`),
  UNIQUE KEY `client_name_24` (`client_name`),
  UNIQUE KEY `client_name_25` (`client_name`),
  UNIQUE KEY `client_name_26` (`client_name`),
  UNIQUE KEY `client_name_27` (`client_name`),
  UNIQUE KEY `client_name_28` (`client_name`),
  UNIQUE KEY `client_name_29` (`client_name`),
  UNIQUE KEY `client_name_30` (`client_name`),
  UNIQUE KEY `client_name_31` (`client_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'2024-01-27 13:43:08','2024-02-01 05:05:52','Lennon Benedict Jansuy'),(2,'2024-02-01 03:08:15','2024-02-01 05:06:06','Liezel Cuya'),(3,'2024-02-01 03:08:31','2024-02-01 05:06:41','Nicholas Cage');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-09 18:55:43
