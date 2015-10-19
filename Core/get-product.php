<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,$db_name);
$query = "select ProductId, Name, Info, History, CurrentPrice, CurrentUser, OwnerId, Duration, ProductImg, Username, IsPrgStatus, TotalBet, Type, CreatedDate, StartTime, ExpireTime from vproducts where IsPrgStatus != 4 Order by IsPrgStatus asc, CreatedDate desc limit 100";
if (isset($_GET['Id'])){
	$id = $_GET['Id'];
 	$query = "select ProductId, Name, Info, History, CurrentPrice, CurrentUser, OwnerId, Duration, ProductImg, Username, IsPrgStatus, TotalBet, Type, CreatedDate, StartTime, ExpireTime from vproducts where IsPrgStatus != 4 and OwnerId=$id Order by CreatedDate";
}
if (isset($_GET['Name'])) {
	$name = $_GET['Name'];
	$query = "select ProductId, Name, Info, History, CurrentPrice, CurrentUser, OwnerId, Duration, ProductImg, Username, IsPrgStatus, TotalBet, Type, CreatedDate, StartTime, ExpireTime from vproducts where IsPrgStatus != 4 and Name like '%$name%' Order by CreatedDate";
}
if (isset($_GET['CurrentUser'])) {
	$user = $_GET['CurrentUser'];
	$query = "select ProductId, Name, Info, History, CurrentPrice, CurrentUser, OwnerId, Duration, ProductImg, Username, IsPrgStatus, TotalBet, Type, CreatedDate, StartTime, ExpireTime from vproducts where IsPrgStatus != 4 and CurrentUser = '$user' Order by CreatedDate";
}
$results = mysqli_query($conn,$query) or die("Error in Selecting " . mysqli_error($connection));
$result[] = array();
while ($row = mysqli_fetch_assoc($results)) {
	$result[] = $row;
}
echo json_encode($result);
?>