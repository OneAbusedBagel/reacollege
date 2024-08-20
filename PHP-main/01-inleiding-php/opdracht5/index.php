<?php

    $r1 = rand(1,255); 
    $r2 = round(rand(1,20))*2; // even is done
    $r3 = rand(30, 90)/10;	// I assume it always wants a decimal for numbers like '6.0'instead of just 6.. but I haven't figured out hwo to do that and I've wasted enough hours here

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Random</title>
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
            <p> <?=$r1;?></p>
            <p> <?=$r2;?></p>
            <p> <?=$r3;?></p>
		</section>
	</body>
</html>