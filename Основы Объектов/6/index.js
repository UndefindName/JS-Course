// Опциональная цепочка '?.'
const user = {
    name: "Tom",
};

const myNum = {
    number: 12n,
};

const test = {
    sayHi() {
        console.log("Hi");
    },
}; 

console.log( user.adress );
console.log( myNum.adress?.street );

console.log( typeof(User?.number) );

// Сокращённое вычисление
let x = 0;

test?.sayHi(x++);

console.log(x) ;

// Другие варианты применения: ?.(), ?.[]
const user1 = {
    admin() {
        console.log("Я администратор");
    }
}

const user2 = {};

user1.admin?.();
user2.admin?.();

const check = {};

check?.name = "John";

console.log( check.name )