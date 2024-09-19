<?php

    $firstname =  $_POST['firstname'];
    $lastname =  $_POST['lastname'];
    $age =  $_POST['age'];
    $date =  $_POST['date'];
    $color =  $_POST['color'];

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>6.1</title>
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
                echo '<p>'.$firstname.'</p>';
                echo '<p>'.$lastname.'</p>';
                echo '<p>'.$age.'</p>';
                echo '<p>'.$date.'</p>';
                echo '<p>'.$color.'</p>';
            ?>
		</section>
	</body>
</html>
