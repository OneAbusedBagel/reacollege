<?php

    $movies2018 = [
        "Venom",
        "Deadpool 2",
        "Solo: A Star Wars Story",
        "A Quiet Place", "Avengers: Infinity War",
        "Mandy", 
        "Love, Simon", 
        "Incident in a Ghost Land",
    ];

    sort($movies2018);

    echo '<ul>';
    foreach($movies2018 as $key => $value){
        echo '<li>' . ($value == 'Mandy' ? '<b>' .$value. '</b>' : $value) . '</li>';
    }
    echo '<ul>';

    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.2</title>
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

		</section>
	</body>
</html>
