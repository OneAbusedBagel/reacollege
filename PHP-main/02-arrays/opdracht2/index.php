<?php
 <?=$reverse;?>
    $text = 'The club isn\'t the best place to find a lover, so the bar is where I go. Me and my friends at the table doing shots, drinking fast and then we talk slow.';
    $find_o = 'o';
    $find_t = 't';
    $scan = strpos($text, $find_o);
    $scan_last = strrpos($text, $find_t);
    $reverse = strrev($text);
    $shuffled = str_shuffle($text);

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>1.6</title>
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
            <p>The string: </p>
            <span><?=$text?></span>
        </header>
        <span>---</span>
		<section>
            <p>The letter 'o' is in the <?=$scan,'st';?> position</p>
            <p>The last letter 't' is in the <?=$scan_last,'rd';?> position</p>
            <span>---</span>
            <p>The string but backwards:</p>
            <span><?=$reverse;?></span>
            <p>The string but shuffled in a random order... for some reason</p>
            <span><?=$shuffled?></span>
		</section>
	</body>
</html>