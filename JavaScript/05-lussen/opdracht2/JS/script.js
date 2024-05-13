"use strict"

var x = 1;
var total = 1;

let i = 0;

//  while (total < 2000) {
//      x = x * 2
//      total = x + total;
//      i++;
//  }

do {
	x = x * 2
    total = x + total;
	i++;
} while (total < 2000);


console.log(total);
document.getElementById("true").innerHTML = `${total}`;
console.log(i);
