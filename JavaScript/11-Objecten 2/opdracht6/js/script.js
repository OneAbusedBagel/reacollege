"use strict"

function Game(name, releaseDate, platform, developer, buy,) { 
    Object.defineProperty(this, "name", { 
        get: function() { 
            return "<strong> Game: " + name + " </strong>";       
        },        
        set: function(newName) {
            if (typeof name === "string"){
                name = newName; 
            } else {
                throw new TypeError("name Value isn't a string");
            }
        },               
        configurable: false     
    });
    Object.defineProperty(this, "releaseDate", { 
        get: function() { 
            return "<strong> game: " + releaseDate + " </strong>";       
        },        
        set: function(newReleaseDate) {
            if (typeof releaseDate === Number){
                releaseDate = newReleaseDate; 
            } else {
                throw new TypeError(" releasedate Value isn't a number");
            }
        },               
        configurable: false     
    });
    Object.defineProperty(this, "platform", { 
        get: function() { 
            return "<em> Game: " + platform + " </em>";       
        },        
        set: function(newPlatform) {   
            if (typeof platform === "string"){
                platform = newPlatform;     
            } else {
                throw new TypeError("name Value isn't a string");
            } 
        },               
        configurable: false     
    }); 
    Object.defineProperty(this, "developer", { 
        get: function() { 
            return "<em> Game: " + developer + " </em>";       
        },        
        set: function(newDeveloper) {
            if (typeof developer === "string"){
                developer = newDeveloper; 
            } else {
                throw new TypeError("name Value isn't a string");
            }             
        },               
        configurable: false     
    });
    Object.defineProperty(this, 'buy', {
        get: function() {
            this.buy = function() { 
                let gameBuy = `U heeft ${this} gekocht!` 
                return gameBuy
                // I have no idea anymore bu patrick left and I'm struggling to even show up here so I give u[p]
            }
        },
        set: function(newBuy) {
            buy = newBuy
        }
    },);
}

let suikoden = new Game("suikoden", 1997, "Playstation", "Konami",)
let suikoden2 = new Game("suikoden 2", 2000, "Playstation", "Konami",)


suikoden.buy()
suikoden2.buy()

console.log(suikoden)
console.log(suikoden.name)
console.log(suikoden.releaseDate)
console.log(suikoden.platform)
console.log(suikoden.developer)

console.log(suikoden2)
console.log(suikoden2.name)
console.log(suikoden2.releaseDate)
console.log(suikoden2.platform)
console.log(suikoden2.developer)


// I wasn't able to get Object.values and looking at my current fix I don't know why I need object values specifically, if there is an important reason, it is not explained well. or my underlying code is already wrong despite meeting the exercises demands

let text = ""
text += "<ul>" +"<li>"+ suikoden.name + "</li>"
text += "<li>" + suikoden.releaseDate +  "</li>"
text += "<li>" + suikoden.platform +  "</li>"
text += "<li>" + suikoden.developer + "</li>" + "</ul>"
text += "<br>"
text += "<ul>" +"<li>"+ suikoden2.name + "</li>"
text += "<li>" + suikoden2.releaseDate +  "</li>"
text += "<li>" + suikoden2.platform +  "</li>"
text += "<li>" + suikoden2.developer + "</li>" + "</ul>"
let html = text

document.getElementById("output").innerHTML = html

