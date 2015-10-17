<?php
include 'DBConnection.php';
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,'assignment_ado');
$id = 0;
$password = "Password";
$first_name = "FirstName";
$last_name = "LastName";
$phone = "Phone";
$address = "Address";
if (isset($_POST['Id'])) $id = $_POST['Id'];
if (isset($_POST['Password'])) $password = "'".password_hash($_POST['Password'],PASSWORD_DEFAULT)."'";
if (isset($_POST['FirstName'])) $first_name = "'".$_POST['FirstName']."'";
if (isset($_POST['LastName'])) $last_name = "'".$_POST['LastName']."'";
if (isset($_POST['Phone'])) $phone = "'".$_POST['Phone']."'";
if (isset($_POST['Address'])) $address = "'".$_POST['Address']."'";
$sql = "Update account set Password=$password, FirstName=$first_name,LastName=$last_name,Phone=$phone,Address=$address where Id=$id";
$result = mysqli_query($conn,$sql);
if ($result) {
	echo "SUCCESS";
} else {
	echo "ERROR";
}
?>