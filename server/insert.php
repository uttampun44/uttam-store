<?php
require_once('./connection.php');

//signup
 if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $pass = password_hash($password, PASSWORD_BCRYPT);


     $login = "SELECT *FROM createaccount WHERE emailPhone = '$email' ";
     $loginQuery = mysqli_query($connection, $login);

    if(mysqli_num_rows($loginQuery) > 0){
        $row = mysqli_fetch_all($loginQuery);
        if($email == isset($row['email'])){
            echo "username aleady exists";
        }
     }else{
      $insert = "INSERT INTO createaccount(name, emailPhone, password)VALUES('$name', '$email', '$pass')";
      $query = mysqli_query($connection, $insert);

       if($query){
        echo json_encode(['message' => 'Form Data sucessfull']);
        http_response_code(200);

       }else{
        echo json_encode(['message' => 'Form Data unsucessfull']);
            http_response_code(404);
       }
     }
 }

