<?php

    $i = 0;

    $months = [
        'January',
        'february',
        'March',
        'April',
        'Mei',
        'June',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'December',
    ];
    echo '<ul>' ;
    for ($i = 0; $i < count($months); $i++ ) {
        if($i < 2 || $i > 10) {
            continue;
        };
        echo '<li>';
        echo $months[$i];
        echo '</li>';
    };
    echo '</ul>';


    echo '<ul>' ;
    for ($i = 8; $i < count($months) && $i > 0; $i-- ) {
        if($i < 4) {
            continue;
        };
        echo '<li>';
        echo $months[$i];
        echo '</li>';
    };
    echo '</ul>';

    // do {
    //     $i++;

    //     $modulus_7 = $i % 7;
    //     $modulus_4 = $i % 4;
    //     $class = null;

    //     if($modulus_4 === 0) {
    //         $class = 'class="modulus_four"';
    //     };
    //     if($modulus_7 === 0) {
    //         echo '<span '.$class.'>' .$i. ' -  en deelbaar door 7 </span> <br>';
    //     } else {
    //         echo '<span '.$class.'>' .$i. '</span> <br>';
    //     };
    // } while ($i < 100);

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>4.5</title>
        <script defer src="https://kit.fontawesome.com/e9b552d600.js" crossorigin="anonymous"></script>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            .modulus_four {
                color: green;
            }
		</style>
	</head>
	<body>
        <header>
            <!-- <pre> <?=print_r($placeholder)?> </pre> -->
        </header>
		<section>

		</section>
	</body>
</html>
