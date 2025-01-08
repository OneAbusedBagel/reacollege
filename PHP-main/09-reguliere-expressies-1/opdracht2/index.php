<?php
	$pattern_post = '/^([0-9]{4})\s?[A-Z]{2}/';
	$pattern_iban = '/^NL[0-9]{2}\s?[A-Z]{4}\s?[0-9]{10}/';
	if (isset($_GET['search-button'])){
		$post = $_GET['search_post'] ?? ''; 
		$iban = $_GET['search_iban'] ?? ''; 

		if (preg_match($pattern_post, $post)){
			$msg_post = 'Geldige postcode!! hier:'.$_GET['search_post'];
		} else {
			$msg_post = 'U heeft geen geldige postcode opgegeven.';
		}
		if (preg_match($pattern_iban, $iban)){
			$msg_iban = 'Geldige rekeningnummer!! hier:'.$_GET['search_iban'];
		} else {
			$msg_iban = 'U heeft geen geldige rekeningnummer opgegeven.';
		}

		$previous_search_post = $_GET['search_post'] ?? 'no previous check';
		$previous_search_iban = $_GET['search_iban'] ?? 'no previous check';
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
				<input type="text" name="search_post" id="postcode" placeholder="<?= $previous_search_post ?? 'Vul uw postcode in...';?>">
				<br>
				<label for="iban">rekeningnummer check:</label>
				<input type="text" name="search_iban" id="iban" placeholder="<?= $previous_search_iban ?? 'Vul uw rekeningnummer in...';?>">
				<input type="submit" name="search-button" value="controleren">
			</form>
			<?php
				if (isset($msg_post) && $msg_post != ''){
					echo '<p>'.$msg_post.'</p>';
				}
				if (isset($msg_iban) && $msg_iban != ''){
					echo '<p>'.$msg_iban.'</p>';
				}
				?>
		</section>
	</body>
</html>