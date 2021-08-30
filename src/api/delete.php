<?php

include 'connect.php';

/** @var PDO $connect */

$id = $_POST['id'];
header('Content-Type: application/json');
    $add = "DELETE FROM Ludzie WHERE id = :id ";
    $preparedQuery = $connect->prepare($add);
$preparedQuery->bindParam('id', $id);
$preparedQuery->execute();
echo json_encode([['test']]);

