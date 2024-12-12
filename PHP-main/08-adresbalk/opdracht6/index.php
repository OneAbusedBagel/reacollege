<?php
    // so I don't need a form for there to be a GET to read- now how do I 'make' a GET so I can assign it things?
    $currentPage = htmlspecialchars($_GET["page"]);
    // now how to turn this into the rest??
    include_once 'scripts/menu.php';
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Batman Villains - <?=$title?></title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<div id="container">
            <header>
				<span> Batman Villains</span>
			</header>
				<nav>
					<ul>
						<?=$navMenu?>
					</ul>
				</nav>
			<main>
				<section>
					<img src="<?=$imgCover;?>">
				</section>
				<section>
                    <?=$backstory;?>
				</section>
				<section>
					<img src="<?=$imgActor?>">
				</section>				
			</main>
			<footer>
			</footer>
		</div>
	</body>
</html>