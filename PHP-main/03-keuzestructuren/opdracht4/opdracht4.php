<?php

    $subject = 'MySQL';

    echo '<h2>' .$subject. '</h2>';

    switch ($subject) {
        case 'HTML':
            echo 'html is a language for coding ';
            break;
        case 'CSS':
            echo 'CSS is.. also a coding language';
            break;
        case 'PHP':
            echo 'PHP is.. php, there ya go';
            break;
        case 'MySQL':
        case 'SEO':
        case 'javascript':
            echo 'In aanbouw...';
            break;
        case 'React':
        case 'Laravel':
            echo 'Gepland voor later';
            break;  
    };

    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.4</title>
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
            <!-- <h2> <?=$subject?> </h2> -->
        </header>
		<section>

		</section>
	</body>
</html>
