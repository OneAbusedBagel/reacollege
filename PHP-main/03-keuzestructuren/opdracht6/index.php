<?php
// random temperature generated from -10 to 40 degrees
    $temperature = rand(-10, 40);

// rounded the temperature to steps of 5, because they wanted atleast 10 colours - and I don't know if I can use (<) or (>) in match expressions 
    $round = round($temperature/5)*5;
    // echo $round;

// giving up on the sun and snowflake for now, just gonna try and finish the exercise - 
    $snowflake = 'invis';
    $sun = 'invis';

// I've been hung up on the colors for 40 damned minutes - all the code is there, it's just the colours but I can't get my brain to focus on them
    $class = match (true) {
        $round == -10 => $class = 'blue',
        $round == -5  => $class = 'lightblue',
        // $round == 5   => $class = 'placeholder',
        $round == 10  => $class = 'purple',
        // $round == 15  => $class = 'placeholder',
        $round == 20  => $class = 'red',
        // $round == 25  => $class = 'placeholder',
        // $round == 30  => $class = 'placeholder',
        // $round == 35  => $class = 'placeholder',
        // $round == 40  => $class = 'orange',
    default => 'this is default',
    };

    $icon = match (true) {
        $round < 0 => $snowflake = 'vis',
        $round > 0  => $sun = 'vis',
    default => 'this is default',
    };

    // echo $icon   

// a while back Patrick said I can turn in an unfinished assignment aslong as the unfinished parts weren't relevant to the exercises lesson (like background colors or fonts or somehting) this is one of those cases - the code is there, the colour valuesa ren't I've spent over an hour with no progress (ON PICKING COLORS) because my brain is awful, I'm skipping it
    ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>3.6</title>
        <script defer src="https://kit.fontawesome.com/e9b552d600.js" crossorigin="anonymous"></script>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            div {
                width: 400px;
                margin: 10px;
                padding: 20px;
            }
            .purple {
                background-color: slateblue;
            }
            .blue {
                background-color: blue;
            }
            .lightblue {
                background-color: lightblue;
            }
            .red {
                background-color: red;
            }
            .invis {
                display: none;
            }
            .vis {
                
            }
            i {
                font-size: 90px;
            }
		</style>
	</head>
	<body>
		<div class="<?=$class?>">
            <h1> het is nu: <?=$temperature;?>°</h1>
            <section class="<?=$sun?>"><i class="fa-solid fa-sun"></i></section>
            <section class="<?=$snowflake?>"><i class="fa-solid fa-snowflake"></i></section>
        </div>
		<section>

		</section>
	</body>
</html>
