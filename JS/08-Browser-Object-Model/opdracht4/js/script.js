


let DelayStop = "";

function WebLeave() {
    setTimeout(function(){
        location.assign("https://youtu.be/kTp2tYKmftE?t=31");
    }, 4500);
}


function BackGChange(){
    DelayStop = setTimeout(function(){
        document.body.style.backgroundColor = "palevioletred";
    }, 3000);
}

function AddContent(){
    setTimeout(function(){
        const p = document.createElement("p")
        const text = document.createTextNode("(met willekeurige tekst)")
        p.appendChild(text)
        document.querySelector("#output").appendChild(p)
    }, 2000);
    setTimeout(function(){
        const p = document.createElement("p")
        const text = document.createTextNode("(met willekeurige tekst x2)")
        p.appendChild(text)
        document.querySelector("#output").appendChild(p)
    }, 4000);
    setTimeout(function(){
        const p = document.createElement("p")
        const text = document.createTextNode("(met willekeurige tekst x3)")
        p.appendChild(text)
        document.querySelector("#output").appendChild(p)
    }, 6000);
}

function Stop(){
    clearTimeout(DelayStop)
}

const el1 = document.getElementById("knop-1");
el1.addEventListener("click", WebLeave);

const el2 = document.getElementById("knop-2");
el2.addEventListener("click", BackGChange);

const el3 = document.getElementById("knop-3");
el3.addEventListener("click", AddContent);

const el4 = document.getElementById("knop-4");
el4.addEventListener("click", Stop);
