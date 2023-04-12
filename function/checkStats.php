<?php
    require '../config/connection.php';
    require '../function/utility.php';

    $username=$_POST['username'];
    $idUser=getIdUser($username);

    $sql="SELECT * FROM accounts WHERE idUser=$idUser";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $firstName=$row['firstName'];
    $lastName=$row['lastName'];
    $bio=$row['bio'];
    $pfpURL=$row['imageURL'];
    
    $sql="SELECT COUNT(*) AS post FROM posts WHERE idAccount='$idUser'"; //Prendo il numero di post dell'account di cui voglio vedere il profilo
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $post=$row['post'];

    $sql="SELECT COUNT(*) AS follower FROM follow WHERE idAccountFollowed='$idUser'"; //Prendo il numero di follower dell'account di cui voglio vedere il profilo
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $follower=$row['follower'];

    $sql="SELECT COUNT(*) AS following FROM follow WHERE idAccount='$idUser'";    //Prendo il numero di seguiti dell'account di cui voglio vedere il profilo
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $following=$row['following'];

    $jsonString['firstName']=$firstName; //Nome
    $jsonString['lastName']=$lastName; //Cognome
    $jsonString['bio']=$bio; //Biografia
    $jsonString['imageURL']=$pfpURL; //Foto profilo
    $jsonString['post']=$post;    //Aggiungo il numero di post all'array
    $jsonString['follower']=$follower;  //Aggiungo il numero di follower all'array
    $jsonString['following']=$following;    //Aggiungo il numero di seguiti all'array 

    echo json_encode($jsonString);  //Ritorno il json contenente le infomazioni relative a: nPost, follower, seguiti

    $conn->close();
?>