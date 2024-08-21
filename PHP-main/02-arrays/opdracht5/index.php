<?php
    $wines = ['Merlot', 'Carbernet Sauvignon', 'Grenache', 'Malbec'];
	$catalogus = [
		'Rode wijnen' => ['Merlot', 'Carbernet Sauvignon', 'Grenache', 'Malbec'],
		'Witte wijnen' => ['Chardonnay', 'Riesling', 'Pinot Blanc', 'Trebbiano'],
		'Speciaalbieren' => ['Duvel', 'Leffe', 'Affligem'],
		'Sterke dranken' => ['Baileys', 'Wodka', 'Whisky', 'Cognac', 'Rum', 'Malibu']
	];
    $catalogus['Witte wijnen'][2] = 'pinot Gris';
    $catalogus['Sterke dranken'] = 'Gedestilleerde dranken';
    $catalogus['Sterke dranken'][0] = 'test'; /* probably gonna have to change this to unset -- it didn't work anyway so no worries*/
    $catalogus['Sterke dranken'][4] = 'test'; 
    foreach ($catalogus as $key => $types){
        echo '<h2>' .$key. '</h2>';
        foreach ($types as $brand){
            echo '<span>' .$brand. '</span> <br>';
        }
    }
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>2.5</title>
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