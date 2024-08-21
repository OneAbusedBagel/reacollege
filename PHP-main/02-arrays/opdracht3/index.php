<?php
    $numbers = [
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000),
        rand(0,1000)
    ];
    rsort($numbers);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>2.3</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
		</style>
	</head>
	<body>
		<header>

        </header>
		<section>
            <ol>
                <?php 
                    foreach ($numbers as $key => $value){ echo'<li>'.$value. '</li>';}; 
                ?>
            </ol>
		</section>
	</body>
</html>