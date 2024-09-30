<?php

    require('verwerking.php');

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 6-4</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
	</head>
    <body>
        <h1>Oh look! a convenient form..</h1>
        <!-- I'm aware it said to use css, but I "repurposed" some old html code and even though I haven't even added any css yet I've already wasted a 48 minutes -->
        <form action="index.php" method="post">
            <label for="firstname">firstname</label> <br>
            <input type="text" name="firstname" placeholder="joe">
            <br>
            <input type="radio" name="gender" value="male">
            <label for="male">male</label>
            <input type="radio" name="gender" value="female">
            <label for="female">female</label>
            <input type="radio" name="gender" value="other">
            <label for="other">Creature of the night</label>
            <br>
            <label for="residence">residence</label> <br>
            <input type="text" name="residence" placeholder="Jan Van Boendelaan 21">
            <br>
            <label for="postcode">postcode</label> <br>
            <input type="text" name="postcode" placeholder="1111 AA">
            <br>
            <br>
            <input type="submit" name="submit" value="Send form">
            <input type="reset" value="Clear text">
        </form>
        <section>
            
        </section>
    </body>
</html>