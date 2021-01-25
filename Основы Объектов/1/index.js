// Литералы и св-ва

let user = {
  name: "John",
  age: 30,
  "likes birds": false,
}; 
// или let user = new Object()

alert(user.name);
alert(user.age);
alert(user["likes birds"]) // В случае названий такого типа использовать []

user.isAdmin = true; // Добавление
alert(user.isAdmin);

delete user.age; // Удаление
alert(user.age);

let key = prompt('Что вы хотите узнать?', "name");
alert(user[key]);

// Вычисляемые св-ва

let fruit = prompt("Какой фрукт купить?", 'apple')

let bag = {
    [fruit]: 5,
} 

alert(bag[fruit]);

let gadget = prompt("Что именно вас интересует?", "Notebook");

let bag2 = {
    ["Apple" + gadget]: 7,
}

alert(bag2["Apple" + gadget])

// Св-ва из переменной

function makeUser(name, age) {
    return {
        name,
        age,
 };
}

let newUser = makeUser('John', 30);

alert( newUser.age );
alert( newUser.name );

/* Ограничения на названия св-в нет, а названия ввиде чисел 
становятся строками (c __proto__ так не раюотает)*/

// Проверка существования св-в (in)

alert( "name" in newUser );
alert( "qwerty" in newUser );

// for ( key in obj)

for ( let key in newUser ) {
    alert( key );
    alert( newUser[key] );
}

// Упорядочение св-в объекта

let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США",
};

for (let code in codes) {
    alert(+code);
    alert(codes[code]);
}

// Задание №1
let uuser = {};

uuser.name = "John";
uuser.surname = "Smith";
uuser.name = "Pete";
delete uuser.name;

// Задание №2
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Задание №3
let sum = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// Задание №4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if ( typeof(obj[key]) == 'number' ) {
            obj[key] *= 2;
        }
    }
}