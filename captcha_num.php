<?php
session_start();

// Generate a simple math CAPTCHA
$operators = ['+', '-'];
$num1 = rand(1, 9);
$num2 = rand(1, 9);
$operator = $operators[array_rand($operators)];

// Calculate the correct answer
switch ($operator) {
    case '+':
        $captcha_answer = $num1 + $num2;
        break;
    case '-':
        // Ensure non-negative result
        if ($num1 < $num2) {
            $tmp = $num1;
            $num1 = $num2;
            $num2 = $tmp;
        }
        $captcha_answer = $num1 - $num2;
        $operator = '-';
        break;
}

// Store answer in session
$_SESSION['captcha'] = $captcha_answer;

// Create image
$width = 120;
$height = 60;
$captcha_image = imagecreate($width, $height);

// Background color (light gray)
$background_color = imagecolorallocate($captcha_image, 220, 220, 220);

// Text color (dark gray)
$text_color = imagecolorallocate($captcha_image, 50, 50, 50);

// Noise color (gray lines)
$noise_color = imagecolorallocate($captcha_image, 160, 160, 160);

// Add noise (lines)
for ($i = 0; $i < 8; $i++) {
    imageline($captcha_image, rand(0, $width), rand(0, $height), rand(0, $width), rand(0, $height), $noise_color);
}

// Font settings
$font_size = 26;
$font_path = __DIR__ . '/monofont.ttf';  // Path to TTF font
$x = 15;
$y = 40;

// Math question as text (e.g., "5 - 3 =")
$captcha_question = "$num1 $operator $num2 =";

// Add text to image
imagettftext($captcha_image, $font_size, rand(-5, 5), $x, $y, $text_color, $font_path, $captcha_question);

// Output image
ob_clean();
header('Content-Type: image/png');
imagepng($captcha_image);
imagedestroy($captcha_image);
?>
