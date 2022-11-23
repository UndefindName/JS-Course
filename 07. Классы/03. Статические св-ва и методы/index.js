console.log('Статические св-ва и методы');

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static publisher = 'John';

    static createTodays() {
        return new this('Сегодняшний дайджест', new Date())
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date
    }
}

let articles = [
    new Article('HTML', new Date(2019, 1, 10)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('JavaScript', new Date(2019, 11, 1))
];

articles.sort(Article.compare);
articles.forEach(console.dir);
console.log(Article.createTodays());

console.log('');
console.log('Статические св-ва');

console.log(Article.publisher);

console.log('');
console.log('Наследование статических св-в и методов');

class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    };

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`); 
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} прячется!`);
    }
}

let rabbits = [
    new Rabbit('Белый кролик', 10),
    new Rabbit('Чёрный кролик', 5),
];

rabbits.sort(Rabbit.compare);

rabbits[0].run()