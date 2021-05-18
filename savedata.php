<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "agile_email_list";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$data = file_get_contents("php://input");
$mydata = json_decode($data, true);

echo $email = $mydata['email'];
echo $fullname = $mydata['name'];
echo $status = $mydata['status'];
echo $niche = $mydata['niche'];
echo $connect = $mydata['connect'];
echo $subscriber_id = rand(10,100);

if(!empty($email)) {
	$sql = "INSERT INTO subscribers_list(
    subscribers_id,
    subscriber_name,
    subscriber_email,
    subscriber_status,
    subscriber_niche,
    subscriber_connect
    ) VALUES (
      '$subscriber_id',
      '$fullname',
      '$email',
      '$status',
      '$niche',
      '$connect'
    )";
  if($conn->query($sql) === TRUE)  {
    echo "New record created successfully";

    
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}


?>