<?php
// make sure to use [type declarations] and [return type declarations]

function truncateString(string $text,int $limit) {
	if (strlen($text) > $limit) {
		$newtext = substr($text, 0,  $limit). '...';
	}
	return $newtext;
};

function l33tifyString(string $text){
	$search = array("a","A", "o", "O", "e", "E", "i", "I" );
	$replace = array("@","@", "0","0", "3","3", "1","1" );
	$newtext = str_replace($search, $replace, $text);
	return $newtext;
}

truncateString('very super long testing word.. (sentence)', 12);
l33tifyString('very super long testing word.. (sentence).. a-A o-O e-E i-I');

$string_1 = 'Phantom train';
$string_2 = 'Figaro castle';
$string_3 = 'Pheonix cave';

$test_1 = truncateString($string_1, 10);
$test_2 = l33tifyString($string_2);
$test_3 = truncateString($string_3, 10);
$test_3 = l33tifyString($test_3);

echo '<p>' .$string_1. ' --> ' .$test_1. '</p>';
echo '<p>' .$string_2. ' --> ' .$test_2. '</p>';
echo '<p>' .$string_3. ' --> ' .$test_3. '</p>';

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 7-2</title>
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