<?php
    require '../config/connection.php';
    require '../function/utility.php';

    session_start();
    $username=$_SESSION['user'];
    $myId=getIdUser($username);

    $firstName=$_POST['firstName'];
    $lastName=$_POST['lastName'];
    $bio=$_POST['bio'];
    $sex=$_POST['gender'];
    $birthDate=$_POST['birth-date'];
    
    $target_dir = "../uploads/profileImages/";
    $target_file = $target_dir . basename($_FILES["pfp-image"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["pfp-image"]["tmp_name"]);
        if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
        } else {
        echo "File is not an image.";
        $uploadOk = 0;
        }
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["pfp-image"]["size"] > 10000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["pfp-image"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars( basename( $_FILES["pfp-image"]["name"])). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    $sql="SELECT id FROM sex WHERE descriz='$sex'";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    $idSex=$row['id'];

    $sql="UPDATE accounts SET firstName='$firstName', lastName='$lastName', 
        birthDate='$birthDate', bio='$bio', imageURL='$target_file', idSex=$idSex WHERE idUser=$myId";
    $conn->query($sql);

    header("Location:../public/myprofile.php");

?>