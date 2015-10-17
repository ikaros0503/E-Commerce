<?php
include 'DBConnection.php';
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,'assignment_ado');
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
$sql = "Update Product set Duration=$duration, Type=$type,Name=$name,Info=$info, IsPrgStatus=$status where ProductId=$id";
$result = mysqli_query($conn,$sql);
if ($result) {
	if ($status != 3)
		echo "SUCCESS";
	else {
		$sql_1 = "Update Product set IsPrgStatus = 1 where ProductId=(select min(ProductId) from Product where IsPrgStatus =2)";
		$result_1 = mysqli_query($conn,$sql_1);
		if ($result_1) {
			echo "SUCCESS";
		} else {
			echo "ERROR";
		}
	}
} else {
	echo $sql;
}
?>