console.log("Пример №1");

let name = 'John';

function sayHi() {
    console.log(`Hi ${name}`);
};

name = "Pete";

sayHi(name); // Pete, берёт последнее значение переменной

console.log("");
console.log('Пример №2');

function makeWorker() {
    let name = "Tom";

    return function() {
        console.log(name);
    };
};

name = "Bob";

let work = makeWorker();

work(); // Tom, имя из области создания

console.log("");
console.log("Вложенные функции");

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + ' ' + lastName;
    };

    console.log('Hello, ' + getFullName());
    console.log('Bye, ' + getFullName());
};

// В данном случае для каждого каутера будет своё лексическое окружение:
function makeCounter() {
    let count = 0;
    return function() {
        return count++
    }
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1(), counter1(), counter1(), "это вызовы counter1");
console.log(counter2(), "а это вызов counter2");

console.log("");
console.log("Блоки кода и циклы, IIFE");
console.log('if');

let phrase = "Hello";

if (1) {
    let user = "John";

    console.log(`${phrase}, ${user}`);
};

// console.log(user); // будет ошибка т.к user локальная переменная для if

console.log("");
console.log("for, while: Для каждой итерации своё лексическое окружение");

console.log("");
console.log("Блоки кода");

let message = "Hi";

{
    let message = 'Bye';
    console.log(message, 'локальное значение из блока');
}

console.log(message, 'глобальное значение');

console.log("");
console.log("IIFE");

(function() {
    let message = "Test message";

    console.log(message + ' из IIFE');
})();

// В настоящий момент писать таким образом нет никакого смысла, но знать об этом не будет лишним

console.log('');
console.log('Сборка мусора');

function f() {
    let value1 = 123;
    let value2 = 456;
    console.log(value1, value2)
};

f(); // В данном случае лексическое окружение удалится сразу после вызова
console.log('');

function i() {
    let value = 789;

    return function() {return value++}
}

const g = i();

console.log(g(), 'первый вызов g()');
console.log(g(), 'второй вызов g()'); // Из-за вложеной функции лексическое окружение сохранится
console.log('');

function r() {
    let value = Math.random();

    return function() {console.log(value)}
};

[r(), r(), r()].forEach((value) => value());

console.log('')
console.log('Оптимизация на практике');

let value = 'Сюрприз!'

function o() {
    let value = 'Ближайшее значение';

    function g() {
        // debugger;
    };

    return g;
};

let testOpt = o();
testOpt(); // Локальный value в ходе оптимизации удаляется и вместо него выводится глобальный

console.log('');
console.log('Задачи');

console.log('№1');

function sum(num1) {
    return function(num2) {
        return num1 + num2
    }
}

console.log(sum(5)(-1))

console.log('');
console.log('№2');

function inBetween(a, b) {
    return function(num) {
        return num >= a && num <= b
    };
};

function inArray(arr){
    return function(num) {
        return arr.includes(num);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // (3, 4, 5, 6)
console.log(arr.filter(inArray([1, 2, 10]))) // (1, 2)

console.log('');
console.log('№3');

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(str){
    return (a, b) => a[str] > b[str] ? 1 : -1
};

console.table(users.sort(byField("name")));
console.table(users.sort(byField("age")));

console.log('');
console.log('№4');

function makeArmy() {
    const shooters =[];

    let i = 0;
    while(i < 10) {
        let a = i;
        let shooter = function() {
            console.log(a)
        };
        
        shooters.push(shooter);
        i++;
    }

    return shooters;
};

const army = makeArmy();

army[0]();
army[5]();