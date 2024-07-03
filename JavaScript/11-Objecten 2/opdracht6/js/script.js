"use strict"

function Game(name, releaseDate, platform, developer,) { 
    Object.defineProperty(this, "name", { 
        get: function() { 
            return "<strong> Game: " + name + " </strong>";       
        },        
        set: function(newName) {            
            name = newName;        
        },               
        configurable: false     
    });
    Object.defineProperty(this, "releaseDate", { 
        get: function() { 
            return "<strong> game: " + releaseDate + " </strong>";       
        },        
        set: function(newReleaseDate) {            
            releaseDate = newReleaseDate;        
        },               
        configurable: false     
    });
    Object.defineProperty(this, "platform", { 
        get: function() { 
            return "<em> Game: " + platform + " </em>";       
        },        
        set: function(newPlatform) {            
            platform = newPlatform;        
        },               
        configurable: false     
    }); 
    Object.defineProperty(this, "developer", { 
        get: function() { 
            return "<em> Game: " + developer + " </em>";       
        },        
        set: function(newDeveloper) {            
            developer = newDeveloper;        
        },               
        configurable: false     
    });
}

let suikoden = new Game("suikoden", 1997, "Playstation", "Konami",)
let suikoden2 = new Game("suikoden 2", 2000, "Playstation", "Konami",)

console.log(suikoden)
console.log(suikoden.name)
console.log(suikoden.releaseDate)
console.log(suikoden.platform)
console.log(suikoden.developer)

console.log(suikoden2.name)
console.log(suikoden2.releaseDate)
console.log(suikoden2.platform)
console.log(suikoden2.developer)

let html = Object.values(suikoden)
document.getElementById("output").innerHTML = html

