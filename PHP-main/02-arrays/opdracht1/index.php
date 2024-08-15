<?php
    $supermarkten = [
        'Albert Heijn',
        'Jumbo',
        'Coop',
        'Jan Linders',
        'Edah',
        'C1000',
    ]; 
    $supermarkten[] = 'Aldi';
    $supermarkten[] = 'Lidl';
    $supermarkten[2] = 'plus';
    unset($supermarkten[4]);
    unset($supermarkten['C1000']);
    $show = Print_r($supermarkten);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 1.1</title>
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
	</body>
</html>