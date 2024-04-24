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

