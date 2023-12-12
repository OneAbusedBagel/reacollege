
function testTime() {
    var time = new Date();
    document.getElementById("span-1").innerHTML = `<i>  ${nu.getHours()}:${nu.getMinutes()}:${nu.getSeconds()} </i>`;
}

testTime
