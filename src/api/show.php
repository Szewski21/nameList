<?php
include 'download.php';

/** @var PDOStatement $query */
$people = $query->fetchAll(PDO::FETCH_NUM);
echo json_encode($people);
header('Content-Type: application/json');
