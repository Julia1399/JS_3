let numberOfFilms = ''
let personalMovieDB = {
    count: '',
    movies: {},
    actors: {}, 
    genres: [], 
    privat: false
};
while (numberOfFilms === '' || numberOfFilms === null){
    numberOfFilms = prompt('Сколько фильмов Вы посмотрели?');
}

personalMovieDB.count = numberOfFilms;


for (i = 0; i<2;){
    let film = prompt('Один из последних просмотренных фильмов?');
    let rate = prompt('На сколько оцените его?');
    if (film !== '' && rate !=='' && film !== null 
    && rate !== null && film.length < 50 ){
        personalMovieDB.movies[film] = rate;
        i++
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
} else {
        console.log('Произошла ошибка');
}

function writeYourGenres(){
    for (i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYourGenres()

function showMyDB(){
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB()
