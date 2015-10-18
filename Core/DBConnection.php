<?php
include "db_config.php";
function connectToDB() {
    include "db_config.php";
	$servername = $db_servername;
	$user = $db_user;
	$pass = $db_password;
	$conn = new mysqli($servername, $user, $pass);
	return $conn;
} 

function disconnectToDB($conn) {
	$conn->close();
}

function getInsertId(mysqli &$instance, $enforceQuery = false){
    if(!$enforceQuery)return $instance->insert_id;
    $result = $instance->query('SELECT LAST_INSERT_ID() FROM product;');
    if($instance->errno)return false;
    list($buffer) = $result->fetch_row();
    $result->free();
    unset($result);
    return $buffer;
}
?>
