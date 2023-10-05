"use strict"

function rngx() {
    var x = Math.floor(Math.random() * 10 ) + 1;
    console.log(x);
    return x;
}

function rngy() {
    var y = Math.floor(Math.random() * 10 ) + 1;
    console.log(y);
    return y;
}

function calcAverage(x, y) {
    const output = x + y / 2;
    alert(output)
}

rngx()
rngy()

calcAverage(x, y)
