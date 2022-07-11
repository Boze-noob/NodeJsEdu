-- MySQL dump 10.13  Distrib 5.7.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gym
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `discover_workout`
--

DROP TABLE IF EXISTS `discover_workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discover_workout` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) DEFAULT NULL,
  `Num_of_exercises` varchar(255) DEFAULT NULL,
  `Time` varchar(255) DEFAULT NULL,
  `Background_color` varchar(11) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discover_workout`
--

LOCK TABLES `discover_workout` WRITE;
/*!40000 ALTER TABLE `discover_workout` DISABLE KEYS */;
INSERT INTO `discover_workout` VALUES (1,'Title','25','30 min',NULL,'uploads\\IMG-20200709-WA0014.jpg'),(2,'Title','25','30 min',NULL,'uploads\\IMG-20200709-WA0014.jpg'),(3,'Title','25','30 min',NULL,'uploads\\IMG-20200709-WA0014.jpg'),(4,'Title','25','30 min','#000000','uploads\\IMG-20200709-WA0014.jpg'),(5,'Title','25','30 min','#000000','uploads\\krmIMG-20200709-WA0014.jpg'),(6,'Title','25','30 min','#000000','uploads\\600224IMG-20200709-WA0014.jpg'),(7,'Title','25','30 min','#000000','uploads\\302501IMG-20200709-WA0014.jpg'),(8,'Title','25','30 min','#000000','uploads\\305104_IMG-20200709-WA0014.jpg');
/*!40000 ALTER TABLE `discover_workout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `First_name` varchar(255) NOT NULL,
  `Last_name` varchar(255) NOT NULL,
  `Age` int(11) DEFAULT NULL,
  `Role_ID` int(11) DEFAULT NULL,
  `Gym_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Gym_ID` (`Gym_ID`),
  KEY `Role_ID` (`Role_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Boke','Skoko',23,1,1),(2,'Nika','Skoko',14,2,1),(3,'Test Employer 1','Test',45,1,2),(4,'Test Employer 2','Test',48,2,2);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercise` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Push_ups` int(11) DEFAULT NULL,
  `Squats` int(11) DEFAULT NULL,
  `Bench` int(11) DEFAULT NULL,
  `Pull_ups` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,25,57,120,300),(2,15,17,70,200);
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gym`
--

DROP TABLE IF EXISTS `gym`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gym` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Cordinates` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gym`
--

LOCK TABLES `gym` WRITE;
/*!40000 ALTER TABLE `gym` DISABLE KEYS */;
INSERT INTO `gym` VALUES (1,'Sun Gym','Los Angeles','33.998391948925736, -118.4758865856197'),(2,'Star sport','Široki Brijeg','43.3784592484107, 17.59965364202397');
/*!40000 ALTER TABLE `gym` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'worker');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscription` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Days` int(11) NOT NULL,
  `Gym_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Gym_ID` (`Gym_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,30,1),(2,30,1),(3,15,2);
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Weight` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Exercise_ID` int(11) DEFAULT NULL,
  `Subscription_ID` int(11) DEFAULT NULL,
  `Completed_workouts` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Exercise_ID` (`Exercise_ID`),
  KEY `Subscription_ID` (`Subscription_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'User1','aiwgnawigi',67,'Address1',NULL,NULL,NULL),(2,'User2','aiwgnawigi',67,'Siroki Brijeg',1,1,120),(3,'User3','aiwgnawigi',67,'Address1',NULL,2,NULL),(4,'User4','aiwgnawigi',67,'Address1',2,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 18:46:50
