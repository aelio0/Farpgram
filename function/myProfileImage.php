<?php
    require '../config/connection.php';
    require '../function/utility.php';

    session_start();

    $username=$_SESSION['user'];
    $myIdUser=getIdUser($username);

    $sql="SELECT imageURL FROM accounts WHERE idUser='$myIdUser'";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();

    $pfpURL=$row['imageURL'];
    $jsonString['url']=$pfpURL;

    echo json_encode($jsonString);

?>