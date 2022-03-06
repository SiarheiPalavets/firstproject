"use strict";

let numberoffilms;

function start() {
    numberoffilms = +prompt('how many films have you watched', '');
    while (numberoffilms == '' || numberoffilms == null || isNaN(numberoffilms)) 
    {numberoffilms = prompt('how many films have you watched', '');
    }
}

start();

const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const lastfilm = prompt('last film u watched', ''),
            rate = prompt('rate this film', '');
    
        if (lastfilm != null && rate != null && lastfilm != '' && 
        rate != '' && lastfilm.length < 50) {
            personalMovieDB.movies[lastfilm] = rate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    } 
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('not enough');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('regular');
    } else if (personalMovieDB.count > 30) {
        console.log('a lot');
    } else {
        console.log('error');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYoureGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt (`Your favourite genre no ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYoureGenres();