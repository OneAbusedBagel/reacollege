document.getElementById("leeftijd").onchange = function() {
	var age = leeftijd.value

	console.log(age)

	if (age < 14) {
		alert("Je bent te jong voor deze website")
	} else if (age > 13 && age < 17) {
		alert("Je mag deze website alleen bekijken met een voogd.")
	} else {
		alert("Welkom op deze website!")
	}

	console.log(age)

		alert(age);
};