<?php
define("DB_HOST", 'localhost');
define("DB_USERNAME", 'root');
define("DB_PASSWORD", '');
define("DB_DATABSE", 'uttamstore');

$connection = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABSE);

 if($connection){
     ?>
       <script>
            alert("connection successfull")
       </script>
     <?php
 }

