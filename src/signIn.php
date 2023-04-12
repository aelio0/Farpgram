<?php
    require '../config/connection.php';
    require '../function/utility.php';
    
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    signIn($username, $email, $password);
?>