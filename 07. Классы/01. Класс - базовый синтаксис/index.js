console.log('Класс: базовый синтаксис');

class User {
    constructor(name) {
        this.name = name;
    };

    sayHi() {
        console.log(this.name)
    }
}

let john = new User('John');
john.sayHi();
console.log(typeof User);

console.log('');
console.log('Class Expression');

let Hi = class MyClass {
    sayHi() {
        console.log('Hi!');
    };
    logClass() {
        console.dir(MyClass)
    }
}

function makeClass(phrase) {
    return class {
        sayHi() {console.log(phrase)}
    };
};

let Hello = makeClass('Hello World!');

Hello.prototype.sayHi();

console.log('');
console.log('get/set, другие сокращения');

class GetName {
    constructor(name) {
        this._name = name;
    };

    get name() {
        return this._name
    };

    set name(val) {
        if (val.length < 4) {
            console.log("Имя слишком короткое");
            return
        }
        this._name = val
    }
}

let geTest = new GetName('John');
console.log(geTest.name);

geTest.name = ""

console.log('');
console.log('Св-ва классов');

class TestProperty {
    name = "Bob";

    sayHi() {
        console.log(this.name)
    }
}

let a = new TestProperty();

console.log('');
console.log('Задача №1');

class Clock {
    constructor({template}) {
        this.template = template;
    };

    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
            console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();