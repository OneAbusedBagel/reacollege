"use strict"

let i = 0;
const lottery = document.querySelector("#loten").innerHTML
const patternLottery = /\b([A-Z]{2} [0-9]{5})\b/g;
let list = "";
console.log(lottery);




while (i<12) {
    let test = patternLottery.exec(lottery);
    console.log(test)
    console.log(test[0])
    let code = test[0]

    let listItem =`<li>${code} </li> `
    list += listItem;
    let html = `<ul> ${list} </ul>`
    document.getElementById("output").innerHTML = html
    console.log(list)
    if(test[0]= null) {
        i+200
        break
    }
    i++
}
