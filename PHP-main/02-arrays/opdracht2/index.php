<?php
    $favgames = [
        "Tom"=>"Final Fantasy VI", 
        "Johan"=>"Jazz Jackrabbit 2", 
        "Marco"=>"Clash of Clans", 
        "Casper" =>"Super Smash Bros. Melee"
    ];
    $favgames["Casper"] = "Super Smash Bros. Ultimate";
    $favgames["Gino"] = "Habbo Hotel";
    $favgames["Nancy"] = "The Sims 4";
    // var_dump($favgames);
    // $print = Print_r($favgames);
    ksort($favgames)
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>2.2</title>
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
            <pre> <?=var_dump($favgames);?></pre>
        </header>
        <span>---</span>
		<section>
		</section>
	</body>
</html>