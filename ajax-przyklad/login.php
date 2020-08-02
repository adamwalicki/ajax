<?php 
if (isset($_POST["username"]) && isset($_POST["password"])){
    if ($_POST["username"] ==="Kasia" && $_POST["password"] =="Kowalska"){
        echo "Brawo";
    }
    else {
        echo "Źle";
    }
}

?>