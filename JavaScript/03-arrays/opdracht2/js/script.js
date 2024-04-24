"use strict";

//
// Let op!!!
//
// Opdracht is iets meer dan gevraagd om wat extra voorbeelden te laten zien.
//

const planes =[
	"Ixalan",
	"Tarkir",
	"Ravnica",
	"Dominaria",
	"Theros",
	"Amonkhet",
	"Mirrodin",
	"Innistrad"
];

// Inline style sanctioned by Marco.

function makeList(listTitle,  listData) {
	let html = "<h2 style=\"color: purple; font-family: monospace;\">" + listTitle + ":</h2>";
	html += "<ul>";
	listData.forEach(listItem => {
		console.log(listItem);
		html += "<li>" + listItem + "</li>";
	});
	html += "</ul>";
	return html;
}

let originalList = makeList("Original", planes);

planes.unshift("Kaladesh");

let unshiftedList = makeList("Unshifted", planes);

planes.splice(4, 1,);

let splicedList1 = makeList("Splice 1", planes);

planes.splice(3, 0, "Lorwyn");

let splicedList2 = makeList("Splice 2", planes);

planes.sort();

let sortedList = makeList("Sorted", planes);

planes.reverse();

let reversedList = makeList("Reversed", planes);

let html = originalList + unshiftedList + splicedList1 + splicedList2 + sortedList + reversedList;

document.getElementById("list").innerHTML = html;
