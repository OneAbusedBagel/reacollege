<?php
	$pattern = '/^([0-9]{4})\s?[A-Z]{2}/';
	if (isset($_GET['search-button'])){
		$string = $_GET['search'] ?? ''; 
		if (preg_match($pattern, $string)){
			$msg = 'Geldige postcode!! hier:'.$_GET['search'];
		} else {
			$msg = 'U heeft geen geldige postcode opgegeven.';
		}
		$previous_search = $_GET['search'] ?? 'no previous search';
	}
?>
<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title>9.2</title>
		<link rel="stylesheet" href="styles/stylesheet.css">
	</head>
	<body>
		<section>
			<form action="index.php" method="GET">
				<label for="postcode">postcode check:</label>
				<input type="text" name="search" id="postcode" placeholder="<?= $previous_search ?? 'Vul uw postcode in...';?>">
				<input type="submit" name="search-button" value="controleren">
			</form>
			<?php
				if (isset($msg) && $msg != ''){
					echo '<p>'.$msg.'</p>';
				}
			?>
		</section>
	</body>
</html>