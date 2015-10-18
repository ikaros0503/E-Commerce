<?php
include "DBConnection.php";
$conn = connectToDB();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_select_db($conn,$db_name);
$id = $_POST['Id'];
$sql = "update product set productimg='";
$productimg = "";
for ($i = 1; $i < 4; $i++) {
	$destination_path = '../img/product/'.$id.'/';
	$file_name = 'file'.$i;
	if (isset($_FILES[$file_name]["name"])) {
		$ext = pathinfo($_FILES[$file_name]["name"], PATHINFO_EXTENSION);		
		$target_path = $destination_path . $i.'.'.$ext;
		if (!file_exists($destination_path)) {
    		mkdir($destination_path, 0777, true);
		}
		@move_uploaded_file($_FILES[$file_name]['tmp_name'], $target_path);
		if ($ext)
			$productimg = $productimg.$i.".".$ext."|";
		else
			$productimg = $productimg.'|';
	}
}

$sql = $sql.$productimg."' where ProductId=".$id;
$result = mysqli_query($conn,$sql);
if ($result) {
	echo 1;
} else {
	echo 2;
}
?>