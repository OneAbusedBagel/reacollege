<?php



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
        <form action="verwerking.php" method="post">
            <label for="titel">titel</label> <br>
            <input type="text" name="titel">
            <br>
            <label for="description">description</label> <br>
            <input type="text" name="description">
            <br>
            <label for="header">header</label> <br>
            <input type="text" name="header">
            <br>
            <label for="paragraph">paragraph</label> <br>
            <textarea name="paragraph" cols="30" rows="10"></textarea>
            <!-- this needed to be a text area, but you (future me) can probably just read the value of this -->
            <br>
            <label for="hyperlink">Hyperlink</label> <br>
            <input type="text" name="hyperlink">
            <br>
            <br>
            <!-- this is going to be that seperation line fomrs love to have -->
            <div class="line" ></div>

            
            <input type="submit" name="submit" value="submit">
        </form>
        <section>
            
        </section>
    </body>
</html>