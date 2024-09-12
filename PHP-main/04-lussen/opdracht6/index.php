<?php
		echo '<div id="wrapper">';
			echo '<div id="container">';
				echo '<div id="checker-board">';
					for($i=1; $i < 11; $i++) {
						echo '<div class="row">';
						for($i2=1; $i2 <= 5; $i2++) {

							$i < 4 ? $class = 'class="pawn-white"' : null;
							$i > 6 ? $class = 'class="pawn-black"' : null;

							$line1 = '<div class="square"></div>';
							$line2 = '<div class="square"></div>';

							if($i < 5 || $i > 6) {
								if ($i % 2 == 0) {
									$line1 = '<div class="square"><div '.$class.'></div></div>';
								} else {
									$line2 = '<div class="square"><div '.$class.'></div></div>';
								};
							};

							echo $line1;
							echo $line2;
						}2;
						echo '</div>';
					};
				echo '</div>';
			echo '</div>';
		echo '</div>';
?>
<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="UTF-8">
		<title>Checker board</title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
	</body>
</html>