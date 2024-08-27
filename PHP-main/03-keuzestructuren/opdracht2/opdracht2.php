<?php

    $datum = date('d-m-Y');
    $dayOfWeek = date('D');
    $dayOfMonth = date('j');
    $month = date('F');

    if($dayOfWeek = 'mon' || 'teu' || 'wed'||'thu'||'fri') {
        echo 'Het is een werkdag!';
    };
    if($dayOfWeek = 'fri' && $dayOfMonth = '13') {
        echo 'Het is vrijdag de 13de!!';
    };
    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.2</title>
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
