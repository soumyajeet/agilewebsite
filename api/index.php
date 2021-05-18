<?php

$data = file_get_contents("php://input");
$mydata = json_decode($data, true);

echo $email = $mydata['email'];

if(!empty($email)) {
	echo $email;
}

// $errorMSG = "";
// echo $_POST["email"];

// /* EMAIL */
// if (empty(json_encode($_POST["email"]))) {
//     $errorMSG .= "<li>Email is required</li>";
// // } else if(!filter_var(json_encode($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
// //     $errorMSG .= "<li>Invalid email format</li>";
// } else {
//     $email = json_encode($_POST["email"]);
// 	echo $email;
// }


// if(empty($errorMSG)){
// 	$msg = "Email: ".$email;
// 	echo json_encode(['code'=>200, 'msg'=>$msg]);
// 	exit;
// }


// echo json_encode(['code'=>404, 'msg'=>$errorMSG]);


?>