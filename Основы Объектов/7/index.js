// Тип данных Symbol
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2) //false

console.log(typeof(id.toString())); // или String(id1)
console.log(typeof(id.description));
console.log(typeof(id));

// "Скрытые" св-ва
const user = {
    name: "Bob",
};

user[id] = 1;

console.log( user[id] )

let id1 = Symbol("id");
user[id1] = "Другой id";

console.log( user[id1] );

// Символы в литеральном объекте
const AnotherUser = {
    name: "Tom",
    [id]: 123,
};

// Символы игнорируются циклом for...in

const test = {
    name: "Tester",
    age: 54,
    [id]: 321,
};

for (let key in test) console.log(key);

console.log( "Напрямую: " + user[id]);

Object.keys(user)

// Object.assign тоже копирует id
const clone = {...test};

// Глобальные символы
const MyKey = Symbol.for("key");

const CloneKey = Symbol.for("key");

console.log("Проверка равенства: " + (MyKey == CloneKey));

// Symbol.keyFor

const sym = Symbol.for("name");
const sym1 = Symbol.for("Bob");

console.log( Symbol.keyFor(sym) );
console.log( Symbol.keyFor(sym1) );

// Системные символы