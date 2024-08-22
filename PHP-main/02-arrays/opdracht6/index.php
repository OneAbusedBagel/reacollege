<?php
	$katanas = [
		'katana-181' => ['Name'=>'Katana', 'Description'=>'Samurai sword that randomly inflicts stun.', 'Price'=>'70 GP', 'Strength'=>10, 'Elemental properties'=>'none'],
		'katana-182' => ['Name'=>'Kotetsu', 'Description'=>'Samurai sword that randomly inflicts blind.', 'Price'=>'300 GP', 'Strength'=>20, 'Elemental properties'=>'none'],
		'katana-183' => ['Name'=>'Asura', 'Description'=>'Samurai sword that randomly inflicts silence.', 'Price'=>'920 GP', 'Strength'=>40, 'Elemental properties'=>'none'],
		'katana-643' => ['Name'=>'Osafune', 'Description'=>'Samurai sword that randomly decreases enemy magic', 'Price'=>'1350 GP', 'Strength'=>50, 'Elemental properties'=>'none'],
		'katana-596' => ['Name'=>'Kiyomori', 'Description'=>'Earthly samurai sword that randomly inflicts slow.', 'Price'=>'n/a', 'Strength'=>60, 'Elemental properties'=>'earth'],
		'katana-184' => ['Name'=>'Muramasa', 'Description'=>'Samurai sword that randomly inflicts confuse.', 'Price'=>'2100 GP', 'Strength'=>80, 'Elemental properties'=>'none'],
		'katana-606' => ['Name'=>'Stunner', 'Description'=>'Samurai sword that often inflicts stun.', 'Price'=>'n/a', 'Strength'=>90, 'Elemental properties'=>'none'],
		'katana-597' => ['Name'=>'Kokuei', 'Description'=>'Dark samurai sword that randomly inflicts berserk.', 'Price'=>'n/a', 'Strength'=>105, 'Elemental properties'=>'dark'],
		'katana-644' => ['Name'=>'kazekiri', 'Description'=>'Aerial samurai sword that randomly inflicts sleep.', 'Price'=>'9900 GP', 'Strength'=>120, 'Elemental properties'=>'wind'],
		'katana-608' => ['Name'=>'Chirijiraden', 'Description'=>'Ice-elemental katana that belongs to TEC.', 'Price'=>'n/a', 'Strength'=>200, 'Elemental properties'=>'ice'],
		'katana-185' => ['Name'=>'Murasame', 'Description'=>'Samurai sword that randomly decreases enemy strength.', 'Price'=>'12000 GP', 'Strength'=>175, 'Elemental properties'=>'none'],
		'katana-600' => ['Name'=>'Fantomu', 'Description'=>'Ghastly samurai sword that randomly decreases enemy defense.', 'Price'=>'n/a', 'Strength'=>215, 'Elemental properties'=>'ghost'],
		'katana-186' => ['Name'=>'Shockblade', 'Description'=>'Samurai sword that randomly inflicts paralyze.', 'Price'=>'30000 GP', 'Strength'=>300, 'Elemental properties'=>'none'],
		'katana-187' => ['Name'=>'Defender', 'Description'=>'Samurai sword that increases your own defense.', 'Price'=>'60000 GP', 'Strength'=>260, 'Elemental properties'=>'none'],
		'katana-645' => ['Name'=>'Kik-ichimonji', 'Description'=>'Samurai sword that inflicts random status ailments.', 'Price'=>'50000 GP', 'Strength'=>335, 'Elemental properties'=>'none'],
		'katana-599' => ['Name'=>'Masamune', 'Description'=>'The king of all samurai swords.', 'Price'=>'n/a', 'Strength'=>480, 'Elemental properties'=>'none'],
		'katana-629' => ['Name'=>'Purizumu', 'Description'=>'Multi-elemental katana that shines like a prism.', 'Price'=>'n/a', 'Strength'=>400, 'Elemental properties'=>'fire, ice, thunder, water, earth, wind'],
    ];
    foreach ($katanas as $id => $types){
        echo '<article id="'.$id.'">';
        echo '<h2>' .$types['Name']. '</h2>';
        echo '<h3>' .$types['Description']. '</h3>';
        echo '<table>';
        echo  '<tr> <th> Price </th> <th> Elemental properties </th> </tr>';
        echo  '<tr> <td>' .$types['Price']. '</td>  <td>' .$types['Elemental properties']. '</td> </tr>';
        echo '</table>';
        echo '</article>';
        echo '<br>';
    };
    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>2.6</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            table {
				font-family: arial, sans-serif;
				border-collapse: collapse;
				width: 400px;
			}
				td, th {
				text-align: left;
				padding: 8px;
			}
				tr:nth-child(even) {
				background-color: #dddddd;
			}
		</style>
	</head>
	<body>
		<header>
        </header>
		<section>
            <pre>
                <?php
                    // print_r($katanas)
                ?> 
            </pre>
		</section>
	</body>
</html>