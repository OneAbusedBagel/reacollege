<?php
	error_reporting(E_ALL);
	ini_set('display_errors','on');
	
	function addFive(int $x): int {
		$x = $x + 5;
		return $x;
	}
	
	$getal = 10;
	$getalNieuw = addFive($getal);
	echo '<p>Orgineel: '.$getal.' - Nieuw: '.$getalNieuw.'</p>';
?>
