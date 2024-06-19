<?php

	$datum = date('d-m-Y');
	$tijd = date('H:i:s');

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Datum & Tijd</title>
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
			<p>Het is nu <?=$tijd;?> op <?=$datum;?>.</p>
		</header>
		<section>
			<!-- Plaats in deze sectie je opgehaalde eigenschappen van opdracht 4.3 -->
		</section>
	</body>
</html>