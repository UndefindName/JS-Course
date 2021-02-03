// Опциональная цепочка '?.'
let user = {
    name: "Tom",
};

const User = {
    number: 12n,
};

let test = {
    sayHi(x) {
        console.log("Hi");
    },
}; 

console.log( user.adress );
console.log( User.adress?.street );

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

let check = {};

check?.name = "John";

console.log( check.name )