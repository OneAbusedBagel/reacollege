<?php

    $subject = 'MySQL';


    $language = match ($subject) {
        'HTML' => 'html is a language for coding',
        'CSS' => 'CSS is.. also a coding language',
        'PHP' => 'PHP is.. php, there ya go',
        'MySQL', 'SEO', 'javascript' => 'In aanbouw...',
        'React', 'Laravel' => 'Gepland voor later',
        default => 'this is default',
    };
    
    echo '<h2>' .$subject. '</h2>';
    echo $language;
    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.5</title>
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
