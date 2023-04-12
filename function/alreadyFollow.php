<?php
    require '../config/connection.php';

    session_start();

    $myAccount=$_SESSION['user'];
    $toFollow=$_POST['toFollow'];

    $sql="SELECT idUser FROM accounts WHERE username='$myAccount'";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $myIdUser=$row['idUser'];

    $sql="SELECT idUser FROM accounts WHERE username='$toFollow'";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $idUserToFollow=$row['idUser'];

    $sql="SELECT * FROM follow WHERE idAccount='$myIdUser' AND idAccountFollowed='$idUserToFollow'";
    $result=$conn->query($sql);
    
    if ($result->num_rows>0) {
        echo "Account already followed";
    } else {
        echo "Account not followed";
    }

?>