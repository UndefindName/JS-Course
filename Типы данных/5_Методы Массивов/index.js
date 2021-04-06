// splice
console.group( 'splice' );

const arrSplice = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];
const spliceRemoved = arrSplice.splice(0, 3, 'Давай', 'танцевать');

console.log(spliceRemoved); // ["Я", "изучаю", "JavaScript"]
console.log( arrSplice ); // ["Давай", "танцевать", "прямо", "сейчас"]

arrSplice.splice(0, 2, 'Я', 'изучаю', 'JavaScript')

arrSplice.splice(2, 0, 'сложный', 'язык');
console.log( arrSplice ); // ["Я", "изучаю", "сложный", "язык", "JavaScript", "прямо", "сейчас"]

console.groupEnd();

//  splice поддерживает -x (arr.splice(X, Y, ...)) (Значение вырезаются не включая Y)

console.log( '' );

// slice
console.group( 'slice' );

const arrSlice = ['t', 'e', 's', 't']; 

console.log( arrSlice.slice(1, 3) ); // ["e", "s"]
console.log( arrSlice.slice(-2) ); //  ["s", "t"]

// arr.slice() Создаёт полную копию массива

console.groupEnd();
console.log( '' );

// concat

console.group( 'concat' );

const arrConcat = [1, 2];

const clone = arrConcat.concat([3, 4]);
console.log( arrConcat ); // [1, 2]
console.log( clone ); // [1, 2, 3, 4]

console.log( clone.concat([5, 6]) ); // [1, 2, 3, 4, 5, 6]
console.log( clone ); // [1, 2, 3, 4]

console.log( '' );

// concat добавляет объекты так как есть, но  если есть специальное св-во [Symbol.isConcatSpreadable] то объект будет обрабатываться как массив
const arrLike = {
    0: 'что-то',
    1: 'ещё',
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

const check = arrConcat.concat(arrLike) // Этот массив нужен для проверки forEach

console.log( check ); // [1, 2, "что-то", "ещё"]
console.groupEnd();
console.log( '' );

// forEach

console.group( 'forEach' );

check.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в массиве (${array})`);
});

console.groupEnd();
console.log( '' );

// Поиск в массиве 

// indexOf/lastIndexOf и include 
console.group( 'indexOf/lastIndexOf и include' );

const arrIndexOf = [1, 0, false, NaN];

console.log( arrIndexOf.indexOf(0) ); // 1
console.log( arrIndexOf.indexOf(false) ); // 2
console.log( arrIndexOf.indexOf(null) ); // -1

console.log( arrIndexOf.indexOf(NaN) ); // -1
 
console.log( arrIndexOf.includes(1) ); // true
console.log( arrIndexOf.includes(NaN) ); // true

console.groupEnd();
console.log( '' );

// find/findIndex
console.group( 'find/findIndex' )

const arrFind = [
    {id: 1, name: "Василий"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
];

const findUser = arrFind.find(item => item.id == 1);

console.log( findUser.name );

console.groupEnd();
console.log( '' );

// filter
console.group( 'filter' );

const filterUsers = arrFind.filter(item => item.id < 3);

console.log( filterUsers.length );

console.groupEnd();
console.log( '' );

// Преобразование массива

// map
console.group( 'map' );

const arrMap = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);

console.log( arrMap );

console.groupEnd();
console.log( '' );

// sort(fn)
console.group( 'sort(fn)' ); // Преобразует в строки и сортирует их по правилам строк

const arrSort = [1, 4, 6, 3, 15, 34, 12, 2, 9, 64, 86];

console.log( arrSort );
console.log( arrSort.sort() );

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log( arrSort.sort(compare) );
console.log( arrSort.sort( (a, b) => a - b ) );

console.groupEnd();
console.log( '' );

// reverse

console.group( 'reverse' );

const arrReverse = [1, 2, 3, 4, 5];

console.log( arrReverse );

arrReverse.reverse()
console.log( arrReverse );

console.groupEnd();
console.log( '' );

// split/join
console.group( 'split/join' ); // Есть 2ой (необязательный) аргумент который ограничивает колличество эллементов

// split

const namesSplit = 'Вася, Петя, Маша';

const namesJoin = namesSplit.split(', ') // Для следующего метода

const arrSplit = namesSplit.split(', ');

for (let name of arrSplit) {
    console.log( `Сообщение получит: ${name}.` );
}

console.log( '' );

// join

const strJoin = namesJoin.join('; ')

console.log( strJoin );

console.groupEnd();
console.log( '' );

// reduce/reduceRight
console.group( 'reduce/reduceRight' );

const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultReduce = arrReduce.reduce((sum, current) => sum + current, 0);

console.log( resultReduce )

// reduceRight тот же самый reduce но идёт справа налево

console.groupEnd();
console.log( '' );

// Aray.isArray
console.group( 'Array.isArray' );

console.log( typeof {} ); // object
console.log( typeof [] ); // object

console.log( Array.isArray({}) ); // false
console.log( Array.isArray([]) ); // true

console.groupEnd();
console.log( '' );

// Большинство методов поддерживают "thisArg"

console.group( 'thisArg' );

const army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    },
};

const armyUser = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30},
];

const soldiers = armyUser.filter(armyUser => army.canJoin(armyUser)); // Тоже вариант: ( armyUser.filter(army.canJoin, army) ), но тот что в коде лучше

console.log( soldiers.length );
console.log( soldiers[0].age );
console.log( soldiers[1].age );

console.groupEnd();
console.log( '' );

// Задания
console.group( 'Задания' );
console.log( '' );

// Задние №1
console.log( 'Задание №1' );

function camelize(str) {
}

camelize( 'background-color' ) == 'backgroundColor';
camelize( 'list-style-image' ) == 'listStyleImage';
camelize( '-webkit-translation' ) == 'WebkitTranslation';

// Test