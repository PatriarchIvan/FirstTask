const numberOfFilms = +prompt('How much movies have you seen?','');

const answer1 = prompt('One of the last seen movies?',''),
      rate1 = +prompt('Rate this movie?',''),
      answer2 = prompt('One of the last seen movies?',''),
      rate2 = +prompt('Rate this movie?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[answer1] = rate1;
personalMovieDB.movies[answer2] = rate2;

console.log (personalMovieDB);

