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

// === Get Form Data ===
$misconduct    = $_POST['Misconduct'] ?? '';
$incident      = $_POST['Incident'] ?? '';
$description   = $_POST['Description'] ?? '';
$captcha_input = $_POST['captcha'] ?? '';

// === CAPTCHA Check ===
if (!isset($_SESSION['captcha']) || strtolower($captcha_input) !== strtolower($_SESSION['captcha'])) {
    $_SESSION['form_error'] = "Captcha incorrect. Please try again.";
    // header("Location: form.php");
    exit();
}

$mail = new PHPMailer(true);

try {
    // === SMTP Setup ===
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreply.web@rosmertatech.com';
    $mail->Password   = 'L$826992633603ak';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('noreply.web@rosmertatech.com', '');
   $mail->addAddress('ethics@rosmertatech.com', '');

    // === File Upload Check ===
    if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] !== UPLOAD_ERR_NO_FILE) {
        if ($_FILES['attachment']['error'] !== UPLOAD_ERR_OK) {
            throw new Exception("Upload error code: " . $_FILES['attachment']['error']);
        }

        $fileTmpPath   = $_FILES['attachment']['tmp_name'];
        $fileName      = $_FILES['attachment']['name'];
        $fileType      = mime_content_type($fileTmpPath);
        $fileSize      = $_FILES['attachment']['size'];
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        $allowedMimeTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg',
            'image/png',
            'application/zip' // For .docx fallback
        ];
        $allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];

        if ($fileSize > 5 * 1024 * 1024) {
            throw new Exception("File too large. Maximum size is 5MB.");
        }

        if (!in_array($fileType, $allowedMimeTypes) || !in_array($fileExtension, $allowedExtensions)) {
            throw new Exception("Unsupported file type. Only PDF, DOC, DOCX, JPG, PNG allowed.");
        }

        $mail->addAttachment($fileTmpPath, $fileName);
    }

    // === Email Content ===
    $mail->isHTML(true);
    $mail->Subject = 'RTL - Whistleblower And Anonymous Reporting';
    $mail->Body = "
        <table border='0' cellpadding='5'>
            <tr><td><strong>Type of Misconduct:</strong></td><td>" . htmlspecialchars($misconduct) . "</td></tr>
            <tr><td><strong>Date of the Incident:</strong></td><td>" . htmlspecialchars($incident) . "</td></tr>
            <tr><td><strong>Description:</strong></td><td>" . nl2br(htmlspecialchars($description)) . "</td></tr>
        </table>";
    $mail->AltBody = "Type of Misconduct: $misconduct\nDate: $incident\nDescription: $description";

    $mail->send();

    header("Location: thankyou.html");
    exit();

} catch (Exception $e) {
    $_SESSION['form_error'] = $e->getMessage();
    // header("Location: form.php");
    exit();
}
