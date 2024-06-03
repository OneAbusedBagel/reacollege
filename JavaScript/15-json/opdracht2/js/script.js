"use strict"

var x = 0;
let i = 0;
let fullArticle = "" ;

function onlineFetch(){
   do {
    fetch(`https://codecrashersnl.github.io/json/users.json`)
        .then(response => response.json())
        .then(data => {
            let userArticle = `<article id="${data.users[x].userId}">` + "<h2>" + data.users[x].firstName+ " - " + data.users[x].lastName  + "</h2>"+"<p>"+ data.users[x].phoneNumber+ "</p>"+"<p>"+data.users[x].emailAddress+ "</p> "+ "</article>"
            console.log(userArticle)
            fullArticle += userArticle
            console.log(fullArticle)
            document.getElementById("output").innerHTML = fullArticle;
            x++;
        })
        .catch(error => {
            console.error("did the not-work");
        });
    
    i++
    } while (i<6);
}

const form_1 = document.getElementById("button");
form_1.addEventListener("click", onlineFetch, true);