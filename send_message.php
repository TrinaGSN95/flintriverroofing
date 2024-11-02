<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sender_name = htmlspecialchars($_POST['sender_name']);
    $sender_email = htmlspecialchars($_POST['sender_email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'Brandon@flintriverroofing.com'; // Change to your email
    $subject = 'Message from ' . $sender_name;
    $body = "Name: $sender_name\nEmail: $sender_email\nMessage: $message";
    $headers = "From: $sender_email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
