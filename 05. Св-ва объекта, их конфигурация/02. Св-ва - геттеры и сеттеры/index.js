console.table('Свойства - геттеры и сеттеры');
console.log('');

let user = {
    name: "John",
    surname: "Smith",
    age: 22,
    bDay: '2000.01.23',
    get fullname() {return `${this.name} ${this.surname}`},
    set fullname(str) {[this.name, this.surname] = str.split(' ')},
}

console.log(user.fullname); // get
console.log(user.fullname = "Bob Undefined"); // set
user.fullname = "John Smith";

console.log('');
console.log('Дескрипторы свойств доступа');

Object.defineProperty(user, 'logAge', {
    get() {
        console.log(`Дата: ${this.bDay},\n Возраст: ${this.age}`)
    },
    set(str) {
        this.age = +str
    },
    enumerable: true,
    configurable: true,
    // writable отстутствует в аксессорах
});

user.logAge;
user.logAge = 27
console.log(user.logAge);

console.log('');
console.log('Умные геттеры/сеттеры');

let obj = {
    get name() {
        console.log(this._name);
    },
    set name(val) {
        if (val.length < 4) {
            console.log("Слишком короткое имя");
            return
        }
        
        this._name = val;
    }
}

obj.name = "Pete";
obj.name;

obj.name = '';

console.log('');
console.log('Использование для совместимости');

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    
    Object.defineProperty(this, 'age', {
        get() {
            let todayDate = new Date().getFullYear();
            return todayDate - this.birthday.getFullYear()
        }
    })
}

let john = new User('John', new Date(2000, 0, 25))