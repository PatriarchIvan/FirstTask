'use strict';
const numberOfFilms = +prompt('How much movies have you seen?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
   console.log('You\'d seen not so much movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('You\'d seen enough movies');
} else if (personalMovieDB.count > 30) {
    console.log('You\'re watching movies all the time!');
} else {
    console.log('Some shit happened...');
}

console.log(personalMovieDB);