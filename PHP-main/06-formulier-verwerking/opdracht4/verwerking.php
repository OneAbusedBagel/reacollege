
<?php

// checks, sanitizes and sets the form values as variables.
if (isset($_POST['submit'])){
    $errors = [];
    if (!empty($_POST['firstname'])){
        $firstname = htmlspecialchars($_POST['firstname']);
    }
    if (!empty($_POST['gender'])){
        $gender = htmlspecialchars($_POST['gender']);
    }
    if (!empty($_POST['residence'])){
        $residence = htmlspecialchars($_post['residence']);
    }
    if (!empty($_POST['postcode'])){
        $postcode = htmlspecialchars($_POST['postcode']);
    }

}

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 6-4</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
            }
        </style>
	</head>
    <body>
    <table>
  <tr>
    <td>Firstname</td>
    <td><?php if (isset($residence)){ $residence ?? 'niet ingevuld'; }?></td>
  </tr>
  <tr>
    <td>Gender</td>
    <td><?php  if (isset($residence)){ $residence ?? 'niet ingevuld'; } ?></td>
  </tr>
  <tr>
    <td>Residence</td>
    <td><?php if (isset($residence)){ $residence ?? 'niet ingevuld'; } ?></td>
  </tr>
  <tr>
    <td>Postcode</td>
    <td><?php if (isset($color)){ $postcode ?? 'niet ingevuld'; } ?></td>
  </tr>
</table>
    </body>
</html>