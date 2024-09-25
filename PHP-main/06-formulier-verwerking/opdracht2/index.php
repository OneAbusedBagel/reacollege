<?php

    // $firstname =  $_POST['firstname'];
    // $lastname =  $_POST['lastname'];
    // $age =  $_POST['age'];
    // $date =  $_POST['date'];
    // $color =  $_POST['color'];

    if (isset($_POST['register'])){
        $errors = [];
        if (!empty($_POST['firstname'])){
            $firstname = $_POST['firstname'];
        } else {
            $errors[] = "you didn't give us a firstname!";
        }
        if (!empty($_POST['lastname'])){
            $lastname = $_POST['lastname'];
        } else {
            $errors[] = "you didn't give us a lastname!";
        }
        if (!empty($_POST['age'])){
            $_POST['age'] > 0 && $_POST['age'] < 150 ? $age = $_POST['age'] :  $errors[] = "not a valid age value";
        } else {
            $errors[] = "you didn't give us an age!";
        }
        if (!empty($_POST['date'])){
            $date = $_POST['date'];
        } else {
            $errors[] = "you didn't give us a birthdate!";
        }
        if (!empty($_POST['color'])){
            $color = $_POST['color'];
        } else {
            $errors[] = "you didn't give us a color!";
        }
    }


?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>6.2</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: <?=$color?>;
			}
            .modulus_four {
                color: green;
            }
            .red {
                color: crimson;
            }
		</style>
	</head>
	<body>
        <header>
            <!-- <pre> <?=print_r($placeholder)?> </pre> -->
        </header>
		<section>
            <form action="index.php" method="post">
                <input type="text" name="firstname" placeholder="Jane"><br>
                <input type="text" name="lastname" placeholder="Doe"><br>
                <input type="number" name="age"><br>
                <input type="date" name="date"><br>
                <input type="color" name="color"><br>
                <input type="submit" name="register" value="Verzenden">
            </form>
            <?php
                if (isset($_POST['register']) && count($errors) > 0){
                    foreach ($errors as $error){
                        echo '<p class="red">'.$error.'</p>';
                    }
                } else {
                    if (isset($firstname)){
                        echo '<p>Your firstname: '.$firstname.'</p>';
                    }
                    if (isset($lastname)){
                        echo '<p>Your lastname: '.$lastname.'</p>';
                    }
                    if (isset($age)){
                        echo '<p>Your age: '.$age.'</p>';
                    }
                    if (isset($date)){
                        echo '<p>Your birthdate: '.$date.'</p>';
                    }
                    if (isset($color)){
                        echo '<p>Your color: '.$color.'</p>';
                    }
                }

            ?>
		</section>
	</body>
</html>
