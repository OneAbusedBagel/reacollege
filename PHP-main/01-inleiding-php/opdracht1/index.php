<?php
// Hier worden alle variabelen gedefinieerd.
    $title = 'titel text here';
    $description = 'descripton text here';
    $heading = 'the heading text';
    $paragraph = 'the paragraph text';
?>
<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title><?=$title; ?></title>
		<meta name="description" content="<?=$description; ?>">
	</head>
	<body>
		<section>
			<h1> <?=$heading; ?> </h1>
			<p> <?=$paragraph; ?> </p>
		</section>
	</body>
</html>

