<?php
date_default_timezone_set('America/Curacao');

	$datum = date('d-m-Y');
	$tijd = date('H:i:s');
	$time_test = date_default_timezone_get();
	$month = date('F');
	$week = date('W');
	$day = date('t');
	$am_pm = date('A');
	$GMT_offset = date('p');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Datum & Tijd</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
		</style>
	</head>
	<body>
		<header>
			<p> current default timezone is: <?=$time_test;?></p>
		</header>
		<span>---</span>
		<section>
			<p>Het is nu <?=$tijd;?> op <?=$datum;?>.</p>
			<p>weeknumber is: <?=$week;?></p>
			<p>days in current month (<?=$month;?>): <?=$day;?></p>
			<p>am or pm?: <?=$am_pm;?></p>
			<p>current timezone offset: <?=$GMT_offset;?></p>
			<p>seconds since unix epoch: <?=time()?></p>
		</section>
	</body>
</html>