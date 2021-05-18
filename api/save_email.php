<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

echo "Save Email";

echo json_encode($_POST['email']);
echo json_encode($_POST['name']);

// $data = json_decode(file_get_contents("php://input"));

// echo $data;

?>