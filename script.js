'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much movies have you seen?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movies have you seen?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const answer = prompt('One of the last seen movies?', ''),
        rate = +prompt('Rate this movie?', '');
    if (answer != null && rate != null && answer != '' && rate != '' && answer.length < 50) {
        personalMovieDB.movies[answer] = rate;
        console.log("Ready");
    } else {
        console.log("Error");
        i--;
    }
}
}

rememberMyFilms();

function detectPersLevel() {
if (personalMovieDB.count < 10) {
    console.log('You\'d seen not so much movies');
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
     console.log('You\'d seen enough movies');
 } else if (personalMovieDB.count > 30) {
     console.log('You\'re watching movies all the time!');
 } else {
     console.log('Some shit happened...');
 }
}

detectPersLevel();

function showMyDB(privat){
    if (!privat) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);//personalMovieDB.privat - argument for this function, which checks it value;

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}?`);
    }
}
writeYourGenres();





