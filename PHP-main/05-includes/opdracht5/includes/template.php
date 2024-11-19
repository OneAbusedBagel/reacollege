<!-- index.php -->
<?php
	require('includes/settings.php');
    require('includes/template.php');
?>
<!DOCTYPE html>
<html lang="<?=$language;?>">
	<head>
		<title>Includes</title>
		<style>
            <?=$styling;?>
		</style>
	</head>
	<body>
		<section>
			<?=$content;?>
		</section>
	</body>
</html>