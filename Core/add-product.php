<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
	die(2);
}
mysqli_select_db($conn,$db_name);

$product_name = $_POST['ProductName'];
$product_detail = $_POST['ProductDetail'];
$start_price = $_POST['StartPrice'];
$duration = $_POST['Duration'];
$type = $_POST['TypeOfAuction'];
$owner_id = $_POST['OwnerId'];
$query_ ="Select ProductId from product where IsPrgStatus = 1";
$status = 1;
$result_ = mysqli_query($conn,$query_);
if (isset($result_)) {
	if ($row = mysqli_fetch_assoc($result_)) {
		if (isset($row))
			$status = 2;
	}
}
$query_1 = "select ProductId,Duration,StartTime,ExpireTime,IsPrgStatus from product where productid=(select max(productid) from product)";
$result_1 = mysqli_query($conn,$query_1);
$row = mysqli_fetch_assoc($result_1);
$start_time = "";
$expire_time = "";
date_default_timezone_set('Asia/Saigon');
if (isset($row) && ($row['IsPrgStatus'] != 1)) {
	$start_time = $row['ExpireTime'];
	$expire_time = " DATE_ADD('".$start_time."', INTERVAL ".$row['Duration']." HOUR)";
} else {
	$start_time = date('Y-m-d H:i:s');
	$expire_time = " DATE_ADD('".$start_time."', INTERVAL ".$duration." HOUR)";
}
$query = "insert into product(Name,Info,OwnerId,Type,CurrentPrice,Duration,StartTime,ExpireTime,IsPrgStatus) VALUES('$product_name','$product_detail','$owner_id','$type','$start_price','$duration','$start_time',$expire_time,$status)";
$result = mysqli_query($conn,$query);
$id = mysqli_insert_id($conn);
if ($result) {
		echo $id;
} else {
	echo "ERROR";
}
?>