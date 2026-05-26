<?php
session_start();

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate CAPTCHA
    if (isset($_POST['captcha']) && $_POST['captcha'] === $_SESSION['captcha']) {
        // Destroy CAPTCHA to prevent reuse
        unset($_SESSION['captcha']);

        // Validate and sanitize inputs
        $misconduct = htmlspecialchars(trim($_POST['Misconduct']));
        $incident = htmlspecialchars(trim($_POST['Incident']));
        $description = htmlspecialchars(trim($_POST['Description']));

        // Email configuration
        $to = "support@smartech.co.in, vikas@smartech.co.in";
        $subject = "Rosmerta Technologies - Whistleblower And Anonymous Reporting";
        $from = "no-reply@rosmertatech.com";

        $message_body = "Type of Misconduct: $misconduct\r\n\r\nDate of the Incident: $incident\r\n\r\nDescription: $description";

        // Handle file attachment
        if (isset($_FILES['Attachment']) && $_FILES['Attachment']['error'] == UPLOAD_ERR_OK) {
            $file_tmp = $_FILES['Attachment']['tmp_name'];
            $file_name = $_FILES['Attachment']['name'];
            $file_type = mime_content_type($file_tmp);

            // Allowed file types
            $allowed_types = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/jpg',
                'image/png'
            ];

            if (!in_array($file_type, $allowed_types)) {
                echo "Only PDF, JPG, PNG, or Word documents are allowed.";
                exit();
            }

            // Read file and encode
            $file_data = file_get_contents($file_tmp);
            $file_base64 = chunk_split(base64_encode($file_data));
            $boundary = "==Multipart_Boundary_x" . md5(time()) . "x";

            // Headers for attachment
            $headers = "From: $from\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";

            // Body with file
            $body = "--$boundary\r\n";
            $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
            $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $body .= $message_body . "\r\n\r\n";

            $body .= "--$boundary\r\n";
            $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
            $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= "$file_base64\r\n";
            $body .= "--$boundary--";

        } else {
            // No file uploaded
            $headers = "From: $from\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
            $body = $message_body;
        }

        // Attempt to send mail

        if (mail($to, $subject, $body, $headers)) {
            header("Location: thankyou.html");
            exit();
        } else {
            error_log("Mail sending failed (anonymous form)");
            echo "There was an error sending your message. Please try again later.";
        }
    } else {
        echo "The CAPTCHA code entered was incorrect. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
