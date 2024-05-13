"use strict";


var str = 0;
var stp = 0
let c = 0;
let repeat;
var time = new Date()

const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};





function clock() {
    console.log(c)

    if(c == 1) {
        time = new Date()
        var nowTime = (time.toLocaleDateString(undefined, options).slice(-8));
        document.getElementById('p1').innerHTML = nowTime;
    }
}

function buttonName() {
    const nameChange = document.getElementById("knop-1")
    nameChange.innerHTML = nameChange.innerHTML === "Play" ? "Pause" : "Play";
}

function toggle() {
    if(c < 1) {
        console.log(`no c: ${c}. turning clock on`)
        c++
    }else {
        console.log(`yes c: ${c}. turning clock off`)
        c--
    }
}

repeat = setInterval(clock, 1000)

const el1 = document.getElementById("knop-1");
el1.addEventListener("click", toggle);
el1.addEventListener("click", buttonName)
    

    // const el2 = document.getElementById("knop-2");
    // el2.addEventListener("click", stop);

    // const el3 = document.getElementById("knop-3");
    // el3.addEventListener("click", buttonName);



//----------------------[test line divider]-----------
// this is where I keep my failed attempts to maybe learn from in the future.

// if(str == 1) {
//     if (c == 0) {
//         console.log(`no c: ${c}. turning clock on`)
//         c++
//         str--
//     } else {
//         console.log(`c is there: ${c}`)
//         str--
//     }
// }

//     if(stp == 1) {
//     if(c == 1) {
//         console.log("Clock turned off")
//         c--
//         stp--
//     } else {
//         console.log("clock not there can't turn off")
//         stp--
//     }
// }

// function clock() {
//     time = new Date()
//     var nowTime = (time.toLocaleDateString(undefined, options).slice(-8));
//     document.getElementById('p1').innerHTML = nowTime;
// }

// was trying something super complicated for the button toggle thing where I shoved everything into a giant function wherein everything worked off 3 values (which didn't work and was unnecessarrily complicated) but It helped me get something down, which I could then simplify and change. and I improved it a lot to just a single global value that works does the job well.

//---------

// // check the pattern in the string to see if it's more than 1 number
// const pattern = /(^[0-9][0-9]){1}/
// console.log(pattern.test(time.getSeconds))
// let check = ""
// check = time.getSeconds
// console.log(check)
// var test = `10`
// console.log(pattern.test(test))

// console.log("0" + (time.getSeconds).slice(-2))
//     var hours =  (time.getHours <10 ? + time.getHours() : "0" + time.getHours())
//     var minutes = (time.getMinutes >10 ?  + time.getMinutes() : "0" + time.getMinutes())
//     // var seconds = ('0' + time.getSeconds()).slice(-2) 
//     var seconds = ((time.getSeconds) >10 ?  + time.getSeconds() : "0" + time.getSeconds())
//     // var nowTime = hours + ":" + minutes + ":" + seconds + "";
//     all this compllicated pattern testing or ternary operater checking is useless because apparently there's some random function, which shows the current local date, and adds leading zero's.. all on it's own.
// // none of this worked. I think because when the time is read with the get.time it doesn't exist as numbers yet but as a Formula so it can't read any number pattern. I don't know why it's different from what is shown live but it's irritating and I don't know how else I'd do this. (since I already tried the >1 thing).

// -------------------------