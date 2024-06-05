"use strict"

var x = 0;
let FighterList = "";
let fighterData = "";
let language = "";

// const x = "data.fighters[x].displayName";
const y = ".ko_KR";
const z = "42";
let result = eval(`x + y`); // 42
eval(z); // 42
console.log(result)
console.log(z)

function setLanguage(){
    let language = document.getElementById("pickLanguage").value
    console.log(language)
    switch (language) {
        case language = "japanese":
            fighterName = data.fighters[x].displayName.jp_JP
            break;
    
        case language = "english":
            fighterName = data.fighters[x].displayName.en_US
            break;
    
        case language = "french":
            fighterName = data.fighters[x].displayName.fr_FR
            break;
    
        case language = "spanish":
            fighterName = data.fighters[x].displayName.es_ES
            break;
    
        case language = "german":
            fighterName = data.fighters[x].displayName.de_DE
            break;
    
        case language = "italian":
            fighterName = data.fighters[x].displayName.it_IT
            break;
    
        case language = "dutch":
            fighterName = data.fighters[x].displayName.nl_NL
            break;
    
        case language = "russian":
            fighterName = data.fighters[x].displayName.ru_RU
            break;
    
        case language = "korean":
            fighterName = data.fighters[x].displayName.ko_KR
            break;
    
        case language = "chinese":
            fighterName = data.fighters[x].displayName.SC
            break;
    
        default:
            fighterName = data.fighters[x].displayName.en_us
            break;
    }
    onlineFetch()
    return language
}



function onlineFetch(){
    // the Do-while loop was/is for testing reasons. so that I can test if it fetches iterations and refreshes easily, because it always executes the loop atleast once.
    fetch(`https://codecrashersnl.github.io/json/smash-fighters.json`)
        .then(response => response.json())
        .then(data => {
            do {
                // let fighterId = data.fighters[x].id
                let fighterName = document.getElementById("pickLanguage").value
                console.log(fighterName)
                // let fighterColor = data.fighters[x].color
                // let fighterSeries = data.fighters[x].series
                // // let fighterDLC = data.fighters[x].dlc = 1 ? true : false; 
                // // console.log(fighterDLC)
                // let fighterArticle = `<article id="${fighterId}" style="color:${fighterColor};">` + "<p>" + fighterName + ` (${fighterSeries})` + "</p>"  + "</article>";
                // FighterList += fighterArticle
                // document.getElementById("output").innerHTML = FighterList;
                // console.log(data)
                // console.log(`fighter number: ${x}`)
                x++
            } while(x<2);
        })
        .catch(error => {
            console.error("did the not-work");
        });
}

// onlineFetch()
const form_1 = document.getElementById("button");
form_1.addEventListener("click", onlineFetch, true);

// const form_2 = document.getElementById("button_show");
// form_2.addEventListener("click", showDlc, true);

// const form_3 = document.getElementById("button_hide");
// form_3.addEventListener("click", hideDlc, true);

// const form_4 = document.getElementById("pickLanguage");
// form_4.addEventListener("change", setLanguage, true);