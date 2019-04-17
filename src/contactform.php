<?php

if(isset($_POST['submit'])) {
    $name= $_POST['name'];
    $email= $_POST['email'];
    $subect= $_POST['subject'];
    $message= $_POST['message'];

    $mailto = "djudev777@live.com";
    $headers = "From: ".$email;
    $txt = "You got mail from ".$name.".\n\n".$message;

    mail($mailto, $subect, $txt, $headers);
    header("Location: index.php?mailsend")
}