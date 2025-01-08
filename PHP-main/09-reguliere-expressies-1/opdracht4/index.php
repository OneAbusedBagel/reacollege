<?php
	$pattern_pass = '/ /';
	if (isset($_GET['search-button'])){
		$name = $_GET['username'] ?? ''; 
		$pass = $_GET['password'] ?? ''; 

		if (preg_match($pattern_post, $post)){
			$msg = 'Geldige wachtwoord!! hier:'.$_GET['search_post'];
		} else {
			$msg = 'U heeft geen geldige postcode opgegeven.';
		}

	}
?>
<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title>9.4</title>
		<link rel="stylesheet" href="styles/stylesheet.css">
	</head>
	<body>
		<section>
			<form action="index.php" method="GET">
				<label for="username">gebruikersnaam:</label>
				<input type="text" name="username" id="username" placeholder="<?= $previous_search_post ?? 'Vul uw postcode in...';?>">
				<br>
				<label for="password">wachtwoord:</label>
				<input type="text" name="password" id="password" placeholder="<?= $previous_search_iban ?? 'Vul uw rekeningnummer in...';?>">
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