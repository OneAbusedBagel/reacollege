"use strict"

let movies = []


function Movie(name, releaseDate, genre, directors, writers, actors) {
    this.name = name
    this.releaseDate = releaseDate
    this.genre = genre
    this.directors = directors
    this.writers = writers
    this.actors = actors
}

let vampire = new Movie("Vampire's Kiss", "June 16, 1989", ["Comedy", "Crime", "Fantasy", "Horror"], ["Robert Bierman"], ["Joseph Minion"], ["Nicholas Cage", "Maria Conchita Alonso", "Jennifer Beals"])
let singham = new Movie("Singham", "June 20, 2012", ["Action", "Crime", "Drama"], ["Rohit Shetty"], ["Hari", "Yunus Sajawal", "Sajid"], ["Ajav Devgn", "Kajal Aggarwal", "Prakash Raj"])
let bulk = new Movie("The Amazing Bulk", "April 17, 2012", ["Action", "Comeddy", "Fantasy", "Romance", "Sci-Fi"], ["Lewis Schoenbrun"], ["Keith Schaffner", "Jeremiah Campbell"], ["Terence Darwin","Shevaun Kastl","Randal Malone"])

movies.push(vampire)
movies.push(singham)
movies.push(bulk)

console.log(movies)
