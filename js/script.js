"use strict";

const numberoffilms = prompt('how many films have you watched', '');

const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


};

const lastfilm = prompt('last film u watched', ''),
    rate = prompt('rate this film', ''),
    lastfilm1 = prompt('last film u watched', ''),
    rate1 = prompt('rate this film', '');

personalMovieDB.movies[lastfilm] = rate;
personalMovieDB.movies[lastfilm1] = rate1;

console.log(personalMovieDB.movies);