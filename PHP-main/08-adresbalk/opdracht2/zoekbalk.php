<?php
	if (isset($_GET['search-button'])){
		if (!empty($_GET['search'])){
			$msg = 'U wilt zoeken op: '.$_GET['search'];
		} else {
			$msg = 'U heeft geen geldige zoekterm opgegeven.';
		}
		$previous_search = $_GET['search'] ?? 'no previous search';
	}
?>
<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title>Zoekbalk</title>
		<link rel="stylesheet" href="styles/stylesheet.css">
	</head>
	<body>
		<section>
			<form action="<?=htmlspecialchars($_SERVER['PHP_SELF']);?>" method="GET">
				<label for="zoeken">Zoekopdracht:</label>
				<input type="text" name="search" id="zoeken" placeholder="<?= $previous_search ?? 'Vul uw trefwoord in...';?>">
				<input type="submit" name="search-button" value="Zoeken">
			</form>
			<?php
				if (isset($msg) && $msg != ''){
					echo '<p>'.$msg.'</p>';
				}
			?>
		</section>
	</body>
</html>