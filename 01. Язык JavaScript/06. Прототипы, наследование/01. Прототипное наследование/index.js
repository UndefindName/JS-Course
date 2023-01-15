console.log('Прототипное наследование');
console.log('[[Prototype]]');

let animal = {
    eats: true,
    walk() {
        console.log('Animal walk');
    },
};
let rabbit = {
    _jumps: null,
    get jumps() {return this._jumps},
    set jumps(num) {this._jumps = num},
};

rabbit.__proto__ = animal;
console.log(rabbit.eats);
rabbit.walk();

// __proto__ => get/set for [[Prototype]]
// Есть ещё эти функции для работы с [[Prototype]]: Object.getPrototypeOf/Object.setPrototypeOf

console.log('');
console.log('Операции записи не используют прототип.\nЗначение "this"');

let user = {
    name: "John",
    surname: "Smith",

    set fullName(val) {
        [this.name, this.surname] = val.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    }
};

let admin = {
    __proto__: user,
    isAdmin: true,
}

admin.fullName = "Alice Cooper";

console.group(`Admin/user`);
console.table(admin);
console.table(user);
console.groupEnd();

// get/set fullName остаётся в user, но св-ва name/surname вместо изменения в user, будут созданын в admin
// Метод fullName берётся из прототипа, но выводит значения из admin

console.log('');
console.log('Цикл for...in');

console.log("Цикл видит не только свои, но и унаследованные св-ва");

console.log('');
console.log('Задачи');
console.log('№1')

let head = {
    glasses: 1,
};
let table = {
    __proto__: head,
    pen: 3,
};
let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2,
};
let pockets = {
    __proto__: bed,
    money: 2000,
};