<?php
session_start();
if(isset($_POST['html'])){

    $_SESSION['html'] = $_POST['html'];
    echo $_SESSION['html'];
}
?>