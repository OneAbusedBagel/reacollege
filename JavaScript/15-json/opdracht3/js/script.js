"use strict"

var i = 0;
var x = 0;
let FighterList = "";

function onlineFetch(){
    // the Do-while loop was/is for testing reasons. so that I can test if it fetches iterations and refreshes easily, because it always executes the loop atleast once.
    do {
        fetch(`https://codecrashersnl.github.io/json/smash-fighters.json`)
            .then(response => response.json())
            .then(data => {
                let fighterId = data.fighters[x].id
                let fighterName = data.fighters[x].displayNameEn
                let fighterColor = data.fighters[x].color
                let fighterSeries = data.fighters[x].series

                let fighterArticle = `<article id="${fighterId}" style="color:${fighterColor};">` + "<p>" + fighterName + ` (${fighterSeries})` + "</p>"  + "</article>";
                FighterList += fighterArticle
                document.getElementById("output").innerHTML = FighterList;
                console.log("COLOR APPLIED")
                console.log(data)
                x++
            })
            .catch(error => {
                console.error("did the not-work");
            });
    i++
    console.log(i)
    } while(i<83);
}

const form_1 = document.getElementById("button");
form_1.addEventListener("click", onlineFetch, true);