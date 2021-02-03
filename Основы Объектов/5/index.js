// Конструкторы, создание объектов через "new"
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

const user = new User("Вася");

console.log(user.name);
console.log(user.isAdmin);

console.log("********************************"); // Строка для разделения вызовов

// Проверка на вызов в режиме конструктора: new.target
function Test() {
    console.log(new.target);
}

Test();

new Test();

console.log("********************************");

// Возврат значения из конструктора return
function AnotherUser(name) {
    this.name = name;
    this.isAdmin = false;

    return {
        name: "Tom",
        isAdmin: true,
    }
}

// Создание методов в конструкторе
function NewUser(name) {
    this.name = name,
    this.sayHi = function() {
        console.log("Меня зовут: " + this.name);
    }
}

const newUser = new NewUser("Bob");

newUser.sayHi();

console.log("********************************");

// Задание №1
const obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() )

console.log("********************************");

// Задание №2
function Calculator() {
    this.read = function() {
        this.a = +prompt("Введите первое число:");
        this.b = +prompt("Введите второе число:");
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

const calculator = new Calculator();
calculator.read();

console.log( "Sum = " + calculator.sum() );
console.log( "Mul = " + calculator.mul() );

console.log("********************************");

// Задание №3
function Accumulator(startingValue) {
    this.value = startingValue,
    this.read = function() {
        let index = +prompt("Введите значение:");
        this.value += index;
    }
}

const accumulator = new Accumulator(5);

console.log( accumulator.value );

accumulator.read();

console.log("********************************");
console.log( accumulator.value );

accumulator.read();

console.log("********************************");
console.log( accumulator.value );

console.log("********************************");
console.log( accumulator.value );