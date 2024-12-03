<?php
	$panel1 = "";
	$panel2 = "";
	$panel3 = "";

	if (isset($_GET['generate'])){
		$rng1 = rand(1, 8); // for testing
		$rng2 = rand(1, 8); // for testing
		$rng3 = rand(1, 8); // for testing


		$panel1 = 'images/panel-1-' .$rng1. '.png';
		$panel2 = 'images/panel-2-' .$rng2. '.png';
		$panel3 = 'images/panel-3-' .$rng3. '.png';

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
					<input type="number" name="panel1" id="panel1" min="0" max="8">
					<label for="panel2"> Second panel</label>
					<input type="number" name="panel2" id="panel2" min="0" max="8">
					<label for="panel3"> Third panel</label>
					<input type="number" name="panel3" id="panel3" min="0" max="8">
					<br>
					<input type="submit" name="generate" value="Generate">
				</form>
				<?php
				echo $panel1. '<br>';
				echo $panel2. '<br>';
				echo $panel3. '<br>';
				?>
			</section>
		</div>
	</body>
</html>