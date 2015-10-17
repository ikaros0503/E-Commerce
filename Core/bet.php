<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,'assignment_ado');
$product_id = $_POST['ProductId'];
$price = $_POST['CurrentPrice'];
$user = $_POST['CurrentUser'];
$sql = "Update product set currentprice='$price', CurrentUser = '$user', TotalBet=TotalBet+1 where ProductId = $product_id";
$result = mysqli_query($conn,$sql);
if ($result) {
	echo $product_id;
} else {
	echo "FAILED";
}
?>