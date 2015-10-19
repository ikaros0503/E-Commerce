<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die(2);
}
mysqli_select_db($conn,$db_name);
$product_id = $_POST['ProductId'];
$price = $_POST['CurrentPrice'];
$user = $_POST['CurrentUser'];
$history = "History";
if (isset($_POST['History'])) $history = "'".$_POST['History']."'";
$sql = "Update product set currentprice='$price', CurrentUser = '$user', TotalBet=TotalBet+1,History=$history where ProductId = $product_id";
$result = mysqli_query($conn,$sql);
if ($result) {
	echo 1;
} else {
	echo 2;
}
?>