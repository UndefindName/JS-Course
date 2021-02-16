const Bob = {
    name: "Bob",
    SayHi() {
        console.log("Hi, friend!");
    },
}

Bob.SayHi()

// Примитивы как объект

const str = "ПрОстО СТроКа";

console.log( str.toUpperCase() );
console.log( str );
console.log( str.toLowerCase() );

// toFixed(n)
const num = 12.35243231423;

console.log( num.toFixed(2) );


// Задание
const Str = "Hi";

Str.test = 5;

console.log( Str.test );

// Выведет ошибку