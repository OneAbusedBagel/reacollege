<?php

// Don't know exactly how to add Null coalescing operators into this- will ask about it tommorow as day is almost over (and am working from home)
function printBusinessCard(string $firstName, string $lastName, int $age, string $title, string $location, string $biography){
	$output = '<article>';
	$output .= '<p>Naam: '.$firstName.' '.$lastName.'</p>';
	$output .= '<p>Leeftijd: '.$age.'</p>';
	$output .= '<p>Titel: '.$title.'</p>';
	$output .= '<p>Locatie: '.$location.'</p>';
	$output .= '<p>Biografie: '.$biography.'</p>';
	$output .= '</article>';
	return $output;
}

echo printBusinessCard('bass', 'pro', '289', 'CEO of Bass Pro Ind.', 'The Country of Djibouti', 'professional fish'); 
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