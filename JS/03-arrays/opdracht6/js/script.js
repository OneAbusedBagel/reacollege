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

console.log(products)

products.flat(2)

console.log(products.flat(2))

let shoppingcart = products.flat(2).slice(2, 3);

//shoppingcart = products.flat(2).slice(4, 5);

//shoppingcart = products.flat(2).slice(6,-1);

console.log(shoppingcart)