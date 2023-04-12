<?php
    function sanitizeString($data){
        $data = trim($data);                   //rimuove gli spazi prima e dopo la stringa 
        $data = stripslashes($data);    // rimuove gli slashes 
        $data=(filter_var($data, FILTER_SANITIZE_STRING));
        return $data;
    }

    function login($email, $password) {
        
        global $conn;

        $email=filter_var($email, FILTER_SANITIZE_EMAIL);
        $password=sanitizeString($password);
        
        $sql="SELECT * FROM users WHERE email='$email'";
        $result=$conn->query($sql);
        if($result->num_rows == 0) {
            echo "Email insesistente";
        }else{
            $password=md5($password);
            $sql="SELECT * FROM users WHERE email = '$email' AND password = '$password'";
            $result=$conn->query($sql);
            if($result->num_rows>0){
                $sql="SELECT a.username FROM users u INNER JOIN accounts a ON u.id=a.idUser WHERE u.email='$email'";
                $result=$conn->query($sql);
                $row=$result->fetch_assoc();
                $username=$row['username'];
                session_start();
                $_SESSION['user']=$username;
                if(isset($_SESSION['user'])) {
                    header("Location:../public/home.php");
                }
            }else{
                echo "Spiacente la password inserita è errata";
            }
        }
        $conn->close();
    }

    function signIn($username, $email, $password) {

        global $conn;

        $email=filter_var($email, FILTER_SANITIZE_EMAIL);
        $password=sanitizeString($password);
        
        $sql="SELECT * FROM users WHERE username='$username'";
        $result=$conn->query($sql);
        if($result->num_rows>0) {
            echo "Username già utilizzato";
        } else {
            $sql="SELECT * FROM users WHERE email='$email'";
            $result=$conn->query($sql);
            if($result->num_rows>0) {
                echo "Email già utilizzata";
            } else {
                $userPassword=md5($password); //userPassword è l'HASH di password
                $sql="INSERT INTO users (email, password) VALUES ('$email', '$userPassword')";
                if($conn->query($sql)===TRUE){
                    $idUser=$conn->insert_id;
                    $sql="INSERT INTO accounts (username, idUser) VALUES ('$username', $idUser)";
                    $conn->query($sql);
                    echo "Registrazione effettuata";
                    login($email, $password);
                }else{
                    echo $conn->error;
                }
            }
        }
        $conn->close();
    }

    function searchAccount($text) {
        global $conn;
        
        $accounts=array();
        $sql="SELECT * FROM accounts WHERE username LIKE '$text%'";
        $result=$conn->query($sql);
        if($result->num_rows>0) {
            while ($row=$result->fetch_assoc()) {
                $accounts[]=$row;
            }
        }
        $conn->close();

        return json_encode($accounts);
    }

    function getIdUser($username) {
        global $conn;
        
        $sql="SELECT idUser FROM accounts WHERE username='$username'";
        $result=$conn->query($sql);
        $row=$result->fetch_assoc();

        return $row['idUser'];
    }

    function getUsername($idUser) {
        global $conn;
        
        $sql="SELECT username FROM accounts WHERE idUser='$idUser'";
        $result=$conn->query($sql);
        $row=$result->fetch_assoc();

        return $row['username'];
    }
?>