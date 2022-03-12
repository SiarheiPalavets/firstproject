// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта 
// personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
// Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять 
// пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('how many films have you watched', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) 
        {personalMovieDB.count = prompt('how many films have you watched', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('not enough');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('regular');
        } else if (personalMovieDB.count > 30) {
            console.log('a lot');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
    },
    writeYoureGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genres = prompt (`Your favourite genre no ${i}`);
            if (genres == null || genres == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`favourite genre ${i+1} is ${item}`);
        });
    },
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYoureGenres();


