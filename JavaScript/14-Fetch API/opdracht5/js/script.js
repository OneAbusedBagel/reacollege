"use strict"

function chooseFunction() {
    const selectCheck = document.getElementById("vehicleSelect").value
    let vehicle = selectCheck;
    ajax(vehicle)
}

// test with variable fetch thing ---->
function ajax(vehicle) {
    // simply swapping this seems way too simple for what the exercise wants me to do, but it works accorindg to what it says.
    $.ajax({
        url: `files/${vehicle}.html`, // point of note, the search starts off where the file is executed. not where it is stored.
        method: "GET"
    }).done(function(result) {
        $("#output").html(result);
    }).fail(function() {
        $("#output").html("ERROR! Sorry not sorry.");
    });
}

const form_1 = document.getElementById("vehicleSelect");
form_1.addEventListener("change", chooseFunction, true);

//  small commmentary ---
// 
// the exercise made this seem way more difficult with the way it was worded. 
// especially with it specifying in one string, I don't even know if I did that or not. but it's functional