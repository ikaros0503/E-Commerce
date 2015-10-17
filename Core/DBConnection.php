<?php
function connectToDB() {
	$servername = "localhost";
	$user = "root";
	$pass = "";
	$conn = new mysqli($servername, $user, $pass);
	return $conn;
} 

function disconnectToDB($conn) {
	$conn->close();
}

function getInsertId(mysqli &$instance, $enforceQuery = false){
    if(!$enforceQuery)return $instance->insert_id;
    $result = $instance->query('SELECT LAST_INSERT_ID() FROM PRODUCT;');
    if($instance->errno)return false;
    list($buffer) = $result->fetch_row();
    $result->free();
    unset($result);
    return $buffer;
}
?>
