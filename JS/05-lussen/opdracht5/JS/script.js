
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
for (let property in user) {
    output += "<p>" + property + "</p>";
};

//  let numbers = [

//  ]

//  console.log(numbers)
//  let i = 0;
//  while (i < 8) {
//      let rng = Math.round(Math.random() * 10000);
//      if (rng === 666) {
//          break
//      };
//      if (rng <= 999) {
//          continue
//      }
//      numbers.push(rng);
//      i++
//      numbers.sort()
//  };

//  console.log(numbers);

//  const order = numbers.join(`\n`);
//  console.log(order);
//  document.getElementById("true").innerHTML = `${order}`;

//  alert(numbers.join(`\n`));
