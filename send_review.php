<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $reviewer_name = htmlspecialchars($_POST['reviewer_name']);
    $review = htmlspecialchars($_POST['review']);
    
    $to = 'Brandon@flintriverroofing.com'; // Change to your email
    $subject = 'Review from ' . $reviewer_name;
    $body = "Reviewer: $reviewer_name\nReview: $review";
    $headers = "From: $reviewer_name <your-email@example.com>"; // Update with a valid email

    if (mail($to, $subject, $body, $headers)) {
        echo "Review sent successfully!";
    } else {
        echo "Failed to send review.";
    }
}
?>
