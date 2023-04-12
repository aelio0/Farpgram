<?php
    require '../config/connection.php';
    require '../function/utility.php';

    $url=$_POST['url'];

    $sql="SELECT * FROM posts p INNER JOIN imagevideos img ON p.id=img.idPost WHERE img.url='$url'";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();

    $myIdUser=$row['idAccount'];
    $username=getUsername($row['idAccount']);

    $sql="SELECT imageURL FROM accounts WHERE idUser='$myIdUser'";
    $resultPfpImage=$conn->query($sql);
    $rowPfpImage=$resultPfpImage->fetch_assoc();

    $pfpURL=$rowPfpImage['imageURL'];

    $json['pfpImage']=$pfpURL;
    $json['body']=$row['body'];
    $json['location']=$row['location'];
    $json['actionTime']=$row['actionTime'];
    $json['username']=$username;

    echo json_encode($json);

    $conn->close();
?>