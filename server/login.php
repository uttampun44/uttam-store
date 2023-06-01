<?php

require('connection.php');


header('Access-Control-Allow-Origin *');
header('Access-Control-Allow-Method', 'POST, GET, OPTIONS');
header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
header('Content-Type', 'application/json');


//login

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $login = "SELECT *FROM createaccount WHERE emailPhone = '$email' ";

    $loginQuery = mysqli_query($connection, $login);
    $loginFetch = mysqli_fetch_array($loginQuery, MYSQLI_ASSOC);
    $loginCount = mysqli_num_rows($loginQuery);

    if($loginCount == 1){
          echo "login successfull";
          echo $email . ''. $password;
          echo json_encode(['message'=> 'Form Data']);
          http_response_code(200);
    }else{
       echo "Invalid user name and password";
       echo json_encode(['message' => 'error']);
       http_response_code(400);
    }
}