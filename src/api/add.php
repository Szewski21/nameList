<?php

include 'connect.php';

/** @var PDO $connect */

$name = $_POST['name'];
header('Content-Type: application/json');
$name = trim($name);
if (preg_match("/^[a-zA-Z-]+$/", $name) && strlen($name) >= 3 && strlen($name) <= 13) {
    $add = "INSERT INTO ludzie(imie) VALUES(:name)";
    $preparedQuery = $connect->prepare($add);
}
$preparedQuery->bindParam('name', $name);
$preparedQuery->execute();
echo json_encode([$connect->lastInsertId(), $name]);
exit;