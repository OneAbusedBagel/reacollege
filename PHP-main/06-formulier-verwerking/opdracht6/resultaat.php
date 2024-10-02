<?php

if (isset($_POST['submit'])) {
    $errors = [];
    if (!empty($_POST['title'])) {
        $title = htmlspecialchars($_POST['title']);
    }
    if (!empty($_POST['description'])) {
        $description = htmlspecialchars($_POST['description']);
    }
    if (!empty($_POST['header'])) {
        $header = htmlspecialchars($_POST['header']);
    }
    if (!empty($_POST['paragraph'])) {
        $paragraph = htmlspecialchars($_POST['paragraph']);
    }
    if (!empty($_POST['hyperlink'])) {
        $hyperlink = htmlspecialchars($_POST['hyperlink']);
    }

    // temporary divider line for readability

    if (!empty($_POST['bg_color'])) {
        $bg_color = htmlspecialchars($_POST['bg_color']);
    }
    if (!empty($_POST['text_color'])) {
        $text_color = htmlspecialchars($_POST['text_color']);
    }
    if (!empty($_POST['txt_size'])) {
        $txt_size = htmlspecialchars($_POST['txt_size']);
    }
    if (!empty($_POST['font'])) {
        $font = htmlspecialchars($_POST['font']);
    }
    if (!empty($_POST['border'])) {
        $border = 'black 2px solid';
    }

}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title><?= $title; ?></title>
        <meta name="description" content="<?= $description; ?>">
		<meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            html, body {
				font-family: <?= $font ?? 'Arial' ?>;
				font-size:<?= $txt_size ?? '24px' ?>;
				color: <?= $text_color ?? 'brown' ?>;
				background-color: <?= $bg_color ?? 'orange' ?>;
			}
            img {
                border: <?= $border ?? '' ?>;
            }
        </style>
	</head>
    <body>
        <h1> <?= $header; ?></h1>
        <p><?= $paragraph; ?></p>
        <img src="<?= $hyperlink; ?>" alt="if ur reading this- the img link didn't work. Not because of me! you just don't know how to send an img link">
    </body>
</html>
