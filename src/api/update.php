<?php

include 'connect.php';

/** @var PDO $connect */

$name = $_POST['name'];
$id = $_POST['id'];
header('Content-Type: application/json');
$name = trim($name);
if (preg_match("/^[a-zA-Z-]+$/", $name) && strlen($name) >= 3 && strlen($name) <= 13) {
    $update = "UPDATE ludzie SET imie = :name WHERE id = :id";
    $preparedQuery = $connect->prepare($update);
}
$preparedQuery->bindParam('name', $name);
$preparedQuery->bindParam('id', $id);
$preparedQuery->execute();
echo json_encode([$id, $name]);
exit;
