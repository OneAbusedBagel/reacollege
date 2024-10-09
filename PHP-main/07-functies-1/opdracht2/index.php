<?php
// make sure to use [type declarations] and [return type declarations]

function truncateString(string $text,int $limit) {
	if (strlen($text) > $limit) {
		$newtext = substr($text, 0,  $limit). '...';
	}
	echo "<p> truncate string funciton started: </p>";
	echo $newtext. "<br>";
	echo $text. "<br>";
	echo 'word length = ' .strlen($text);
	echo "<br>";
	echo "limit set to = " .$limit;
	echo "<br> function ended <br> <br>";
	return $newtext;
};

// use str_replace
function l33tifyString(string $text){
	$search = array("a","A", "o", "O", "e", "E", "i", "I" );
	$replace = array("@","@", "0","0", "3","3", "1","1" );
	$newtext = str_replace($search, $replace, $text);
	echo "<br>". $newtext. "<br>";
	echo $text. "<br>";
}

truncateString('very super long testing word.. (sentence)', 12);
l33tifyString('very super long testing word.. (sentence).. a-A o-O e-E i-I');

$test_1 = truncateString('Phantom train', 9);
$test_2 = l33tifyString('Figaro castle');
$test_3 = truncateString('Pheonix cave', 9);
$test_3 = l33tifyString($test_3);
echo $test_1. '<br>';
echo $test_2. '<br>';
echo $test_3. '<br>';
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