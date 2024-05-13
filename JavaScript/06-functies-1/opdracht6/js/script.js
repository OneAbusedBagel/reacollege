"use strict"

// function dagFunction(dag){
//     document.getElementById("output").innerHTML = `Het is nu ${dag}!`;
// }
// 
// const dag1 = document.getElementById("Maandag");
//  dag1.addEventListener("click", dagFunction( ){
//     dagFunction('Maandag')
// });

function dagFunction(dag){
    document.getElementById("output").innerHTML = `Het is nu ${dag}!`;
}

function Welkom(){
    document.getElementById("output").innerHTML = `Welkom!`;
}

const el = document.getElementById("container");
el.addEventListener("click", Welkom, true);

const dag1 = document.getElementById("maandag");
dag1.addEventListener("click", function(){
	dagFunction('Maandag');
});

const dag2 = document.getElementById("dinsdag");
dag2.addEventListener("click", function(){
	dagFunction('Dinsdag');
});

const dag3 = document.getElementById("woensdag");
dag3.addEventListener("click", function(){
	dagFunction('Woensdag');
});

const dag4 = document.getElementById("donderdag");
dag4.addEventListener("click", function(){
	dagFunction('Donderdag');
});

const dag5 = document.getElementById("vrijdag");
dag5.addEventListener("click", function(){
	dagFunction('Vrijdag');
});

const dag6 = document.getElementById("zaterdag");
dag6.addEventListener("click", function(){
	dagFunction('Zaterdag');
});

const dag7 = document.getElementById("zondag");
dag7.addEventListener("click", function(){
	dagFunction('Zondag');
});


