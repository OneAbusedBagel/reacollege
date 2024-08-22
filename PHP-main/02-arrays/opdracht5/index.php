<?php
	$catalogus = [
		'Rode wijnen' => ['Merlot', 'Carbernet Sauvignon', 'Grenache', 'Malbec'],
		'Witte wijnen' => ['Chardonnay', 'Riesling', 'Pinot Blanc', 'Trebbiano'],
		'Speciaalbieren' => ['Duvel', 'Leffe', 'Affligem'],
		'Sterke dranken' => ['Baileys', 'Wodka', 'Whisky', 'Cognac', 'Rum', 'Malibu']
	];
    $catalogus['Witte wijnen'][2] = 'pinot Gris';
    $catalogus['Sterke dranken'] = 'Gedestilleerde dranken';
    // $catalogus['Sterke dranken'][0] = 'test'; /* stopped working on this for a while beacuse I was running into mental issues and workspeed slowed to a crawl - putting this one on pause for now and working on exercise 6 instead to hopefully clear my mind */
    // $catalogus['Sterke dranken'][4] = 'test'; 
    foreach ($catalogus as $key => $types){
		echo '<ul>';
        echo '<li>' .$key. '</li>';
		echo '<ul>';
        foreach ($types as $brand){
            echo '<li>' .$brand. '</li>';
        };
		echo '</ul>';
		echo '</ul>';
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