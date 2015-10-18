<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,$db_name);
$username = $_POST['Username'];
$password = $_POST['Password'];
$query = "Select Id, Username, Password from account where Username='$username' and IsPrgStatus=1";
$result = mysqli_query($conn,$query);
disconnectToDB($conn);
if ($result->num_rows > 0) {
	$data = mysqli_fetch_assoc($result);
	$hashed = $data['Password'];
	if (password_verify($password,$hashed)) {
		session_set_cookie_params(600,"/");
		session_start();
		session_regenerate_id();
		$_SESSION['SESS_MEMBER_ID'] = $data['Id'];
		$_SESSION['SESS_USER_NAME'] = $data['Username'];
		$_SESSION['SESS_PASSWORD'] = $data['Password'];
		session_write_close();
		echo "1|".$data['Id']."|".$data['Username'];
	} else {
		echo '2|PASSWORD_MISSMATCH';
	}
} else {
	echo "3|ACCOUNT_INVALID";
}
?>