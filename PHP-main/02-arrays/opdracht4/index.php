<?php
    $countries = [
        'Servië'  => 'Belgrado',
        'Bulgarije'  => 'Sofia',
        'Roemenië'  => 'Boekarest',
        'Moldavië'  => 'Chisinau',
        'Hongarije'  => 'Boedapest',
        'Albanië'  => 'Tirana',
        'Oekraïne'  => 'Kyiv',
        'Slowakije'  => 'Bratislava'
    ];
	krsort($countries);
    // $show = print_r($countries);
	unset($countries['Moldavië']);
	unset($countries['Albanië']);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>2.4</title>
		<style>
			html, body {
				font-family: Arial, sans-serif;
				font-size: 24px;
				color: brown;
				background-color: orange;
			}
			table {
				font-family: arial, sans-serif;
				border-collapse: collapse;
				width: 100%;
			}
				td, th {
				text-align: left;
				padding: 8px;
			}
				tr:nth-child(even) {
				background-color: #dddddd;
			}
		</style>
	</head>
	<body>
		<header>
		<table>
			<tr>
				<th>Keys</th>
				<th>Value</th>
				<?php
					foreach ($countries as $key => $value){
						echo'<tr><td>'.$key. '</td> <td>' .$value. '</td></tr>';
					}; 
				?>
			</tr>
		</table>
        </header>
		<section>
		</section>
	</body>
</html>