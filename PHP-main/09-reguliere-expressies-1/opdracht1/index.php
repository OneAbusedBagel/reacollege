<?php
    function verifyEndMArk($string) {
        $pattern = '/(\?|\.|\!)$/';
        if (preg_match($pattern, $string)) {
            return 'true! ends with one of the three special thingies';
        } else {
            return 'not true, false even. doesn\'t end with one of the three specific special characters';
        };
    };
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>9.1</title>
	</head>
	<body>
        <?= verifyEndMArk('Bevat deze zin een vraagteken?');?>
        <br>
        <?= verifyEndMArk('Deze zin bevat geen vraagteken');?>
	</body>
</html>