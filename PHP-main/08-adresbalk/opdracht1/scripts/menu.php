<?php
	$mainMenu = array(
		array('href' => 'the-joker.php', 'title' => 'The Joker', 'active' => true),
		array('href' => 'the-penguin.php', 'title' => 'The Penguin', 'active' => true),
		array('href' => 'the-riddler.php', 'title' => 'The Riddler', 'active' => true),
		array('href' => 'mr-freeze.php', 'title' => 'Mr. Freeze', 'active' => true),
		array('href' => 'the-scarecrow.php', 'title' => 'The Scarecrow', 'active' => true),
		array('href' => 'poison-ivy.php', 'title' => 'Poison Ivy', 'active' => true),
		array('href' => 'ras-al-ghul.php', 'title' => 'Ra\'s al Ghul', 'active' => true),
		array('href' => 'bane.php', 'title' => 'Bane', 'active' => false)
	);
?>
<nav>
	<ul>
	<?php
		$name = $_SERVER['SCRIPT_NAME'];
		echo $name;

		foreach ($mainMenu as $menuItem){
			if($menuItem['active'] === true) {
				echo '<li><a href="'.$menuItem['href'].'" target="_self">'.$menuItem['title'].'</a></li>';
			// } elseif ($name = $menuItem['title']) {
				// maybe use the string search thing to get rid of anything but the last bit. and then match that.
			} {
				continue;
			}
		};
	?>
	</ul>
</nav>