<?php

if (isset($_POST['submit'])){
    if (!empty($_POST['username'])) {
        $username = htmlspecialchars($_POST['username']);
    }
    if (!empty($_POST['password'])) {
        $password = htmlspecialchars($_POST['password']);
    }
    if (!empty($_POST['password_2'])) {
        $password_2 = htmlspecialchars($_POST['password_2']);
    }
    
    $credentials = [];
    if (isset($username)){
        echo '<p>Username: '.$username.'</p>';
        $credentials['username'] = $username;
    }
    if (isset($password)){
        echo '<p>password 1: '.$password.'</p>';
        $credentials['password'] = $password;
    }
    if (isset($password_2)){
        echo '<p>password 2: '.$password_2.'</p>';
        $credentials['password_2'] = $password_2;
    }
    checkpass($credentials);
}

function checkpass($credentials) {
    $errors = [];
    if($credentials['password'] === $credentials['password_2']) {
        echo "password-match check: passed. <br>";
    } else {
        $errors[] = "passwords don't match";
    }
    if(strlen($credentials['password']) >= 8) {
        echo "password-length check: passed. <br>";
    } else {
        $errors[] = "password is too short";
    }
    if($credentials['username'] !== $credentials['password']) {
        echo "password-username check: passed. <br>";
    } else {
        $errors[] = "Password can't be your username!";
    }


    if (empty($errors)) {
        echo '<p class="green"> registratie voltooid </p>';
    } else {
        echo '<section class="red"> <p> Registratie niet voltooid. Probeer nog eens </p>';
            foreach ($errors as $error){
                echo '<p>'.$error.'</p>';
            }
        echo '</section>';
    }
}


?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 7-6</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            form {
                width: 300px;
                margin: 50px 0px 0px 40px;
                display: flex;
                flex-direction: column;
            }
            .green {
                color: green;
            }
            .red {
                color: red;
            }
        </style>
	</head>
    <body>
        <form action="index.php" method="post">
            <label for="username">username</label>
            <input type="text" name="username">

            <label for="password">password</label> 
            <input type="text" name="password">

            <label for="password_2">confirm password</label>
            <input type="text" name="password_2">

            <br>
            <input type="submit" name="submit" value="submit">
        </form>
    </body>
</html>