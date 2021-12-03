'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('How much movies have you seen?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much movies have you seen?', '');
        }
    },

    detectPersLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You\'d seen not so much movies');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
             console.log('You\'d seen enough movies');
         } else if (personalMovieDB.count > 30) {
             console.log('You\'re watching movies all the time!');
         } else {
             console.log('Some shit happened...');
         }
        },
    
    rememberMyFilms: function() {
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
    },
    

    writeYourGenres: function() {
        for (let i=1; i<=3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}?`);
            if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null){
                i--;
            }
        }this.genres.forEach(function(value,i) {
            console.log(`Your favorite genre by number ${i+1} is ${value}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.detectPersLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

