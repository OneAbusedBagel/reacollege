<?php
    if (isset($_POST['verzenden'])){
        $errors = [];
        if (!empty($_POST['naam'])){
            $naam = $_POST['naam'];
        } else {
            $errors[] = "you didn't give us a naam!";
        }
        if (!empty($_POST['email'])){
            $email = $_POST['email'];
        } else {
            $errors[] = "you didn't give us a email!";
        }
        if (!empty($_POST['staat'])){
			$staat = $_POST['staat'];
        } else {
			$errors[] = "you didn't give us a staat!";
        }
		if (!empty($_POST['kinderen'])){
			$_POST['kinderen'] > 0 ? $kinderen = $_POST['kinderen'] :  $errors[] = "not a valid childnieuwsbrief value";
		} else {
			$errors[] = "you didn't give us an age!";
		}
        if (!empty($_POST['nieuwsbrief'])){
            $nieuwsbrief = $_POST['nieuwsbrief'];
        } else {
            $errors[] = "You don't want a newsletter?";
        }
    }

?>
<!DOCTYPE html>
<html lang="nl-NL">
	<head>
		<meta charset="utf-8">
		<title>Registratieformulier</title>
		<link rel="stylesheet" href="css/stylesheet.css">
	</head>
	<body>
		<div id="container">
			<form action="index.php" method="post">
				<div class="form-row">
					<label for="naam">Naam:</label>
					<input type="text" name="naam" id="naam" required>
				</div>
				<div class="form-row">
					<label for="email">E-mail:</label>
					<input type="email" name="email" id="email" required>
				</div>
				<div class="form-row">
					<label for="staat">Burgerlijke staat:</label>
					<select name="staat" id="staat">
						<option>Ongehuwd</option>
						<option>Gehuwd</option>
						<option>Gescheiden</option>
						<option>Verweduwd</option>
					</select>
				</div>				
				<div class="form-row">
					<label for="kinderen">Aantal kinderen:</label>
					<input type="number" name="kinderen" id="kinderen" value="0" min="0">
				</div>
				<div class="form-row">
					<label for="nationaliteit">Nationaliteit:</label>
					<select name="nationaliteit" id="nationaliteit">
						<option>Nederlandse</option>
						<option>Belgische</option>
						<option>Duitse</option>
						<option>anders...</option>
					</select>
				</div>
				<div class="form-row">
					<label for="nieuwsbrief">
						<input type="checkbox" name="nieuwsbrief" id="nieuwsbrief" value="ja"> Ik wil mij abonneren op de nieuwsbrief
					</label>
					<input type="submit" name="verzenden" value="Verzenden">
				</div>
				<div class="form-row">
					<span>verplicht om in te vullen.</span>
				</div>
				<section>
					TESTING PHP
				<?php
                if (isset($_POST['verzenden']) && count($errors) > 0){
                    foreach ($errors as $error){
                        echo '<p class="red">'.$error.'</p>';
                    }
                } else {
                    if (isset($naam)){
                        echo '<p>Your firstname: '.$naam.'</p>';
                    }
                    if (isset($email)){
                        echo '<p>Your lastname: '.$email.'</p>';
                    }
                    if (isset($staat)){
						echo '<p>Your birthdate: '.$staat.'</p>';
                    }
					if (isset($kinderen)){
						echo '<p>Your age: '.$kinderen.'</p>';
					}
                    if (isset($color)){
                        echo '<p>Your color: '.$color.'</p>';
                    }
                }

            ?>
				</section>
			</form>
		</div>
	</body>
</html>