<?php
	$katanas = [
		'katana-181' => ['Name'=>'Katana', 'Description'=>'Samurai sword that randomly inflicts stun.', 'Price'=>'70 GP', 'Strength'=>10, 'Elemental properties'=>'none', 'Status ailments'=>'stun (25%)'],
		'katana-182' => ['Name'=>'Kotetsu', 'Description'=>'Samurai sword that randomly inflicts blind.', 'Price'=>'300 GP', 'Strength'=>20, 'Elemental properties'=>'none', 'Status ailments'=>'blind (25%)'],
		'katana-183' => ['Name'=>'Asura', 'Description'=>'Samurai sword that randomly inflicts silence.', 'Price'=>'920 GP', 'Strength'=>40, 'Elemental properties'=>'none', 'Status ailments'=>'silence (25%)'],
		'katana-643' => ['Name'=>'Osafune', 'Description'=>'Samurai sword that randomly decreases enemy magic', 'Price'=>'1350 GP', 'Strength'=>50, 'Elemental properties'=>'none', 'Status ailments'=>'mag brk (25%)'],
		'katana-596' => ['Name'=>'Kiyomori', 'Description'=>'Earthly samurai sword that randomly inflicts slow.', 'Price'=>'n/a', 'Strength'=>60, 'Elemental properties'=>'earth', 'Status ailments'=>'slow (25%)'],
		'katana-184' => ['Name'=>'Muramasa', 'Description'=>'Samurai sword that randomly inflicts confuse.', 'Price'=>'2100 GP', 'Strength'=>80, 'Elemental properties'=>'none', 'Status ailments'=>'confuse (10%)'],
		'katana-606' => ['Name'=>'Stunner', 'Description'=>'Samurai sword that often inflicts stun.', 'Price'=>'n/a', 'Strength'=>90, 'Elemental properties'=>'none', 'Status ailments'=>'stun (50%)'],
		'katana-597' => ['Name'=>'Kokuei', 'Description'=>'Dark samurai sword that randomly inflicts berserk.', 'Price'=>'n/a', 'Strength'=>105, 'Elemental properties'=>'dark', 'Status ailments'=>'berserk (10%)'],
		'katana-644' => ['Name'=>'kazekiri', 'Description'=>'Aerial samurai sword that randomly inflicts sleep.', 'Price'=>'9900 GP', 'Strength'=>120, 'Elemental properties'=>'wind', 'Status ailments'=>'sleep (25%)'],
		'katana-608' => ['Name'=>'Chirijiraden', 'Description'=>'Ice-elemental katana that belongs to TEC.', 'Price'=>'n/a', 'Strength'=>200, 'Elemental properties'=>'ice', 'Status ailments'=>'none'],
		'katana-185' => ['Name'=>'Murasame', 'Description'=>'Samurai sword that randomly decreases enemy strength.', 'Price'=>'12000 GP', 'Strength'=>175, 'Elemental properties'=>'none', 'Status ailments'=>'pwr brk (25%)'],
		'katana-600' => ['Name'=>'Fantomu', 'Description'=>'Ghastly samurai sword that randomly decreases enemy defense.', 'Price'=>'n/a', 'Strength'=>215, 'Elemental properties'=>'ghost', 'Status ailments'=>'def brk (25%)'],
		'katana-186' => ['Name'=>'Shockblade', 'Description'=>'Samurai sword that randomly inflicts paralyze.', 'Price'=>'30000 GP', 'Strength'=>300, 'Elemental properties'=>'none', 'Status ailments'=>'paralyze (10%)'],
		'katana-187' => ['Name'=>'Defender', 'Description'=>'Samurai sword that increases your own defense.', 'Price'=>'60000 GP', 'Strength'=>260, 'Elemental properties'=>'none', 'Status ailments'=>'none'],
		'katana-645' => ['Name'=>'Kik-ichimonji', 'Description'=>'Samurai sword that inflicts random status ailments.', 'Price'=>'50000 GP', 'Strength'=>335, 'Elemental properties'=>'none', 'Status ailments'=>'poison (25%), blind (25%), silence (25%), berserk (25%), confuse (25%)'],
		'katana-599' => ['Name'=>'Masamune', 'Description'=>'The king of all samurai swords.', 'Price'=>'n/a', 'Strength'=>480, 'Elemental properties'=>'none', 'Status ailments'=>'instant death (20%)'],
		'katana-629' => ['Name'=>'Purizumu', 'Description'=>'Multi-elemental katana that shines like a prism.', 'Price'=>'n/a', 'Strength'=>400, 'Elemental properties'=>'fire, ice, thunder, water, earth, wind', 'Status ailments'=>'none'],
    ];

	// function sorting($a, $b){
	// 	check if variable $a 'strength' is higher than $b
	// 	if($a > $b){
	// 		// if it is continue
	// 		continue
	// 	} else {
	// 		// put $b in front somehow? and then repeat that?
	// 		// that sounds like a terrible solution, but it's a start
	// 	}

	// 	// though none of this matters if I can just use a regular sort inside the uasort.
	// 	// think I'm gonna need to check the value of the nested-nested array (like exercise 5 but this time sorting it instead of echoing it)
	// };

	function compare($a, $b) {
		if ($a == $b) {
			return 0;
		}
		return ($a < $b) ? -1 : 1;
	};

	function compare($a, $b) {
		if ($a[3] == $b[3]) {
			return 0;
		}
		return ($a[3] < $b[3]) ? -1 : 1;
	};

	// shuffle($katanas);
	// arsort($katanas);
	uasort($katanas, "compare");

    foreach ($katanas as $id => $types){
        echo '<article id="'.$id.'">';
        echo '<h2>' .$types['Name']. '</h2>';
        echo '<h3>' .$types['Description']. '</h3>';
        echo '<table>';
        echo  '<tr> <th> Price </th> <th> Elemental properties </th> </tr>';
        echo  '<tr> <td>' .$types['Price']. '</td>  <td>' .$types['Elemental properties']. '</td> </tr>';
		echo  '<tr> <th> Strength </th> <th> Status ailments </th> </tr>';
        echo  '<tr> <td>' .$types['Strength']. '</td>  <td>' .$types['Status ailments']. '</td> </tr>';
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
