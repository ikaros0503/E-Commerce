-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2015 at 12:37 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `assignment_ado`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE IF NOT EXISTS `account` (
`Id` int(11) NOT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `IsPrgStatus` int(11) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
`ProductId` int(11) NOT NULL,
  `Code` varchar(6) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Info` varchar(255) DEFAULT NULL,
  `OwnerId` int(11) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Type` int(11) NOT NULL DEFAULT '1',
  `History` varchar(255) DEFAULT NULL,
  `CurrentPrice` varchar(255) NOT NULL,
  `CurrentUser` varchar(255) DEFAULT NULL,
  `IsPrgStatus` int(11) DEFAULT '1',
  `Duration` int(11) NOT NULL,
  `ProductImg` varchar(255) DEFAULT NULL,
  `TotalBet` int(11) DEFAULT '0',
  `StartTime` datetime DEFAULT NULL,
  `ExpireTime` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `vproducts`
--
CREATE TABLE IF NOT EXISTS `vproducts` (
`ProductId` int(11)
,`Code` varchar(6)
,`Name` varchar(255)
,`Info` varchar(255)
,`OwnerId` int(11)
,`CreatedDate` datetime
,`Type` int(11)
,`History` varchar(255)
,`CurrentPrice` varchar(255)
,`CurrentUser` varchar(255)
,`Duration` int(11)
,`ProductImg` varchar(255)
,`Id` int(11)
,`Username` varchar(255)
,`FirstName` varchar(255)
,`LastName` varchar(255)
,`Phone` varchar(255)
,`Address` varchar(255)
,`IsPrgStatus` int(11)
,`StartTime` datetime
,`ExpireTime` datetime
,`TotalBet` int(11)
);
-- --------------------------------------------------------

--
-- Structure for view `vproducts`
--
DROP TABLE IF EXISTS `vproducts`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vproducts` AS select `product`.`ProductId` AS `ProductId`,`product`.`Code` AS `Code`,`product`.`Name` AS `Name`,`product`.`Info` AS `Info`,`product`.`OwnerId` AS `OwnerId`,`product`.`CreatedDate` AS `CreatedDate`,`product`.`Type` AS `Type`,`product`.`History` AS `History`,`product`.`CurrentPrice` AS `CurrentPrice`,`product`.`CurrentUser` AS `CurrentUser`,`product`.`Duration` AS `Duration`,`product`.`ProductImg` AS `ProductImg`,`account`.`Id` AS `Id`,`account`.`Username` AS `Username`,`account`.`FirstName` AS `FirstName`,`account`.`LastName` AS `LastName`,`account`.`Phone` AS `Phone`,`account`.`Address` AS `Address`,`product`.`IsPrgStatus` AS `IsPrgStatus`,`product`.`StartTime` AS `StartTime`,`product`.`ExpireTime` AS `ExpireTime`,`product`.`TotalBet` AS `TotalBet` from (`product` left join `account` on((`product`.`OwnerId` = `account`.`Id`)));

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
 ADD PRIMARY KEY (`Id`), ADD KEY `id_index` (`Id`), ADD KEY `Id` (`Id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
 ADD PRIMARY KEY (`ProductId`), ADD KEY `OwnerId` (`OwnerId`), ADD KEY `product_index` (`ProductId`), ADD FULLTEXT KEY `Name` (`Name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
MODIFY `ProductId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`OwnerId`) REFERENCES `account` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
