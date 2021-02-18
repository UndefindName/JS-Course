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

const String = "Stringify";

console.log( String.slice(0, 5) ); // Можно использовать -x значения (Поиск с конца)
console.log( String.slice(1) );

console.log( `` );

console.log( String.substring(2, 6) ); // ring // Но не поддерживает -x значения
console.log( String.substring(6, 2) ); // ring

console.log( `` );

console.log( String.substr(2, 5) ); // ringi // 2ое значение это длинна
console.log( String.substr(-4, 3) ); // gif // поддерживает -x

console.log( `` );

// Сравнение строк
console.log( `Сравнение строк` );

console.log( 'a' > 'Z' ); // true
console.log( 'Österreich' > 'Zealand' ); // true

console.log( `z`.codePointAt(0) ); // 122
console.log( `Z`.codePointAt(0) ); // 90

console.log( String.fromCodePoint(90) ); // Z