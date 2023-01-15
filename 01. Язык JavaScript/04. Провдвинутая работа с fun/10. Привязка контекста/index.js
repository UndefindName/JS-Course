console.log('Привязка контекста к функции');
console.log('Потеря "this"');

let user = {
    firstname: "John",
    sayHi() {
        console.log("Привет, " + this.firstname)
    },
};

let f = user.sayHi
f() //Потеря this (Привет, undefined)

console.log('');
console.log('Решение 1: сделать func wrapper()');

// setTimeout(() => user.sayHi(), 0);

console.log('');
console.log('Решение 2: привязать контекст с помощью bind');

function sayName() {
    console.log(this.firstname);
};

sayName.bind(user)(); // bind не вызывай функцию в отличии от call\apply поэтому для вызова на месте надо добавить ()
f = user.sayHi.bind(user);
f();

console.log('');
console.log('Привязывание аргументов и контекста');

function mul(a, b) {return a * b};

let double = mul.bind(null, 2);

console.log(double(5));
console.log(double(10));
console.log(double(15));

console.log('');
console.log('Привязывание аргументов без контекста');

function partial(func, ...bindArgs) {
    return function(...args) {
        func.call(this, ...bindArgs, ...args);
    };
}

console.log('Смотреть в коде');