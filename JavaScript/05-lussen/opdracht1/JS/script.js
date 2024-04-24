"use strict"

let numbers = [

];

console.log(numbers);

for (let i = 0; i < 8; i++) {
    let rng = Math.round(Math.random() * 10000);
    numbers.push(rng);
}

console.log(numbers);

//  const order = numbers.join(`\n`);
//  console.log(order);
//  document.getElementById("true").innerHTML = `${order}`;

alert(numbers.join(`\n`));

document.getElementById("rgn-1-1").innerHTML = `${numbers[0]} `;
document.getElementById("rgn-2-1").innerHTML = `${numbers[1]} `;
document.getElementById("rgn-3-1").innerHTML = `${numbers[2]} `;
document.getElementById("rgn-4-1").innerHTML = `${numbers[3]} `;
document.getElementById("rgn-5-1").innerHTML = `${numbers[4]} `;
document.getElementById("rgn-6-1").innerHTML = `${numbers[5]} `;
document.getElementById("rgn-7-1").innerHTML = `${numbers[6]} `;
document.getElementById("rgn-8-1").innerHTML = `${numbers[7]} `;
