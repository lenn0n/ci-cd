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
-- Table structure for table `agent`
--

DROP TABLE IF EXISTS `agent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agent` (
  `agent_id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `agent_name` varchar(50) NOT NULL,
  PRIMARY KEY (`agent_id`),
  UNIQUE KEY `agent_name` (`agent_name`),
  UNIQUE KEY `agent_name_2` (`agent_name`),
  UNIQUE KEY `agent_name_3` (`agent_name`),
  UNIQUE KEY `agent_name_4` (`agent_name`),
  UNIQUE KEY `agent_name_5` (`agent_name`),
  UNIQUE KEY `agent_name_6` (`agent_name`),
  UNIQUE KEY `agent_name_7` (`agent_name`),
  UNIQUE KEY `agent_name_8` (`agent_name`),
  UNIQUE KEY `agent_name_9` (`agent_name`),
  UNIQUE KEY `agent_name_10` (`agent_name`),
  UNIQUE KEY `agent_name_11` (`agent_name`),
  UNIQUE KEY `agent_name_12` (`agent_name`),
  UNIQUE KEY `agent_name_13` (`agent_name`),
  UNIQUE KEY `agent_name_14` (`agent_name`),
  UNIQUE KEY `agent_name_15` (`agent_name`),
  UNIQUE KEY `agent_name_16` (`agent_name`),
  UNIQUE KEY `agent_name_17` (`agent_name`),
  UNIQUE KEY `agent_name_18` (`agent_name`),
  UNIQUE KEY `agent_name_19` (`agent_name`),
  UNIQUE KEY `agent_name_20` (`agent_name`),
  UNIQUE KEY `agent_name_21` (`agent_name`),
  UNIQUE KEY `agent_name_22` (`agent_name`),
  UNIQUE KEY `agent_name_23` (`agent_name`),
  UNIQUE KEY `agent_name_24` (`agent_name`),
  UNIQUE KEY `agent_name_25` (`agent_name`),
  UNIQUE KEY `agent_name_26` (`agent_name`),
  UNIQUE KEY `agent_name_27` (`agent_name`),
  UNIQUE KEY `agent_name_28` (`agent_name`),
  UNIQUE KEY `agent_name_29` (`agent_name`),
  UNIQUE KEY `agent_name_30` (`agent_name`),
  UNIQUE KEY `agent_name_31` (`agent_name`),
  UNIQUE KEY `agent_name_32` (`agent_name`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent`
--

LOCK TABLES `agent` WRITE;
/*!40000 ALTER TABLE `agent` DISABLE KEYS */;
INSERT INTO `agent` VALUES (1,'2024-01-28 16:49:58','2024-02-01 05:04:36','Vince Bryan Jansuy'),(8,'2024-02-03 08:35:22','2024-02-03 08:35:22','Kian Aliyah'),(36,'2024-02-03 12:09:37','2024-02-03 12:09:37','JECHEL SANCHEZ'),(38,'2024-02-03 12:10:53','2024-02-03 12:10:53','AUDREY GANA'),(42,'2024-02-03 12:12:25','2024-02-03 12:12:25','KIARY DIGMA');
/*!40000 ALTER TABLE `agent` ENABLE KEYS */;
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
