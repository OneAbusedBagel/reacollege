<?php
if (isset($_POST['generate'])){
    $errors = [];
    if (!empty($_POST['table'])){
        $table = htmlspecialchars($_POST['table']);
    } else {
        $errors[] = "no table value!!";
    }
    if (!empty($_POST['length'])){
        $length = htmlspecialchars($_POST['length']);
    }else {
        $errors[] = "no length value!!";
    }
}

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>6.5</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
            .red {
                color: red;
            }
            table {
				font-family: arial, sans-serif;
                border: #dddddd 3px solid;
				border-collapse: collapse;
				width: 40px;
			}
				td, th {
                border: #dddddd 3px solid;
				text-align: left;
				padding: 8px;
			}
            td:nth-child(even) {
				background-color: #dddddd;
			}
		</style>
	</head>
	<body>
        <form action="index.php" method="post">
            <label for="table">Multiplication table of</label> <br>
            <input type="number" name="table" value="<?= $table ?? '5'?>">
            <br>
            <label for="length">Table length:</label><br>
            <input type="number" name="length" value="<?= $length ?? '10'?>">
            <br>
            <input type="submit" name="generate" value="generate">
        </form>
		<section>
            <?php

            if (isset($_POST['generate'])) {
                if(count($errors) > 0) {
                    foreach ($errors as $error) {
                        echo '<p class="red">'.$error.'</p>';
                    }
                } else {
                    echo '<table>';
                    for ($i = 1; $i <= $length; $i++) {
                        $solve = $table * $i;
                        
                    // table was modified from one long line to cascaded for ease of viewing / editing 
                        echo '<tr>' ;
                        echo    '<td>' .$i. '</td>';
                        echo    '<td> x </td> <td>' .$table. '</td>';
                        echo    '<td> = </td>' ;
                        echo    '<td>' .$solve. '</td>' ;
                        echo '</tr>';
                        
                    };
                    echo '</table >';
                }
            }

            ?>
		</section>
	</body>
</html>
