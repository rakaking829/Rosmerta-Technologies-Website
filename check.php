<?php
$output = shell_exec('postconf -d | grep mail_version');

if ($output) {
    echo "Postfix is installed. Version info:\n$output";
} else {
    echo "Postfix is not installed or not in PATH.";
}
?>
