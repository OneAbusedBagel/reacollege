<?php

function printBusinessCard(string $firstName = 'unknown', string $lastName = 'unknown', $age = 'unknown', string $title = 'unknown', string $location = 'unknown', string $biography = 'unknown'){
	$output = '<article>';
	$output .= '<p>Naam: '.$firstName.' '.$lastName.'</p>';
	$output .= '<p>Leeftijd: '.$age.'</p>';
	$output .= '<p>Titel: '.$title.'</p>';
	$output .= '<p>Locatie: '.$location.'</p>';
	$output .= '<p>Biografie: '.$biography.'</p>';
	$output .= '</article>';
	return $output;
}

echo printBusinessCard(
	'Sonic',
//   the
	'Hedgehog',
	'33',
	"Founder of the 'stopping that egghead' club", 
	'Greenhill', 
	'goes fast',
); 
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 7-4</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
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
    </body>
</html>