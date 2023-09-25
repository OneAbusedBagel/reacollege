
"use strict"

const courses = {
	HTML: [
		"Inleiding HTML",
		"Teksten",
		"Lijsten",
		"Hyperlinks",
		"Afbeeldingen",
	],
	CSS: [
		"Inleiding CSS",
		"Selectors 1",
		"Box model",
		"Typografie",
		"Flexbox",
	],
	SEO: [
		"Inleiding SEO",
		"Semantiek",
		"Meta tags",
		"Webcrawlers",
		"Local SEO",
	],
};


let output = "";
for (let property in courses) {
    output += "<h3>" + property + "</h3>";

	for (let lesson of courses[property]) {
		output += "<li>" + lesson + "</li>"
	}
};

document.querySelector("body").innerHTML = output;






