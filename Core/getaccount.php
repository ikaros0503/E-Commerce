<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,$db_name);
$id = $_GET['Id'];
$sql = "select Id, Username, FirstName, LastName, Phone, Address from account where IsPrgStatus != 4 and Id='$id'";
$result = mysqli_query($conn,$sql);
if ($row = mysqli_fetch_assoc($result)) {
	echo json_encode($row);
} else {
	echo "ERROR";
}
?>