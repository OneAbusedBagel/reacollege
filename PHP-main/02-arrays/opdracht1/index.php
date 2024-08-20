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
    // unset($supermarkten[5], '');
    // I do not know how to do this with unset.. but this works
    $supermarkten[5] = '';
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