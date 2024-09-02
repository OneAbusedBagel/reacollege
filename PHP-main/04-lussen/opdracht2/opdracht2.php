<?php

    $x = 1;
    $y = 500;

    echo '<ul>' ;
    while ($x < 1000 ) {
        echo '<li>';
        echo $x ;
        echo '</li>';
        $x = $x * 3 ;
    };
    echo '</ul>';

    echo '<ul>';
    while ($y > 50 ) {
        echo '<li>';
        echo $y ;
        echo '</li>';
        $y = $y / 5 ;
    };
    echo '</ul>';
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>4.2</title>
        <script defer src="https://kit.fontawesome.com/e9b552d600.js" crossorigin="anonymous"></script>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            table {
				font-family: arial, sans-serif;
                border: #dddddd 3px solid;
				border-collapse: collapse;
				width: 40px;
			}
				td, th {
                border: #dddddd 3px solid;
				text-align: left;
				padding: 8px;
			}
            td:nth-child(even) {
				background-color: #dddddd;
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
