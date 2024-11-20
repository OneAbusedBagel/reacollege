<?php


    if(isset($_GET['lang'])) {
        $lang = $_GET['lang'];
    } else {
        $lang = 'nl';
    };

    switch ($lang){
        case 'nl':
            $msg = 'Hallo wereld!';
            break;
        case 'en':
            $msg = 'Hello world!';
            break;
        case 'du':
            $msg = 'Hallo Welt!';
            break;
        case 'fr':
            $msg = 'Bonjour le monde';
            break;
        case 'sp':
            $msg = 'Hola Mundo!';
            break;
        default: $msg = 'HAllo wereld';
    };

?>
<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<title>8.3</title>
		<link rel="stylesheet" href="styles/stylesheet.css">
        <style>
            body {
                background-color: cadetblue;
            }
            #container {
                margin: 0 auto;
                max-width: 800px;
                background-color: darkcyan;
                border: 5px groove gray;
                padding: 20px;
            }
            #flags a {
                display: block;
                height: 11px;
                width: 16px;
                background-image: url(flags.png);
            }
            #flag-NL {
                background-position: -80px -110px;
            }
            #flag-GB {
                background-position: -176px -44px;
            }
            #flag-ES {
                background-position: -16px -44px;
            }
            #flag-FR {
                background-position: -144px -44px;
            }
            #flag-DE {
                background-position: -80px -33px;
            }
        </style>
	</head>
	<body>
        <div id="container">
            <p><?=$msg;?></p>
            <section id="flags">
                <a id="flag-NL" href="index.php?lang=nl"></a>
                <br />
                <a id="flag-GB" href="index.php?lang=en"></a>
                <br />
                <a id="flag-ES" href="index.php?lang=sp"></a>
                <br />
                <a id="flag-FR" href="index.php?lang=fr"></a>
                <br />
                <a id="flag-DE" href="index.php?lang=du"></a>
                <br />
            </section>
        </div>

	</body>
</html>