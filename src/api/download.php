<?php
include 'connect.php';

/** @var PDO $connect */
$query = $connect->prepare("SELECT * FROM ludzie");
$query->execute();