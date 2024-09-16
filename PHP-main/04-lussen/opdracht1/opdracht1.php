<?php

    $x = 5;
	$length = 20;

    echo '<table>';
    for ($i = 1; $i <= $length;) {
        $solve = $x * $i;

    // table was modified from one long line to cascaded for ease of viewing / editing 
        echo '<tr>' ;
        echo    '<td>' .$i. '</td>';
        echo    '<td> x </td> <td>' .$x. '</td>';
        echo    '<td> = </td>' ;
        echo    '<td>' .$solve. '</td>' ;
        echo '</tr>';

        $i++;
    };
    echo '</table >';


?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>4.1</title>
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
