<?php
include 'DBConnection.php';
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,$db_name);
date_default_timezone_set('Asia/Saigon');
if (!isset($_POST)) {
	$time = date('Y-m-d H:i:s');
	$sql = "Update product set IsPrgStatus = 1 where ProductId = (SELECT MIN(ProductId) from product where IsPrgStatus=2)";
	$result_ = mysqli_query($conn,$sql);
	$sql = "Update product set IsPrgStatus=3 where ExpireTime <= '$time'";
	$result = mysqli_query($conn,$sql);
	if ($result) {
		echo 1;
	} else {
		echo 2;
	}
	die;
}
$id = $_POST['Id'];
$duration = "Duration";
$type = "Type";
$name = "Name";
$info = "Info";
$status = "IsPrgStatus";
if (isset($_POST['Duration'])) $duration = "'".$_POST['Duration']."'";
if (isset($_POST['Type'])) $type = "'".$_POST['Type']."'";
if (isset($_POST['Name'])) $name = "'".$_POST['Name']."'";
if (isset($_POST['Info'])) $info = "'".$_POST['Info']."'";
if (isset($_POST['IsPrgStatus'])) $status = $_POST['IsPrgStatus'];
$sql = "Update product set Duration=$duration, Type=$type,Name=$name,Info=$info, IsPrgStatus=$status, ExpireTime = DATE_ADD(StartTime, INTERVAL $duration HOUR) where ProductId=$id";
$result = mysqli_query($conn,$sql);
if ($result) {
	if ($status != 3)
		echo 1;
	else {
		$sql_1 = "Update product set IsPrgStatus = 1 where ProductId=(select min(ProductId) from product where IsPrgStatus =2)";
		$result_1 = mysqli_query($conn,$sql_1);
		if ($result_1) {
			echo 1;
		} else {
			echo 2;
		}
	}
} else {
	echo 2;
}
?>