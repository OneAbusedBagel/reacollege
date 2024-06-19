<?php
// Hier worden alle variabelen gedefinieerd.
    $A = 8;
    $B = -2;
    $C = 5.5;
?>

<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title>Opdracht 01-2</title>
		<meta name="description" content="numbers...">
        <link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<section>
			<h1>all the math and numbers</h1>
			<p>
                <?php 
                echo $A.' + '.$B.' = <span>'.($A + $B).'</span>';
                echo'<br>';
                echo $A.' - '.$C.' = <span>'.($A - $C).'</span>';
                echo'<br>';
                echo $C.' * '.$B.' = <span>'.($C * $B).'</span>';
                echo'<br>';
                echo $B.' + '.$B.' = <span>'.($B + $B).'</span>';
                echo'<br>';
                echo '('.$A.' - '.$B.') * '.$C.' = <span>'.(($A - $B) * $C).'</span>';
                ?>
            </p>
		</section>
	</body>
</html>
