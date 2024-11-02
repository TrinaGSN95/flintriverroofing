<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'Brandon@flintriverroofing.com'; // Change to your email
    $subject = 'Quote Request from ' . $name;
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Quote request sent successfully!";
    } else {
        echo "Failed to send quote request.";
    }
}
?>
