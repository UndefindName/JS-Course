//  Методы объекта, "this"
let user = {
    name: "John",
    age: 30,
    SayName() {
        alert(this.name)
    },
    SayHi() {
        alert("Hi!");

    }
}

user.SayHi();
user.SayName();

// "this" не фиксированный
function sayName() {
    alert(this.name)
}

let admin = { name: "Админ" };

user.f = sayName;
admin.f = sayName;

admin.f();
user.f();

admin['f']();

// Внутрнняя реализация: Ссылочный тип
user.SayName();

(user.name == "John" ? user.SayName : user.SayHi)() // Теряется "this" внутри метода

// Стрелочные функции используют "this" из внешней функции
let newUser = {
    firstname: "Tom",
    sayHi() {
        let arrow = () => alert(this.firstname);
        arrow();
    },
};

newUser.sayHi();

// Задача №1
let testUser = {
    name: "Jerry",
    go: function() { alert(this.name) },
};

(testUser.go)()

// Задача №2
function makeUser() {
    return {
        name: "Bob",
        ref() {
            return this;
        },
    };
};

let NewTestUser = makeUser();

alert( NewTestUser.ref().name );

// Задача №3
let calculator = {
    read() {
      this.a = +prompt("Первое число?");
      this.b = +prompt("Второе число?");   
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Задача №4
const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log( this.step )
        return this;
    },
};

ladder.up().up().down().showStep();
