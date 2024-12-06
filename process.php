<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Capture the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    
    // In a real-world application, you would save this data to a database here.
    
    // Prepare response
    $response = "<h2>Thank you for your submission!</h2>";
    $response .= "<p><strong>Name:</strong> " . $name . "</p>";
    $response .= "<p><strong>Email:</strong> " . $email . "</p>";
    $response .= "<p><strong>Phone:</strong> " . $phone . "</p>";
    
    // Return the response
    echo $response;
}
?>
