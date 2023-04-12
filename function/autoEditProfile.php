<?php
    require '../config/connection.php';
    require 'utility.php';

    session_start();
    //$_SESSION['user']="simonefornoni_";
    $username=$_SESSION['user'];
    $myId=getIdUser($username);

    $sql="SELECT * FROM accounts a INNER JOIN sex s ON a.idSex=s.id WHERE a.idUser=$myId";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();

    $firstName=$row['firstName'];
    $lastName=$row['lastName'];
    $bio=$row['bio'];
    $sex=$row['descriz'];
    $birthDate=$row['birthDate'];
    $pfp=$row['imageURL'];

    $json['firstName']=$firstName;
    $json['lastName']=$lastName;
    $json['bio']=$bio;
    $json['sex']=$sex;
    $json['birthDate']=$birthDate;
    $json['pfp']=$pfp;

    echo json_encode($json);
?>