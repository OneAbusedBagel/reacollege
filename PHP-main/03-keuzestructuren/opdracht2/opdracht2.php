<?php

// trying to set the date so I can test if my if statements work - but I don't know how to make it consistent so I'm continuing without it.
	// $date = new DateTimeImmutable();
	// $newDate = $date->setDate(2001, 2, 17);
	// echo $newDate->format('d-m-Y');

    $datum = date('d-m-Y');
    $dayOfWeek = date('D');
	// could also use date('N') for numbers and then < 5 at the if statement - but instructions specify use of ||
    $dayOfMonth = date('j');
    $month = date('n');

    // echo '-',$datum;
	// echo $dayOfWeek;
	// echo $dayOfMonth;
	// echo $month;

    if($dayOfWeek == ($dayOfWeek == 'Mon'|| $dayOfWeek == 'Tue'|| $dayOfWeek == 'Wed'|| $dayOfWeek == 'Thu'|| $dayOfWeek == 'Fri')) {
        echo 'Het is een werkdag!';
    };
    if($dayOfWeek == 'Fri' && $dayOfMonth == 13) {
        echo 'Het is vrijdag de 13de!!';
    };
	if($dayOfWeek == 'Fri' && $dayOfMonth == 13) {
        echo 'Het is vrijdag de 13de!!';
    };
	if($dayOfMonth == 6 && $month == 7){
		echo '<img src="https://codecrashers.nl/img/php/keuzestructuren/opdracht-2.3.png" alt="birthday cake">';
	};
	if($dayOfMonth == 24 && $month == 12){
		echo '<img src="https://thumbs.dreamstime.com/z/het-gelukkige-karakter-van-de-kerstboom-27088774.jpg" alt="horrifying giant christmas tree">';
	};
	if($dayOfMonth == 3 && $month == 5 && $dayOfWeek == 'Sun'){
		echo '<video width="400" controls> <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"> </video>';
	};

    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.2</title>
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
			<h2> <?=$datum;?> </h2>
        </header>
		<section>

		</section>
	</body>
</html>
