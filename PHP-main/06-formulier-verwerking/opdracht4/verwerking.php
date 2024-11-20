
<?php 
// checks, sanitizes and sets the form values as variables.
// though I don't think I need to sanitize a select value but hey, symmetry
if (isset($_POST['submit'])){
    $errors = [];
    if (!empty($_POST['firstname'])){
        $firstname = htmlspecialchars($_POST['firstname']);
    }
    if (!empty($_POST['gender'])){
        $gender = htmlspecialchars($_POST['gender']);
    }
    if (!empty($_POST['residence'])){
        $residence = htmlspecialchars($_POST['residence']);
    }
    if (!empty($_POST['postcode'])){
        $postcode = htmlspecialchars($_POST['postcode']);
    }
    if (!empty($_POST['province'])){
      $province = htmlspecialchars($_POST['province']);
  } 
  else {
    //  forced redirect to index.php
    header("location: index.php");
    exit;
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
    <td><?= $firstname ?? ' <em> onbekend </em>'; ?></td>
  </tr>
  <tr>
    <td>Gender</td>
    <td><?= $gender ?? ' <em> onbekend </em>'; ?></td>
  </tr>
  <tr>
    <td>Residence</td>
    <td><?= $residence ?? ' <em> onbekend </em>'; ?></td>
  </tr>
  <tr>
    <td>Postcode</td>
    <td><?= $postcode ?? ' <em> onbekend </em>'; ?></td>
  </tr>
  <tr>
    <td>province</td>
    <td><?= $province ?? ' <em> onbekend </em>'; ?></td>
  </tr>
</table>
    </body>
</html>