"use strict";


const names = [
    "Tom",
    "Casper",
    "Wieke",
    "Bryan"
];

const movies = [
    "movie-1",
    "movie-2",
    "movie-3",
    "movie-4",
    "movie-5"
];

movies[3] = "new-movie-6";
document.getElementById("span-1").innerHTML = `There are ${movies.length} variables in the array`;

document.getElementById("li-1").innerHTML = `${names} `;

document.getElementById("li-2").innerHTML = `${movies[0]}`;
document.getElementById("li-3").innerHTML = `${movies[1]}`;
document.getElementById("li-4").innerHTML = `${movies[2]}`;
document.getElementById("li-5").innerHTML = `${movies[3]}`;
document.getElementById("li-6").innerHTML = `${movies[4]}`;