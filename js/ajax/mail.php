<?php 

	$email = $_POST['email'];
	$name = $_POST['name'];
	$sub = $_POST['sub'];
	$message = $_POST['mess'];

	$subject = "=?utf-8?B?".base64_encode("$sub")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

	$success = mail("sergiuvikarchyk@gmail.com", $subject, $message, $headers);
	echo $success;
?>