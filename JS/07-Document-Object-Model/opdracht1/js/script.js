"use strict"

function knop1Functie(){
    let title = document.getElementById("title").innerHTML;
    let action = form.getAttribute("action");
    let src = csslink.getAttribute("href");
    let password = document.getElementById("password").value;

    console.log(title)
    console.log(action);
    console.log(src)
    console.log(password)

    alert(`function result: "1. ${title} 2. ${action} 3. ${src} 4. ${password}" -spacing aftertext.`)
}

function knop2Functie(){
    
    document.getElementById("link").innerText = "Ga naar Bing";
    document.getElementById("link").href = "http://www.bing.com";
    document.getElementById("image").src = "images/singham-2.jpg"
}

function knop3Functie(){
    document.body.style.backgroundColor = "orange";
    document.body.style.fontFamily = "Calibri";
    document.getElementById("image").style.height = "800px" 
    document.getElementById("image").style.width = "550px" 
    document.body.style.flexDirection = "column"
}

const knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click", knop1Functie, true);

const knop_2 = document.getElementById("knop-2");
knop_2.addEventListener("click", knop2Functie, true);

const knop_3 = document.getElementById("knop-3");
knop_3.addEventListener("click", knop3Functie, true);


 
// function knop1Functie(){
//     
//     console.log(title);
//     document.getElementById("knop-1").innerText = "this one works";
//     alert(`Titel:${title} text`)
// }


// function knop1Functie(){
//     let title = document.getElementById("title").innerHTML;
//     console.log(title);
//     document.getElementById("knop-1").innerText = "this one works";
//     alert(`Titel:${title} text`)
// }