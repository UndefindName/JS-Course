console.log('Наследование классов');
console.log('Ключевое слово "extends"');
console.log('')

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`)
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно.`)
    }
}

class Rabbit extends Animal {
    constructor(name, length) {
        super(name);
        this.earLength = length
    }

    hide() {
        console.log(`${this.name} прячется!`)
    }
    
    stop() {
        super.stop();
        this.hide()
    }
}

let rabbit = new Rabbit("Белый кролик", 10);

rabbit.run(5);
rabbit.stop();

console.log('');
console.log('Задачи')
console.log('№1');

class Clock {
    constructor({template}) {
        this.template = template;
    };

    render() {
        let date = new Date();

        let hours = date.getHours();
        hours < 10 && (hours = '0' + hours);

        let mins = date.getMinutes();
        mins < 10 && (mins = '0' + mins);

        let secs = date.getSeconds();
        secs < 10 && (secs = '0' + secs);

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000)
    }
}