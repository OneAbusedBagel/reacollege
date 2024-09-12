<!-- index.php -->
<?php
	require('includes/settings.php');
?>
<!DOCTYPE html>
<html lang="<?=$language;?>">
	<head>
		<title>Includes</title>
		<style>
			body {
				background-color: <?=$color;?>;
			}
		</style>
	</head>
	<body>
		<section>
			<?php
				if ($language == 'nl'){
			?>
			<p>Deze website is super mooi.</p>
			<?php
				} elseif ($language == 'fr'){
			?>
			<p>Ce site est très beau .</p>
			<?php	
				}
			?>
		</section>
	</body>
</html>
