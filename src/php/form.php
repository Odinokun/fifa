<?php

$email_to     = "odinokun@gmail.com";
$email_from     = "fifa@kiev.ua";
$email_subject  = "ДО ФІНАЛУ З ВОЛЯ";
$date = new DateTime('now', new DateTimeZone('Europe/Kiev') );

$contract = $_POST['contract'];
$name = $_POST['name'];
$secondName = $_POST['secondName'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if(!empty($_POST['agreeSale'])){
  $agreeSale = 'так';
} else {
  $agreeSale = 'нi';
}

if(!empty($_POST['agreePersonal'])){
  $agreePersonal = 'так';
} else {
  $agreePersonal = 'нi';
}


if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
  $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
  $ip = $_SERVER['REMOTE_ADDR'];
}


function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

$email_message = "Лист з сайту 'ДО ФІНАЛУ З ВОЛЯ':\n\n";
$email_message .= "№ контракту: ".clean_string($contract)."\n";
$email_message .= "Ім'я: ".clean_string($name)."\n";
$email_message .= "Прізвище: ".clean_string($secondName)."\n";
$email_message .= "Телефон: ".clean_string($phone)."\n";
$email_message .= "Email: ".clean_string($email)."\n";
$email_message .= "Я погоджуюся з умовами акції: ".clean_string($agreeSale)."\n";
$email_message .= "Даю згоду на обробку персональних даних: ".clean_string($agreePersonal)."\n";
$email_message .= "----------------------------\n\n";
$email_message .= "IP: ".clean_string($ip)."\n";
$email_message .= "Дата: ".$date->format('Y-m-d H:i:s')."\n";

$headers = 'From: '.$email_from."\r\n";
$headers .= 'Reply-To: '.$email."\r\n";
//$headers .= 'Reply-To: '.$email_from."\r\n";

$headers .= 'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

// Save to file
$file = 'data.txt';
$current = file_get_contents($file);
$current .= $contract.';'.$name.';'.$secondName.';'.$phone.';'.$email.';'.$agreeSale.';'.$agreePersonal.';'.$date->format('Y-m-d H:i:s').';'.PHP_EOL;
file_put_contents($file, $current);