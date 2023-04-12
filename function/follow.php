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

    if ($result->num_rows==0) {  //Se non si seguono esegui la query di inserimento
        $sql="INSERT INTO follow (idAccount, idAccountFollowed) VALUES ('$myIdUser', '$idUserToFollow')";
        $result=$conn->query($sql);
    } else {    //Se si seguono già esegui la query di eliminazione
        $sql="DELETE FROM follow WHERE idAccount='$myIdUser' AND idAccountFollowed='$idUserToFollow'";
        $result=$conn->query($sql);
    }
    
?>