<?php

$result = 0;

function divide(int $x,int $y) {
    $result = $x / $y ;
    round($result);

    echo '<input type="number" name="result" value="'.$result.'" readonly><br><br>';
}

divide(12,4);
divide(64,8);
divide(256,16);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 7-1</title>
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