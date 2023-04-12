<?php
    require '../config/connection.php';

    $text=$_POST['txtSearch'];

    if (!empty($text)) {
        $sql="SELECT * FROM accounts WHERE username LIKE '$text%' LIMIT 4";
        $result=$conn->query($sql);
    
        if($result->num_rows>0) {
            $data=array();
            while ($row=$result->fetch_assoc()) {
                $data[]=$row;
            }
        }
        echo json_encode($data);
    }
    
    $conn->close();
?>