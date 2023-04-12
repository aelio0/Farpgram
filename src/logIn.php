<?php
    require '../config/connection.php';
    require '../function/utility.php';
    
    $email=$_POST['email'];
    $password=$_POST['password'];

    login($email, $password);
?>