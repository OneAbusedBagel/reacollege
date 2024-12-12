<?php
	$panel1 = "";
	$panel2 = "";
	$panel3 = "";

	if (isset($_GET['generate'])){
		$nmbr1 = $_GET['panel1'];
		$nmbr2 = $_GET['panel2'];
		$nmbr3 = $_GET['panel3'];

		$panel1 = 'images/panel-1-' .$nmbr1. '.png';
		$panel2 = 'images/panel-2-' .$nmbr2. '.png';
		$panel3 = 'images/panel-3-' .$nmbr3. '.png';
		
	}
	if (isset($_GET['random'])){
		$nmbr1 = rand(1, 8);
		$nmbr2 = rand(1, 8);
		$nmbr3 = rand(1, 8);
		


		$panel1 = 'images/panel-1-' .$nmbr1. '.png';
		$panel2 = 'images/panel-2-' .$nmbr2. '.png';
		$panel3 = 'images/panel-3-' .$nmbr3. '.png';

	}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Comic Generator</title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<div id="container">
			<section class="comic">
				<div class="panel-1">
					<img src="<?=$panel1?>" alt="panel 1" width="275" height="398">
				</div>
				<div class="panel-2">
					<img src="<?=$panel2?>" alt="panel 2" width="275" height="398">
				</div>
				<div class="panel-3">
					<img src="<?=$panel3?>" alt="panel 3" width="275" height="398">
				</div>
			</section>
			<section class="selection">
				<form action="" method="GET">
					<label for="panel1"> First panel</label>
					<input type="number" name="panel1" id="panel1" min="1" max="8" value="<?=$nmbr1?>">
					<label for="panel2"> Second panel</label>
					<input type="number" name="panel2" id="panel2" min="1" max="8" value="<?=$nmbr2?>">
					<label for="panel3"> Third panel</label>
					<input type="number" name="panel3" id="panel3" min="1" max="8" value="<?=$nmbr3?>">
					<br>
					<input type="submit" name="generate" value="Generate comic">
					<input type="submit" name="random" value="Random comic">
				</form>
			</section>
		</div>
	</body>
</html>