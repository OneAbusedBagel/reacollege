<?php

	require('lib/info.php');

	['name' => $name, 'description' => $description, 'genre' => $genre, 'price' => $price, 'releaseDate' => $releaseDate, ] = $gameInfo;

	//this function should swap the two, I have no ide why it's so simple but not working.
	$price = str_replace('.', ',', $price);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Mass Effect Andromeda</title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<div id="container">
			<table>
				<tr>
					<th colspan="2"><?= $name?></th>
				</tr>
				<tr>
					<td>Omschrijving:</td>
					<td><?= $description?></td>
				</tr>
				<tr>
					<td>Genre:</td>
					<td><?= $genre?></td>
				</tr>
				<tr>
					<td>Prijs:</td>
					<td><?= '€ ' .$price?></td>
				</tr>
				<tr>
					<td>Verwacht:</td>
					<td><?= $releaseDate?></td>
				</tr>
			</table>
		</div>
	</body>
</html>