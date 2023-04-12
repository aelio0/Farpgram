<?php
    require '../config/connection.php';
    require '../function/utility.php';

    $username=$_POST['username'];
    $idUser=getIdUser($username);

    $sql="SELECT * FROM posts p INNER JOIN imagevideos img ON p.id=img.idPost WHERE p.idAccount=$idUser ORDER BY p.actionTime DESC";
    $result=$conn->query($sql);

    $i=0;
    while($row=$result->fetch_assoc()) {
        $json[$i]['body']=$row['body'];
        $json[$i]['location']=$row['location'];
        $json[$i]['actionTime']=$row['actionTime'];
        $json[$i]['url']=$row['url'];
        $i++;
    }

    echo json_encode($json);

    $conn->close();
?>