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
        <form action="verwerking.php" method="post">
            <label for="firstname">firstname</label> <br>
            <input type="text" name="firstname" placeholder="joe">
            <br>
            <input type="radio" name="gender" value="male">
            <label for="male">male</label>
            <input type="radio" name="gender" value="female">
            <label for="female">female</label>
            <input type="radio" name="gender" value="other">
            <label for="other">other</label>
            <br>
            <label for="residence">residence</label> <br>
            <input type="text" name="residence" placeholder="Jan Van Boendelaan 21">
            <br>
            <label for="postcode">postcode</label> <br>
            <input type="text" name="postcode" placeholder="1111 AA">
            <br>
            <br>
            <select name="province">
                <!-- this wasy, there's a default value of no text that still results in een 'onbekend' result -->
                <option selected value="">Province:</option>
                <option value="Limburg">Limburg</option>
                <option value="Noord-brabant">Noord-brabant</option>
                <option value="Gelderland">Gelderland</option>
                <option value="Overijssel">Overijssel</option>
                <option value="Utrecht">Utrecht</option>
                <option value="Noord-Holland">Noord-Holland</option>
                <option value="Zuid-Holland">Zuid-Holland</option>
                <option value="Zeeland">Zeeland</option>
                <option value="Groningen">Groningen</option>
                <option value="Friesland">Friesland</option>
                <option value="Drenthe">Drenthe</option>
                <option value="Flevoland">Flevoland</option>
            </select>
            <br>
            <br>
            <input type="submit" name="submit" value="Send form">
            <input type="reset" value="Clear text">
        </form>
        <section>
            
        </section>
    </body>
</html>