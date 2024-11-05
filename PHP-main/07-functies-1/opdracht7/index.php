<?php

// oh wait no this is all wrong because it has to be an array
function randomArray($int) {
    // this one is messing with me cause they don't give me an upper limit??
    $x = rand(1, 20);
	$length = $int;

    echo $int;
    $rng_list = [];
    for ($i = 1; $i <= $length;) {
        $rng = rand(1, 20);
        $rng_list[] = $rng;
        $i++;
    };

    // should use the other one (i forgot which) instead of var dump cus it looks terrible, but it wokrs I think? the description of this exercise is just awful for my brain.
    var_dump($rng_list);
}

randomArray(10)

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 7-7</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            table {
				font-family: arial, sans-serif;
                /* border: #dddddd 3px solid; */
				border-collapse: collapse;
				width: 40px;
			}
				td, th {
                /* border: #dddddd 3px solid; */
				text-align: left;
				padding: 8px;
			}
            td:nth-child(even) {
				background-color: #dddddd;
			}
        </style>
	</head>
    <body>
    </body>
</html>