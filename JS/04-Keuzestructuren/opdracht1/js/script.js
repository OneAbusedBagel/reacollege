"use strict"


var cookies = confirm("Deze website maakt gebruik van cookies. Klik op OK om hiermee akkoord te gaan.");

if (cookies == true)  {
	document.getElementById("true").innerHTML = `U gaat akoord met cookies`;
} else {
	document.getElementById("false").innerHTML = `U Gaat niet akoord met cookies`;
};
