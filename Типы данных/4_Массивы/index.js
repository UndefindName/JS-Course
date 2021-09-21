// Объявление массивов
console.log( 'Объявление массивов' );

/*
const first = new Array();
const second = [];
*/

const fruits = ['Яблоко', 'Апельсин', 'Слива'];

console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[2] );

fruits[2] = 'Груша';
fruits[3] = 'Лимон';

console.log( fruits[2] );
console.log( fruits[3] );

console.log( fruits.length );
console.log( fruits );
console.log( '' );

const allType = ['Яблоко', {name: 'Том'}, true, function() { console.log('Hello') }];

console.log( allType[0] );
console.log( allType[1].name );
console.log( allType[2] );
console.log( allType[3]() );
console.log( allType );
console.log( '' );

// Методы push/pop, shift/unshift
console.log( 'Методы push/pop, shift/unshift' );

// Методы, работающие с концом массива

// pop
console.log( " pop ");

console.log( fruits.pop() ); //Выведет то что удалит
console.log( fruits );

console.log( '' );

// push
console.log( 'push' );

console.log( fruits.push("Арбуз") ); // Выведет 4 (длинна массива)
console.log( fruits );

console.log( '' );

// shift
console.log( 'shift' );

console.log( fruits.shift() ); //Выведет то что удалит
console.log( fruits );

console.log( '' );

// unshift
console.log( 'unshift' );

console.log( fruits.unshift('Строка') ); // Тоже выводит длинну массива
console.log( fruits );

console.log( '' );

/* Внутреннее ус-во массива
 Массив - это объект, и копируется он так же как объект. Так же к массиву можно добавлять св-ва как в объект, но так делать не стоит.
 (Методы push/pop работают быстрее чем shift/unshift)
*/

// Перебор элементов
console.log( 'Перебор элементов' );

for (let i = 0; i < fruits.length; i++) {
    console.log( fruits[i] )
}

console.log( "" );

for (let fruit of fruits) {
    console.log( fruit )
};

// Не стоит использовать for..in в массивах
console.log( "" );

// length
console.log( "length" );

const test = [];
test[123] = 'Строка';

console.log( test.length )

console.log( "" ); // length можно увеличивать и уменьшать

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr );

arr.length = 4;
console.log( arr );

arr.length = 10;
console.log( arr );

console.log( "" );

// new Array()
console.log( "new Array()" );

const anotherArr = new Array(3);

console.log( anotherArr[0] ); // undefinde 
console.log( anotherArr );
console.log( anotherArr.length );

console.log( "" );

// Многомерные массивы
console.log( "Многомерные массивы" );

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log( matrix[1][1] ); //5

console.log( "" );

// toString
console.log( "toString" );

const stringArr = [1, 2, 3, 4, 5];

console.log( stringArr );
console.log( stringArr.toString() );
console.log( String(stringArr) === '1,2,3,4,5' ); // true

console.log( "" );

console.log( [] + 1 ); // 1
console.log( [1] + 1 ); // 11
console.log( [1,2] + 1 ); // 1,21

console.log( "" );

// Задание №1
console.log( "Задание №1" );

const styles = ['Джаз', 'Блюз'];

console.log(styles.push('Рок-н-ролл'));

console.log(styles[1] = 'Классика');

console.log(styles.shift());

console.log(styles.unshift('Рэп', 'Регги'));

console.log( styles );

console.log( '' );

// Задание №2
console.log( 'Задание №2' );

function sumInput() {
    let arr =[];
    let sum = 0;
    while(1){
        let x = prompt('Введите число:');
        
        if (!isFinite(x) || x === '' || x === null ) break;

        arr.push(+x);
        sum += x;
    }

    return sum;
};

console.log( sumInput() );

console.log( '' );

//  Задание №3
console.log( 'Задание №3' );

function getMaxSubSum(arr) {
    let maxSum = 0;
    let possibleSum = 0;

    for( let number of arr) {
        possibleSum += number;
        maxSum = Math.max(maxSum, possibleSum);
        if (possibleSum < 0) possibleSum = 0;
    }

    return maxSum;
};

console.log( getMaxSubSum( [1, -3, 5, -4, -2, 6]) );
console.log( getMaxSubSum( [-9, 3, 9, -4, 6, -6]) );
console.log( getMaxSubSum( [7, -3, -5, -9, -5, 5]) );
console.log( getMaxSubSum( [-7, 2, 0, -4, -1, 4]) );

/* 
function getMaxSubSum(arr) {

let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let possibleSum = 0;

        for(let j = i; j < arr.length ; j++) {
            possibleSum += arr[j];
            maxSum = Math.max(maxSum, possibleSum);
        };
    }
    return maxSum;
}
    Первый способ решения
*/

/*
function getMaxSubSum(arr) {

    let maxSum = 0;
    let possibleSum = 0;
    
        for (let i = 0; i < arr.length; i++) {
             possibleSum += arr[i];
             maxSum = Math.max(maxSum, possibleSum);
             if(possibleSum < 0) possibleSum = 0;
        }
        return maxSum;
    }

*/