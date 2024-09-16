<?php

    $numbers = [

    ];

    for ($i=0; $i <= 10 ; $i++) { 
        $nmbr = rand(1, 20);
        $numbers[] = $nmbr;
        if($nmbr == 13) {
            break;
        };
    }

    print_r($numbers);
    sort($numbers);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>4.3</title>
        <script defer src="https://kit.fontawesome.com/e9b552d600.js" crossorigin="anonymous"></script>
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
            <pre> <?=print_r($numbers)?> </pre>
        </header>
		<section>

		</section>
	</body>
</html>
