// Кавычки
console.log(`Кавычки`);

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);
console.log(``);

const guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);

console.log(``);

// Спецсимволы
console.log(`Спецсимволы`);

const Guests = 'Guests:\n * John \n * Bob \n * Tom' // (\n) перенос строки
console.log(Guests);

console.log(`\u00A9`);
console.log(`\u{20331}`);
console.log(`\u{1F60D}`);

console.log('I\'m the Walrus'); // Работает со всеми видами кавычек
console.log(`The backslash: \\`);

console.log(``);

// Длина строки
console.log(`Длина строки`);

console.log(`My\n`.length); // Спецсимволы тоже учитываются // 3

console.log(``);

// Доступ к символам
console.log(`Доступ к символам`);

const str = `Hello`;

console.log(str[0]);
console.log(str.charAt(2));

console.log(str.charAt(str.length  - 1));

for (let char of `Hello`) {
    console.log (char);
};

console.log(``);

// Строки неизменяемы

// Изменение регистра
console.log(`Изменение регистра`);

console.log( 'Interface'.toLowerCase() );
console.log( 'Interface'.toUpperCase() );

console.log( 'Interface'[0].toLowerCase() );

console.log(``);

// Поиск подстроки
console.log(`Поиск подстроки`); // str.indexOf(substr, pos)

const find = 'Widget with id';

console.log( find.indexOf('Widget') ); // 0
console.log( find.indexOf('widget') ); // -1

console.log( find.indexOf('id') ); // 1
console.log( find.indexOf('id', 2) ); // 12

console.log(``);

const testStr = `Ослик Иа-Иа посмотрел на виадук`;
const target = `Иа`;
let pos = -1;

while ((pos = testStr.indexOf(target, pos + 1)) != -1) {
    console.log(pos)
};

if (find.indexOf('Widget') != -1) {
    console.log('Нужно проверять на -1');
};

console.log(``);

// includes, startsWith, endsWith
console.log( `includes, startsWith, endsWith` );

console.log( "Widget with id".includes("Widget") ); // true
console.log( `Widget`.startsWith('Wid') ); // true
console.log( `Widget`.endsWith('get') ); // true

console.log( `` );

// Получение подстроки
console.log( `Получение подстроки` );

const substrTest = "Stringify";

console.log( substrTest.slice(0, 5) ); // Можно использовать -x значения (Поиск с конца)
console.log( substrTest.slice(1) );

console.log( `` );

console.log( substrTest.substring(2, 6) ); // ring // Но не поддерживает -x значения
console.log( substrTest.substring(6, 2) ); // ring

console.log( `` );

console.log( substrTest.substr(2, 5) ); // ringi // 2ое значение это длинна
console.log( substrTest.substr(-4, 3) ); // gif // поддерживает -x

console.log( `` );

// Сравнение строк
console.log( `Сравнение строк` );

console.log( 'a' > 'Z' ); // true
console.log( 'Österreich' > 'Zealand' ); // true

console.log( `z`.codePointAt(0) ); // 122
console.log( `Z`.codePointAt(0) ); // 90

console.log( String.fromCodePoint(90) ); // Z

console.log( '\u005a' ); // Z

console.log( `` );

let symbols = '';

for (let i = 65; i <= 220; i++) {
    symbols += String.fromCodePoint(i);
};

console.log(symbols);

console.log( `` );

// Правильное сравнение
console.log( `Правильное сравнение` ); // Для сравнения используется метод // str.localeCompare(str2)

console.log( 'Österreich'.localeCompare('Zealand') );

console.log( `` );

// Диакратические знаки и нормализация
console.log( `Диакратические знаки и нормализация` );

const sym1 = 'S\u0307\u0323';
const sym2 = 'S\u0323\u0307';

console.log(`sym1 : ${sym1}, sym2 : ${sym2}`);

console.log( sym1 == sym2 );

console.log( sym1.normalize() == sym2.normalize() ); // true

console.log( `` );

// Задание №1
console.log( `Задание №1` );

function ucFirst(word) {
    if (!word) return word;

    return word[0].toUpperCase() + word.slice(1);
};

console.log(ucFirst('степаша') === 'Степаша');

console.log( `` );

// Задание №2
console.log( `Задание №2` );

function checkSpam(message) {
    if (message.includes('Tom') || message.includes('Bob')) return true;
    return false
};

console.log( checkSpam(`Hi I'm Tom`) );
console.log( checkSpam(`Hi I'm Bob`) );
console.log( checkSpam(`Just Hi`) );

console.log( `` );

// Задание №3
console.log( `Задание №3` );

function truncate(str, maxlength) {
    if (str.length > maxlength) return str.slice(0, maxlength) + '...';

    return str;
}

console.log( truncate('Hiiiiiiiiiii', 5) );

console.log( `` );

// Задание №4
console.log( `Задание №4` );

function extractCurrencyValue(value) {
    return +(value.slice(1));
}

console.log( extractCurrencyValue('$750') );
console.log( extractCurrencyValue('$750') == 750 );