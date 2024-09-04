<!DOCTYPE html>
<html>
	<head>
		<title>Beren</title>
		<link type="text/css" rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<div id="container">
			<div id="header">
			
			</div>
			<div id="menu">
				<ul>
					<li><a href="index.php">Home</a></li>
					<li><a href="koala.php">Koala</a></li>
					<li><a href="grizzlybeer.php">Grizzlyber</a></li>
					<li><a href="ijsbeer.php">IJsbeer</a></li>
				</ul>
			</div>
			<div id="content">
				<h1>Hallo!</h1>
				<p>
					Mijn naam is Nel de Beer.<br><br>
					Ik zit groep 7 van de basisschool "De Koalavrienden" en wil een spreekbeurt houden over beren.
					Daarom heb ik deze mooie website gemaakt, met hulp van mijn opa Henk de Beer.
				</p>
				<img src="images/grizzly.jpg" width="400">
			</div>
			<div id="footer">
				<span><?php echo $_SERVER["REMOTE_ADDR"];?></span>
			</div>		
		</div>
	</body>
</html>