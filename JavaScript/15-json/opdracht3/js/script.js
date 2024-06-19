"use strict"

var x = 0;
var i = 0;
let fighterData = "unchanged";
let FighterList = "";
let language = "";



function onlineFetch(){
    return new Promise((myResolve, myReject) => { 
        fetch(`https://codecrashersnl.github.io/json/smash-fighters.json`)
        .then(response => response.json())
        .then(data => {
            fighterData = data
            console.log("stuff fetched")
            myResolve(fighterData)
        })
        .catch(error => {
            console.error("did the not-work");
        });
    })
}

myPromises()

function compiler() {
    let fighterName ="";
    let language = document.getElementById("pickLanguage").value
    switch (language) {
        case language = "japanese":
            fighterName = fighterData.fighters[x].displayName.ja_JP
            break;
        
        case language = "english":
            fighterName = fighterData.fighters[x].displayName.en_US
            break;
        
        case language = "french":
            fighterName = fighterData.fighters[x].displayName.fr_FR
            break;
        
        case language = "spanish":
            fighterName = fighterData.fighters[x].displayName.es_ES
            break;
        
        case language = "german":
            fighterName = fighterData.fighters[x].displayName.de_DE
            break;
        
        case language = "italian":
            fighterName = fighterData.fighters[x].displayName.it_IT
            break;
        
        case language = "dutch":
            fighterName = fighterData.fighters[x].displayName.nl_NL
            break;
        
        case language = "russian":
            fighterName = fighterData.fighters[x].displayName.ru_RU
            break;
        
        case language = "korean":
            fighterName = fighterData.fighters[x].displayName.ko_KR
            break;
        
        case language = "chinese":
            fighterName = fighterData.fighters[x].displayName.SC
            break;
    }
    do {
        let fighterId = fighterData.fighters[x].id
        let fighterName = fighterData.fighters[x].displayNameEn
        console.log(language)
        console.log(fighterName+ "--bleh")

        let fighterColor = fighterData.fighters[x].color
        let fighterSeries = fighterData.fighters[x].series
        // let fighterDLC = data.fighters[x].dlc = 1 ? true : false; 
        // console.log(fighterDLC)
        let fighterArticle = `<article id="${fighterId}" style="color:${fighterColor};">` + "<p>" + fighterName + ` (${fighterSeries})` + "</p>"  + "</article>";
        FighterList += fighterArticle
        document.getElementById("output").innerHTML = FighterList;
        x++
    }while(x<1); 
}

function stepTwo(){
    return new Promise((myResolve, myReject) => { 
        do {
            console.log("StepTwo started");
            console.log(fighterData);

            let fighterId = fighterData.fighters[x].id
            let fighterName = fighterData.fighters[x].displayNameEn
            let language = document.getElementById("pickLanguage").value
            console.log(language)
            switch (language) {
                case language = "japanese":
                    fighterName = fighterData.fighters[x].displayName.ja_JP
                    break;
                
                case language = "english":
                    fighterName = fighterData.fighters[x].displayName.en_US
                    break;
                
                case language = "french":
                    fighterName = fighterData.fighters[x].displayName.fr_FR
                    break;
                
                case language = "spanish":
                    fighterName = fighterData.fighters[x].displayName.es_ES
                    break;
                
                case language = "german":
                    fighterName = fighterData.fighters[x].displayName.de_DE
                    break;
                
                case language = "italian":
                    fighterName = fighterData.fighters[x].displayName.it_IT
                    break;
                
                case language = "dutch":
                    fighterName = fighterData.fighters[x].displayName.nl_NL
                    break;
                
                case language = "russian":
                    fighterName = fighterData.fighters[x].displayName.ru_RU
                    break;
                
                case language = "korean":
                    fighterName = fighterData.fighters[x].displayName.ko_KR
                    break;
                
                case language = "chinese":
                    fighterName = fighterData.fighters[x].displayName.SC
                    break;
                
                default:
                    fighterName = fighterData.fighters[x].displayName.en_us
                    break;
            }

            let fighterColor = fighterData.fighters[x].color
            let fighterSeries = fighterData.fighters[x].series
            // let fighterDLC = data.fighters[x].dlc = 1 ? true : false; 
            // console.log(fighterDLC)
            let fighterArticle = `<article id="${fighterId}" style="color:${fighterColor};">` + "<p>" + fighterName + ` (${fighterSeries})` + "</p>"  + "</article>";
            FighterList += fighterArticle
            document.getElementById("output").innerHTML = FighterList;
            x++
        } while(x<2);
    })
}


async function myPromises(){
    const one = await onlineFetch()
    console.log(fighterData)
    const two = await stepTwo()
}



console.log("global data test: "+fighterData)

const form_1 = document.getElementById("button");
form_1.addEventListener("click", myPromises, true);

const form_2 = document.getElementById("button_show");
form_2.addEventListener("click", compiler, true);

// const form_3 = document.getElementById("button_hide");
// form_3.addEventListener("click", log, true);

const form_4 = document.getElementById("pickLanguage");
form_4.addEventListener("change", compiler, true);



//  big part storage =====================================

// function onlineFetch(){
//     // the Do-while loop was/is for testing reasons. so that I can test if it fetches iterations and refreshes easily, because it always executes the loop atleast once.
//     fetch(`https://codecrashersnl.github.io/json/smash-fighters.json`)
//         .then(response => response.json())
//         .then(data => {
//             do {
//                 let fighterId = data.fighters[x].id
//                 let fighterName = data.fighters[x].displayNameEn
//                 let language = document.getElementById("pickLanguage").value
//                 console.log(language)
//                 switch (language) {
//                     case language = "japanese":
//                         fighterName = data.fighters[x].displayName.ja_JP
//                         break;
                    
//                     case language = "english":
//                         fighterName = data.fighters[x].displayName.en_US
//                         break;
                    
//                     case language = "french":
//                         fighterName = data.fighters[x].displayName.fr_FR
//                         break;
                    
//                     case language = "spanish":
//                         fighterName = data.fighters[x].displayName.es_ES
//                         break;
                    
//                     case language = "german":
//                         fighterName = data.fighters[x].displayName.de_DE
//                         break;
                    
//                     case language = "italian":
//                         fighterName = data.fighters[x].displayName.it_IT
//                         break;
                    
//                     case language = "dutch":
//                         fighterName = data.fighters[x].displayName.nl_NL
//                         break;
                    
//                     case language = "russian":
//                         fighterName = data.fighters[x].displayName.ru_RU
//                         break;
                    
//                     case language = "korean":
//                         fighterName = data.fighters[x].displayName.ko_KR
//                         break;
                    
//                     case language = "chinese":
//                         fighterName = data.fighters[x].displayName.SC
//                         break;
                    
//                     default:
//                         fighterName = data.fighters[x].displayName.en_us
//                         break;
//                 }


//                 let fighterColor = data.fighters[x].color
//                 let fighterSeries = data.fighters[x].series
//                 // let fighterDLC = data.fighters[x].dlc = 1 ? true : false; 
//                 // console.log(fighterDLC)
//                 let fighterArticle = `<article id="${fighterId}" style="color:${fighterColor};">` + "<p>" + fighterName + ` (${fighterSeries})` + "</p>"  + "</article>";
//                 FighterList += fighterArticle
//                 document.getElementById("output").innerHTML = FighterList;
//                 console.log(data)
//                 console.log(`fighter number: ${x}`)
//                 x++
//             } while(x<2);
//         })
//         .catch(error => {
//             console.error("did the not-work");
//         });
// }