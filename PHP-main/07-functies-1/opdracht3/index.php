<?php

    include_once 'lib/menu.php';


	function compare($a, $b) {
		if ($a['order'] == $b['order']) {
			return 0;
		}
		return ($a['order'] < $b['order']) ? -1 : 1;
	};

	uasort($menu, "compare");

    echo '<nav> <ul>';
        foreach ($menu as $menuText => $menuLink){
			if($menuLink['active'] === true) {
				echo '<li><a href="'.$menuLink['href'].'">'.$menuLink['text'].'</a> </li>' ;
			} else {
				continue;
			}
	}
	echo '<nav> </ul>';

// new  lesson 7 divider line [so I don't screw up by deleting old things]

function makeMenu(array $menu) {
	
}




?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>5.4</title>
        <script defer src="https://kit.fontawesome.com/e9b552d600.js" crossorigin="anonymous"></script>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            nav {
				height: 60px;
				font-size: 1.2em;
			}
			nav ul {
				margin: 0;
				padding: 0;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}
			nav ul li {
				list-style-type: none;
				width: 100%;
				border: 2px solid black;
				line-height: 56px;
				text-align: center;
				box-sizing: border-box;
				background-color: sandybrown;
			}
			nav ul li a {
				color: seashell;
				display: block;
				text-decoration: none;
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
