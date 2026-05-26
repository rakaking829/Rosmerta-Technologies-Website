<?php

 ini_set('display_errors', 1);
 ini_set('display_startup_errors', 1);
 error_reporting(E_ALL);

session_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

 require 'PHPMailer/src/PHPMailer.php';
 require 'PHPMailer/src/SMTP.php';
 require 'PHPMailer/src/Exception.php';

// require 'vendor/autoload.php'; // If using Composer
// Or use manual require if not using Composer

// Get form data
$misconduct    = $_POST['Misconduct'] ?? '';
$incident   = $_POST['Incident'] ?? '';
$description = $_POST['Description'] ?? '';
$captcha_input = $_POST['captcha'] ?? '';

// === CAPTCHA Validation ===
if (!isset($_SESSION['captcha']) || strtolower($captcha_input) !== strtolower($_SESSION['captcha'])) {
    die("Captcha incorrect. Please go back and try again.");
}

$mail = new PHPMailer(true);

try {
    // === SMTP Settings ===
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';      // Replace with your SMTP host
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreply.web@rosmertatech.com';      // SMTP username
    $mail->Password   = 'L$826992633603ak';         // SMTP password
    $mail->SMTPSecure = 'tls';                   // Encryption (tls or ssl)
    $mail->Port       = 587;                     // TCP port (587 for TLS, 465 for SSL)

    // === Sender & Recipient ===
    $mail->setFrom('noreply.web@rosmertatech.com', '');  
    $mail->addAddress('ethics@rosmertatech.com', '');
    // $mail->addCC('', '');    // Optional
    // $mail->addBCC('support@smartech.co.in', '');   // Optional
    
    // === Attachment Validation ===
    if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === 0) {
        $fileTmpPath = $_FILES['attachment']['tmp_name'];
        $fileName    = $_FILES['attachment']['name'];
        $fileType    = mime_content_type($fileTmpPath);
        $fileSize    = $_FILES['attachment']['size'];

        $allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg',
            'image/png'
        ];

        if ($fileSize > 5 * 1024 * 1024) { // 5MB limit
            throw new Exception("File too large. Maximum size is 5MB.");
        }

        if (!in_array($fileType, $allowedTypes)) {
            throw new Exception("Error - Incorrect File Type. Only PDF, Word, JPG, and PNG are allowed.");
        }

        $mail->addAttachment($fileTmpPath, $fileName);
    }

    // === Email Content ===
    $mail->isHTML(true);
    $mail->Subject = 'RTL - Whistleblower And Anonymous Reporting';
    $mail->Body    = "
        
        <table border='0' cellpadding='5' cellspacing='0'>
            <tr><td><strong>Type of Misconduct:</strong></td><td>{$misconduct}</td></tr>
            <tr><td><strong>Date of the Incident:</strong></td><td>{$incident}</td></tr>
            <tr><td><strong>Description of the Incident:</strong></td><td>{$description}</td></tr>
        </table>";
    $mail->AltBody = "Type of Misconduct: $misconduct\nDate of the Incident: $incident\nDescription of the Incident: $description";

    // === Send Email ===
    $mail->send();

    // === Redirect to Thank You Page ===
    header("Location: thankyou.html");
    exit();

} catch (Exception $e) {
    echo "Message could not be sent.<br>";
    echo "Mailer Error: {$mail->ErrorInfo}<br>";
    echo "Exception: " . $e->getMessage();
}
