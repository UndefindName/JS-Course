console.log('F.prototype');
console.log('');

let animal = {
    eats: 'apples',
};

function Rabbit(name) {
    this.name = name;
};

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log(`${rabbit.name} eat: ${rabbit.eats}`);

console.log('');
console.log('F.prototype по умолчанию, св-во constructor');

function ConstrucTest(name) {
    this.name = name;
    console.log(name);
};

let test1 = new ConstrucTest('Tom');
let test2 = new test1.__proto__.constructor('Bob');