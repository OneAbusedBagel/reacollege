"use strict"
var y = 0
var x = 0
let i = 0
let fullArticle = "" 
function loop(){
    console.log("function activated")
    if (i < 6) {
        console.log("if engaged")
        while(i<3){
            console.log("while-loop engaged")
                function onlineFetch() {
                    var y = 0
                    console.log(`Online fetch attempted`)
                    fetch(`https://codecrashersnl.github.io/json/users.json`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            let userArticle = `<article id="${data.users[y].userId}">` + "<h2>" + data.users[y].firstName+ " - " + data.users[y].lastName  + "</h2>"+"<p>"+ data.users[y].phoneNumber+ "</p>"+"<p>"+data.users[y].emailAddress+ "</p> "+ "</article>"
                            console.log(userArticle)
                            fullArticle += userArticle
                            console.log(fullArticle)
                            document.getElementById("output").innerHTML = fullArticle;
                            console.log("Online fetch successful")
                        })
                        .catch(error => {
                            console.error("did the not-work");
                        });
                    }
                    x += 1
                    y += 2
                    onlineFetch()
                    console.log(i)
                    console.log(`x triggered ->`+x)
                    i++
                }
    }
    console.log(i)
}

// sorry, this thing is a mess. but you justy gotta fix the iteration loop thing, the fetch already works atleast.

const form_1 = document.getElementById("button");
form_1.addEventListener("click", loop, true);