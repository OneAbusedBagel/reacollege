"use strict"

// Null probleem is gefixt



const blok_list = document.getElementsByClassName("blok");
console.log(blok_list);


for (let i = 0; i < blok_list.length; i++) {
    blok_list[i].addEventListener("click",getThis, true );
    // blok_list[i].innerText = `Dit is blok ${i + 1}`;
    console.log(i)
}

function getThis() {
    // 'This' = whatever called/activated it? (in this case whatever 'button' starts the function)
    console.log(this);
    this.style.backgroundColor = "lightblue"
}


// let knop_1 = document.getElementById("knop-1");
// knop_1.addEventListener("click",getThis, true )

// let knop_2 = document.getElementById("knop-2");
// knop_2.addEventListener("click",getThis, true )


// ---------[divide line]--------

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
// console.log(obj1)
// console.log(obj2)

