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

// // opdracht 4.3
// echo printBusinessCard(
// 	'Sonic',
// //   the
// 	'Hedgehog',
// 	'33',
// 	"Founder of the 'stopping that egghead' club", 
// 	'Greenhill', 
// ); 

echo printBusinessCard(
	firstName: 'Sonic',
//   the
	// lastName: 'Hedgehog',
	// age: '33',
	title: "Founder of the 'stopping that egghead' club", 
	location: 'Greenhill', 
	biography: 'goes fast',
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