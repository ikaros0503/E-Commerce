<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die(2);
}
mysqli_select_db($conn,$db_name);
$username = $_POST['Username'];
$password = password_hash($_POST['Password'],PASSWORD_DEFAULT);

$selectSql = "Select Id from account where Username='$username'";
$_result = $conn->query($selectSql);
if ($_result->num_rows <= 0) {
	$sql = "insert INTO account(Username,Password) VALUES('$username','$password')";
	$result = $conn->query($sql);
	disconnectToDB($conn);
	if ($result) {
		echo 1;
	} else {
		echo 4;
	}
} else {
	echo 3;
}

?>