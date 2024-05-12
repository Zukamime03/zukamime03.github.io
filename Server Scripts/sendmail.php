<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $fname = sanitize_input($_POST["firstname"]);
    $lname = sanitize_input($_POST["lastname"]);
    $email = sanitize_input($_POST["email"]);
    $subject = sanitize_input($_POST["subject"]);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(array("status" => "error", "message" => "Invalid email format."));
        exit;
    }

    // Set up email parameters
    $to = "jackzukamime03@gmail.com"; // Change this email later
    $subject = "Contact Form Submission";
    $message = "First Name: $fname\nLast Name: $lname\nEmail: $email\nSubject: $subject";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo json_encode(array("status" => "success", "message" => "Email sent successfully."));
    } else {
        // Email sending failed
        echo json_encode(array("status" => "error", "message" => "Failed to send email."));
    }
} else {
    // Request method is not POST
    echo json_encode(array("status" => "error", "message" => "Invalid request method."));
}

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}