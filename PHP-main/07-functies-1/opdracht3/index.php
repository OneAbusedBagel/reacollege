<?php

    include_once 'lib/menu.php';


	// function compare($a, $b) {
	// 	if ($a['order'] == $b['order']) {
	// 		return 0;
	// 	}
	// 	return ($a['order'] < $b['order']) ? -1 : 1;
	// };

	// uasort($menu, "compare");

    // echo '<nav> <ul>';
    //     foreach ($menu as $menuText => $menuLink){
	// 		if($menuLink['active'] === true) {
	// 			echo '<li><a href="'.$menuLink['href'].'">'.$menuLink['text'].'</a> </li>' ;
	// 		} else {
	// 			continue;
	// 		}
	// }
	// echo '<nav> </ul>';

// new  lesson 7 divider line [so I don't screw up by deleting old useful things]

function makeMenu(array $menu){
	function compare($a, $b) {
		if ($a['order'] == $b['order']) {
			return 0;
		}
		return ($a['order'] < $b['order']) ? -1 : 1;
	};

	uasort($menu, "compare");

	// I thought this exercise would be harder than expected- then I realised it was easy- then it got hard again and I've been stuck here all day
        foreach ($menu as $menuText => $menuLink){
			if($menuLink['active'] === true) {
				$currentItem = '<li><a href="'.$menuLink['href'].'">'.$menuLink['text'].'</a> </li>' ;

				// I have no idea how this is both the solution that works- and the thing that's causing problems. declaring it with an empty string doens't work anymore then for some reason
				$row .= $currentItem ;
			} else {
				continue;
			}
	}
	// $fullRow = 
	$fullMenu = '<nav> <ul>' .$row.  '</nav> </ul>';
	
	// return $row;
	return $fullMenu;

}

echo makeMenu($menu);


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
			
        </header>
		<section>

		</section>
	</body>
</html>
