<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,'assignment_ado');
$username = $_POST['Username'];
$password = password_hash($_POST['Password'],PASSWORD_DEFAULT);

$selectSql = "Select Id from Account where Username='$username'";
$_result = $conn->query($selectSql);
if ($_result->num_rows <= 0) {
	$sql = "insert INTO ACCOUNT(Username,Password) VALUES('$username','$password')";
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