<?php
// random temperature generated from -10 to 40 degrees
    $temperature = rand(-10, 40);
    // $temperature = 0;

// rounded the temperature to steps of 5, because they wanted atleast 10 colours - and I don't know if I can use (<) or (>) in match expressions 
    $round = round($temperature/5)*5;
    // echo $round;

// giving up on the sun and snowflake for now, just gonna try and finish the exercise - 
    $snowflake = 'invis';
    $sun = 'invis';

// I've been hung up on the colors for 40 damned minutes - all the code is there, it's just the colours but I can't get my brain to focus on them
//  -- this is me while correcting this exercises mistakes per Patricks feedback, one of them being: "Vul alle 'placeholders' ook in met een kleur" and my answer to that is simply. no. not unless you want me to waste another two days stuck here. I already mentioned how I got stuck on very simple parts of exercises, because for some reason my brain just struggles focusing or well- thinking about anything usefull even when I try. I don't know why, but trying to pick a colour for each on my own would make too much of a mess in my brain and It'd ruin several days of progress probably.
    $class = match (true) {
        $round < -5 => 'blue',
        $round <= 0  => 'lightblue',
        $round < 0   => 'red',
        $round < 5   => 'purple',
        $round < 10  => 'grey',
        $round < 15  => 'red',
        $round < 20  => 'crimson',
        $round < 25  => 'green',
        $round < 30  => 'gray',
        $round < 35  => 'lime',
        $round <= 40  => 'darkorange',
    default => 'this is default',
    };

    $temperature <= 0 ? $icon ='snowflake' : $icon ='sun';


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
            .temperature {
                background-color: <?=$class;?>;
            }
            i {
                font-size: 90px;
            }
		</style>
	</head>
	<body>
		<div class="temperature">
            <h1> het is nu: <?=$temperature;?>°</h1>
            <section><i class="fa-solid fa-<?=$icon?>"></i></section>
        </div>
		<section>

		</section>
	</body>
</html>
