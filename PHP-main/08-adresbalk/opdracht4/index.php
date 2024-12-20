<?php 
	require('lib/array.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>PlayStation 4</title>
		<link rel="stylesheet" href="css/stylesheet.css">
		<script src="https://use.fontawesome.com/a1d6f5445a.js"></script>
	</head>
	<body>
		<div id="container">
			<header>
				<ol class="breadcrumbs">
					<li>
						<a href="http://www.webshop.com"><span content="Home"><i class="fa fa-home"></i></span></a> >
					</li>					
					<li>
						<a href="http://www.webshop.com/muziek-film-games"><span>Muziek, Film & Games</span></a> >
					</li>
					<li>
						<a href="http://www.webshop.com/games"><span>Games</span></a> >
					</li>
					<li>
						<span>PlayStation 4</span>
					</li>
				</ol>			
			</header>
			<main>
				<section>
					<h1>Videogames - PlayStation 4</h1>
					<p>
						Er is een groot aanbod in PlayStation 4 games. Elke game is divers en heeft unieke eigenschappen. Bedenk dus goed in wat voor game jij geïnteresseerd bent. In ons assortiment vind je games in verschillende genres van sport tot actie en van simulatie tot Role Playing Game (RPG). Exclusieve games voor de PlayStation 4 zijn Horizon Zero Dawn, Uncharted, Gran Turismo, InFamous, Killzone.
					</p>
				</section>
				<section>
					<form action="">
						<label for="amount">amount of products shown</label>
						<select id="amount" name="amount">
							<option value="2">2</option>
							<option value="4">4</option>
							<option value="6">6</option>
							<option value="8">8</option>
						</select>

						<input type="radio" name="sort" id="descending" value="descending">
						<label for="descending">sort descending</label> 
						<input type="radio" name="sort" id="ascending" value="ascending">
						<label for="ascending">sort ascending</label> 

						<br>
						<input type="submit" name="submit" value="submit">
					</form>
				</section>
				<?=makeCatalogue($products);?>
				<!-- <?= $_GET['amount'];?>
				<?= $_GET['sort'];?> -->
				<!-- <section id="products">
					<article>
						<span class="release">26-10-2018</span>
						<img src="images/9200000067180307.jpg" alt="Red Dead Redemption 2 - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Red Dead Redemption 2</span>
						<span class="price">€ 59.99</span>
					</article>				
					<article>
						<span class="release">23-03-2018</span>
						<img src="images/9200000053083967.jpg" alt="Ni No Kuni II: Revenant Kingdom - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Ni No Kuni II: Revenant Kingdom</span>
						<span class="price">€ 49.99</span>
					</article>
					<article>
						<span class="release">31-12-2018</span>
						<img src="images/9200000082972427.jpg" alt="Biomutant - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Biomutant</span>
						<span class="price">€ 49.99</span>
					</article>					
					<article>
						<span class="release">27-03-2018</span>
						<img src="images/9200000078668488.jpg" alt="Far Cry 5 - Deluxe Edition - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Far Cry 5 - Deluxe Edition</span>
						<span class="price">€ 59.99</span>
					</article>
					<article>
						<span class="release">30-03-2018</span>
						<img src="images/9200000084844101.jpg" alt="The Lost Child - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">The Lost Child</span>
						<span class="price"><del>€ 59.99</del> € 49.99</span>
					</article>					
					<article>
						<span class="release">29-03-2018</span>
						<img src="images/9200000090287767.jpg" alt="Injustice 2 - Legendary Edition - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Injustice 2 - Legendary Edition</span>
						<span class="price">€ 59.99</span>
					</article>
					<article>
						<span class="release">25-05-2018</span>
						<img src="images/9200000088311502.jpg" alt="Dark Souls Remastered - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Dark Souls Remastered</span>
						<span class="price"><del>€ 49.99</del> € 39.99</span>
					</article>								
					<article>
						<span class="release">30-03-2018</span>
						<img src="images/9200000088397115.jpg" alt="Attack on Titan 2 - A.O.T. 2 - PS4" width="168" height="210">
						<span class="console">PlayStation 4</span>
						<span class="name">Attack on Titan 2 - A.O.T. 2</span>
						<span class="price">€ 59.99</span>
					</article>					
				</section> -->
			</main>
		</div>
		<footer></footer>		
	</body>
</html>