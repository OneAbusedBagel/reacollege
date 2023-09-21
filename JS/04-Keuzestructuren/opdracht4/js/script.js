
var language = prompt(`maak een keuze tussen “nl”, “en”, “de” en “es”.`, `en`);

switch (language) {
	case "nl":
		alert("Welkom");
		break;
	case "en":
		alert("Welcome");
		break;
	case "de":
		alert("Willkommen");
		break;
	case "es":
		alert("Bienvenida");
		break;
	default:
		alert("Geen taal gekozen..");
		break;
};

