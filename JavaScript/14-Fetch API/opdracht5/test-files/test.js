"use strict"

$.ajax({
	url: "files/leopard.html", // point of note, the search starts off where the file is executed. not where it is stored.
	method: "GET"
}).done(function(result) {
	$("#content").html(result);
}).fail(function() {
	$("#content").html("ERROR! Sorry not sorry.");
});