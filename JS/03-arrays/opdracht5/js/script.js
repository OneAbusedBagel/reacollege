"use strict";


var data = {
    items:
    [
        {
            naam: "Melk",
            prijs: 0.89,
            beschikbaar: 1,
        },
        {
            naam: "Eieren",
            prijs: 1.29,
            beschikbaar: 0,
        },
        {
            naam: "Kaas",
            prijs: 21.69,
            beschikbaar: 1,
        },
        {
            naam: "Suiker",
            prijs: 1000000.00,
            beschikbaar: 0,
        }
    ]
};

console.log(data);

function makeTable(tableData) {
    let html = "<table>";

    let headingSource = tableData.items[0];
    console.log(headingSource);

    let headingTexts = Object.keys(headingSource);

    console.log(headingTexts);

    html += "<tr>";
    headingTexts.forEach(headingText => {
        html += "<th>";
        html += headingText;
        html += "</th>";
    });
    html += "</tr>";

    for(let i = 0; i < tableData.items.length; i++) {
        let tableRow = tableData.items[i];
        console.log(tableRow);

        let tableCells = Object.keys(tableRow);

        html += "<tr>";
        for(let j = 0; j < tableCells.length; j++) {
            
            let classString;
            let summa = false;
            if(tableCells[j] === "prijs") {
                summa = true;
                classString = " class=\"right\"";
            } else if(tableCells[j] === "beschikbaar") {
                classString = " class=\"center\"";
            } else {
                classString = "";
            }

            let cellData = tableData.items[i][tableCells[j]];
            console.log(cellData);            
            html += "<td" + classString + ">";

            if(summa) {
                cellData = "&euro;" + cellData.toFixed(2);
            }
            html += cellData;

            html += "</td>";
        }
        html += "</tr>";
    }

    html += "<table>";
    return html;
}

document.querySelector("div").innerHTML = makeTable(data);



// data.items[1].beschikbaar = 1;
// data.items[0].prijs = 1.29;
// data.items[1].prijs = 1.49;
// data.items[2].prijs = 2.79;
// data.items[3].prijs = 29.99;

// console.log(data);

// document.getElementById("td-1").innerHTML = `${data.items[0].naam} `;
// document.getElementById("td-2").innerHTML = `${data.items[0].prijs} `;
// document.getElementById("td-3").innerHTML = `${data.items[0].beschikbaar} `;

// document.getElementById("td-4").innerHTML = `${data.items[1].naam} `;
// document.getElementById("td-5").innerHTML = `${data.items[1].prijs} `;
// document.getElementById("td-6").innerHTML = `${data.items[1].beschikbaar} `;

// document.getElementById("td-7").innerHTML = `${data.items[2].naam} `;
// document.getElementById("td-8").innerHTML = `${data.items[2].prijs} `;
// document.getElementById("td-9").innerHTML = `${data.items[2].beschikbaar} `;

// document.getElementById("td-10").innerHTML = `${data.items[3].naam} `;
// document.getElementById("td-11").innerHTML = `${data.items[3].prijs} `;
// document.getElementById("td-12").innerHTML = `${data.items[3].beschikbaar} `;
