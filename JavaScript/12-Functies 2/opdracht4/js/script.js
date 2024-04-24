"use strict"

// function sectionMaker(inputText){
// 	let result = "<section><p>"+inputText+"</p></section>";
// 	return result;
// }

const sectionMaker = inputText => "<section><p>" + inputText + "</p></section>" 

document.getElementById("output").innerHTML = sectionMaker('This is testing text');




// const bmo = function(x, y) {
//     return x + y 
// }

// document.getElementById("output").innerHTML = `should be 35. => ` + bmo(20, 15);

// const argument1 = "huh?"
// const argument2 = "huh?"
// const argument3 = "huh?"

// var v = 0;

// const awd = function(a, b, c) {
//     let check_a = !(isNaN(a))
//     let check_b = !(isNaN(b))
//     let check_c = !(isNaN(c))

//     console.log(!(isNaN(a)))
//     console.log(!(isNaN(b)))
//     console.log(!(isNaN(c)))

//     if(check_a == false) { return console.error('a number is broken!')}
//     if(check_b == false) { return console.error('a number is broken!')}
//     if(check_c == false) { return console.error('a number is broken!')}
//     a =+ (a ** 2);
//     b =+ (b ** 2);
//     c =+ (c ** 2);

//     var result = (a + b + c)
//     return result

//     // v =+ 10
//     // console.log(`is this even working? - ` + a,b,c,v)
// }

// function shorthand(a, b, c) {
//     var result = awd(a, b, c);
//     document.getElementById("output2").innerHTML = `This is random testing => ` + result;
//     console.log("This was done witht he shorthand function for convenience! Result:"+result)
// } 

// // document.getElementById("output2").innerHTML = `This is random testing => ` + awd(2, 3, 4);
// // document.getElementById("output2").innerHTML = `This is random testing => ` + awd(5, 6, 7);

// shorthand(2,3,4)
// shorthand(5,6,7)
// // shorthand(paramaters)


