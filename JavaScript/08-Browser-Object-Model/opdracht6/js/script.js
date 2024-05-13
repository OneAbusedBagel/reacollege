"use strict"

let i = 0;
let k = 0;
let repeat;

const number = document.getElementById("number");
var p = document.getElementById("number").innerHTML;



function counter(){
	console.log(p)
	if(p > 0) {
		p--;
		number.innerHTML = p	;
	} if(p === 0) {
		clearInterval(repeat)
		number.innerHTML = p
		i++
	} if(i === 1) {
		setTimeout(function() {
			alert("maybe?")
		
		setTimeout(function() {
		document.getElementById("img").style.display = "flex";
		}, 2000)}, 10)
	}
} 


repeat = setInterval(counter, 1000)



// function dagFunction(dag){
//     document.getElementById("output").innerHTML = `Het is nu ${dag}!`;
// }
// 
// const dag1 = document.getElementById("Maandag");
//  dag1.addEventListener("click", dagFunction( ){
//     dagFunction('Maandag')
// });

// function dagFunction(dag){
//     document.getElementById("output").innerHTML = `Het is nu ${dag}!`;
// }

// function Welkom(){
//     document.getElementById("output").innerHTML = `Welkom!`;
// }

// const el = document.getElementById("container");
// el.addEventListener("click", Welkom, true);

// const dag1 = document.getElementById("maandag");
// dag1.addEventListener("click", function(){
// 	dagFunction('Maandag');
// });

// const dag2 = document.getElementById("dinsdag");
// dag2.addEventListener("click", function(){
// 	dagFunction('Dinsdag');
// });

// const dag3 = document.getElementById("woensdag");
// dag3.addEventListener("click", function(){
// 	dagFunction('Woensdag');
// });

// const dag4 = document.getElementById("donderdag");
// dag4.addEventListener("click", function(){
// 	dagFunction('Donderdag');
// });

// const dag5 = document.getElementById("vrijdag");
// dag5.addEventListener("click", function(){
// 	dagFunction('Vrijdag');
// });

// const dag6 = document.getElementById("zaterdag");
// dag6.addEventListener("click", function(){
// 	dagFunction('Zaterdag');
// });

// const dag7 = document.getElementById("zondag");
// dag7.addEventListener("click", function(){
// 	dagFunction('Zondag');
// });


