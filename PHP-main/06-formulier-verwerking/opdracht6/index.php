<?php



?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 6-6</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            form {
                width: 400px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
            }
            form * {
                margin: 0px 20px 0px 20px;
            }
            .line {
                width: 100%;
                border: 2px brown solid;
                padding: 0px;
                margin: 0px;
            }
            label {
                padding-top: 20px;
            }
            input, textarea, select {
                border: black solid 2px;
                background-color: lightgray;
            }
        </style>
	</head>
    <body>
        <h1>Oh look! a convenient form..</h1>
        <form action="resultaat.php" method="post">
            <label for="title">title</label>
            <input type="text" name="title">

            <label for="description">description</label> 
            <input type="text" name="description">

            <label for="header">header</label>
            <input type="text" name="header">

            <label for="paragraph">paragraph</label> 
            <textarea name="paragraph" cols="30" rows="10"></textarea>
            <!-- this needed to be a text area, but you (future me) can probably just read the value of this -->

            <label for="hyperlink">Hyperlink</label>
            <input type="text" name="hyperlink">

            <br>
            <br>
            <!-- this is going to be that seperation line fomrs love to have -->
            <div class="line" ></div>
            <br>
            <br>

            <label for="bg_color">Background color</label>
            <input type="color" name="bg_color">

            <label for="text_color">Text color</label>
            <input type="color" name="text_color">

            <label for="txt_size">text size</label>
            <input type="number" name="txt_size" min="10" max="20">

            <label for="font">font:</label> 
            <select name="font">
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Monaco">Monaco</option>
                <option value="Papyrus">PAPYRUS</option>
                <option value="wingdings">wingdings</option>
            </select>
        
            <label for="border">border
                <input type="checkbox" name="border" value="yes">
            </label>
            <br>
            <input type="submit" name="submit" value="submit">
        </form>
        <section>
            
        </section>
    </body>
</html>