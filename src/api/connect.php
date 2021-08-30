<?php

$mysql_host = 'localhost';
$port = '3306';
$username = 'root';
$password = '';
$database = 'tasklist';

try{
    $connect = new PDO('mysql:host=' . $mysql_host . ';dbname=' . $database . ';port=' . $port . ";charset=utf8", $username, $password );
}catch(PDOException $exception){
    echo('<p>Nie działa</p>');
}