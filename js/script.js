'use strict';

const numberoffilms = prompt('how many films have you watched', '');

const personalMovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    console.log('not enough');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('regular');
} else if (personalMovieDB.count > 30) {
    console.log('a lot');
} else {
    console.log('error');
}

console.log(personalMovieDB);