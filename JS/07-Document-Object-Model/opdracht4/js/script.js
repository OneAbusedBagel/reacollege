"use strict"

// trying to save the contents of every strong element and then later reapply it to the same em element... don't know if this is the intended way, it probably isn't.


var saved = "";
var exe = "";
for(let i = 0; i < 4; i++) {
    console.log(document.querySelector("b"));

    saved = document.querySelector("b");
    const o = document.querySelector("b");
    
    const n = document.createElement("strong");
    o.parentNode.replaceChild(n, o);
    console.log("- -", saved);

    document.querySelector("strong").innerText = saved;
    console.log("- - -", saved)
}

// dit is blijkbaar conceptueel goed maar mijn executie werkt niet. Wim en Pim hielpen maar konden beide het probleem niet vinden.