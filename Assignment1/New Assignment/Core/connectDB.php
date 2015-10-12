<?php
$username = $_POST['Username'];
$password = $_POST['Password'];
$email = $_POST['Email'];
$sex = $_POST['Sex'];
echo $username,$password,$email,$sex;
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully";
?>
