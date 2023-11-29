"use strict"

// function rngx() {
//     return x = Math.floor(Math.random() * 10 ) + 1, console.log(`x = ${x}`);
// }
// 
// function rngy() {
//     return y = Math.floor(Math.random() * 10 ) + 1, console.log(`y = ${y}`);
// }

function rng() {
    return x = Math.floor(Math.random() * 10 ) + 1,
    console.log(`test-x = ${x}`),
    y = Math.floor(Math.random() * 10 ) + 1,
    console.log(`test-y = ${y}`)
};

var x = 0;
var y = 0;

// rngx()
// rngy()
rng();

// console.log(x);
// console.log(y);

function calcAverage(x, y) {
    const output = Math.round((x + y) / 2);
    alert(output)
};

calcAverage(x, y);

rng()
// var x = `fake-x`;
// var x = `fake-y`;

calcAverage(x, y);

rng();

calcAverage(x, y);
