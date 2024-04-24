"use strict";

const products = [
	[
		"Sleutelhanger",
		"Reddingsvest"
	],
	[
		"Bandenpomp",
		[
			"Ruitenwisservloeistof",
			"Olie",
		]
	],
	[
		"Skittles"
	]
];


products[1][1].splice(1, 0, 'Koelvloeistof');

console.log(products);

const flatP = products.flat(2);

console.log(flatP);

let shoppingcart = flatP.flat(2).slice(2, 3);

//shoppingcart = products.flat(2).slice(4, 5);

//shoppingcart = products.flat(2).slice(6,-1);

console.log(shoppingcart);


// ----------------------------
//This down here is an excerpt from the mdn web docs, a direct copy of an example on how to use the flat method. except it doesn't work as the example shows, it infact doesn't seem to work at all.

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

console.log(arr3)