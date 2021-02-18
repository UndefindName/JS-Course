// Способы записи чисел
const billion = 1e9; //Тоже что самое что и "1000000000"

// Шестнадцатеричные, двоичные, восьмеричные числа
console.log('Шестнадцатеричные, двоичные, восьмеричные числа');

console.log(0xff);
console.log(0xFF);

const a = 0b11111111;
const b = 0o377;

console.log(a == b);
console.log('');

// toString(base)
console.log('toString(base)');

const num = 255;

console.log( num.toString(16) );
console.log( +num.toString(2) );
console.log('');

// Округление
console.log('Округление');

console.log( Math.floor(4.7545)); // Округляет к меньшему (4)
console.log( Math.ceil(2.17654)); // Округляет к большему (3)
console.log( Math.round(6.45) ); // Округляет к ближайшему (6)
console.log( Math.trunc(9.75) ); // Удаление дробной части (9)

const TestNum = 12.456234;
console.log( +TestNum.toFixed(2) ) // Округляет до определённого знака после запятой, возвращает строку!!!
console.log('');

// Неточные вычисления
console.log('Неточные вычисления');

console.log( 1e5000 ) //Infinity

const sum = +(0.1 + 0.2).toFixed(1);
console.log( sum === 0.3 ) // true

console.log('');

// Проверка: isFinite и isNaN
console.log('Проверка: isFinite и isNaN');

console.log( isNaN(NaN) ); //true
console.log( isNaN('str') ); //true

console.log( NaN == NaN ) // NaN никому не равен

console.log("Число вернёт: " + isFinite('15n') ); //false
console.log("Строка вернёт: " + isFinite('str') ); // Пустая строка вернёт true
console.log("Infinity вернёт: " + isFinite(Infinity) ); // false

// Так же есть Object.is(a, b) используется для сравнения a и b
console.log('');

// parseInt и parseFloat
console.log('parseInt и parseFloat');

console.log( +"100px"); // NaN

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12
console.log( parseFloat('12.3.4') ); // 12.3

// У parseInt есть 2ой аргумент, который обозначает систему счисления

console.log('');

// Другие математические функции
console.log('Другие математические функции');

// (Math.random) Рандом от 0 до 1
console.log( Math.random() );
console.log( Math.random() );
console.log( Math.random() );

// (Math.max/min) Находит максимальное\минимальное значение
console.log( Math.max(3, 5, -10, 0, 2, 4) );
console.log( Math.min(5, 23, 8, 2, 1.5, 0.7) );

// (Math.pow) возводит в степень
console.log( Math.pow(2, 10) );

console.log('');

// Задание №1
console.log('Задание №1');

const first = +prompt("Введите первое число");
const second = +prompt("Введите второе число");

console.log( +(first + second).toFixed(1) );

console.log('');

// Задание №2
console.log('Задание №2');

let number;

function readNumber() {
    do {
        number = prompt("Введите число!")
    } while (!isFinite(number));

    if (number === null || number === '') return null;

    return +number;
}

console.log(`Number is: ${readNumber()}`);

console.log('');

// Задание №3
console.log('Задание №3');

function random(min, max) {
   return min + Math.random() * (max - min);
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

console.log('');

// Задание №4
console.log('Задание №4');

function randomInteger(min, max) {
    return Math.trunc(min + Math.random() * max);
}

console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );
console.log( randomInteger(1, 5) );