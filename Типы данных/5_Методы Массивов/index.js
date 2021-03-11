// splice
console.log( 'spice' );

const arrSplice = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];
const spliceRemoved = arrSplice.splice(0, 3, 'Давай', 'танцевать');

console.log(spliceRemoved); // ["Я", "изучаю", "JavaScript"]
console.log( arrSplice ); // ["Давай", "танцевать", "прямо", "сейчас"]

arrSplice.splice(0, 2, 'Я', 'изучаю', 'JavaScript')

arrSplice.splice(2, 0, 'сложный', 'язык');
console.log( arrSplice ); // ["Я", "изучаю", "сложный", "язык", "JavaScript", "прямо", "сейчас"]

console.log( '' );
//  splice поддерживает -x (arr.splice(-1, 0, ...))

// slice
console.log( 'slice' );

const arrSlice = ['t', 'e', 's', 't']; 

console.log( arrSlice.slice(1, 3) ); // ["e", "s"]
console.log( arrSlice.slice(-2) ); //  ["s", "t"]

// arr.slice() Создаёт полную копию массива

console.log( '' );

// concat

console.log( 'concat' );

const arrConcat = [1, 2];

const clone = arrConcat.concat([3, 4]);
console.log( arrConcat ); // [1, 2]
console.log( clone ); // [1, 2, 3, 4]

console.log( clone.concat([5, 6]) ); // [1, 2, 3, 4, 5, 6]
console.log( clone ); // [1, 2, 3, 4]

console.log( '' );

// concat добавляет объекты так как есть, но  если есть специальное св-во [Symbol.isConcatSpreadable] то оюъект будет обрабатываться как массив
const arrLike = {
    0: 'что-то',
    1: 'ещё',
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

const check = arrConcat.concat(arrLike) // Это массив нужен для проверки forEach

console.log( check ); // [1, 2, "что-то", "ещё"]

console.log( '' );

// forEach

console.log( 'forEach' );

check.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в массиве (${array})`);
});

// Поиск в массиве 

// indexOf/lastIndexOf и include
console.log( 'indexOf/lastIndexOf и include' );