// Map
console.group("Map")

console.log(`new Map() - создаёт коллекцию.`);
console.log(`map.set(key, value) - записывает значение по ключу.`);
console.log(`map.get(key) - возвращает значение по ключу или undefined.`);
console.log(`map.has(key) - возвращает true если ключ присутствует в коллекции.`);
console.log(`map.delete(key) - удаляет элемент по ключу.`);
console.log(`map.clear() - очищает коллекцию.`);
console.log(`map.size - возвращает количество элементов`);

console.log('')

// Пример:

const map = new Map();

map.set('1', 'str1');
map.set(1, "num1");
map.set(true, "bool1")

console.log(map.get(1)); // num1
console.log(map.get("1")) // str1
console.log(map.size) // 3

// Map не приводит ключи к одному типу данных

console.log('')

// Map может использовать объекты в роли ключа

const john = {name: "John"};

const visitsCountObj = new Map();

visitsCountObj.set(john, 123);

console.log(visitsCountObj.get(john))

console.groupEnd()

console.log("")

// Перебор Map
console.group('Перебор Map');

const recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);

console.log("Перебор по (ключам)");

for (let key of recipeMap.keys()) {
    console.log(key);
}

console.log("")
console.log("Перебор по (значениям)");

for (let value of recipeMap.values()) {
    console.log(value)
}

console.log("");
console.log("Перебор по элементам")

for (let entry of recipeMap) {
    console.log(entry)
}

// Map поддерживает forEach()

console.groupEnd();
console.log("")

// Object.entries: Map из Obj && Object.fromEntries: Obj из Map 
console.group("Object.entries: Map из Obj && Object.fromEntries: Obj из Map")

const objEntry = {
    name: "John",
    age: 30,
}

const mapEntry = new Map (Object.entries(objEntry));

console.log(`Map из Obj: ${mapEntry}`)

const mapPrice = new Map();
mapPrice.set('banana', 1);
mapPrice.set('orange', 2);
mapPrice.set("meat", 4);

const objPrice = Object.fromEntries(mapPrice);

console.log(`Obj из Map: ${objPrice}`)

console.groupEnd()

console.log('')

// Set
console.group("Set")

console.log(`new Set(iterable) - создаёт Set`);
console.log(`set.add(value) - добавляет значение(если его не было)`);
console.log(`set.delete(value) - удаляет значение`);
console.log(`set.has(value) - true если значение присутствует`);
console.log(`set.clear() - очищает Set`);
console.log(`set.size - колличество элементов`);
// В Set значения не могут повторяться 

console.log('')

// Пример
const set = new Set()

const pete = {name: "Pete"};
const mary = {name: "Mary"};

set.add(john);
set.add(pete);
set.add(john);
set.add(mary);
set.add(mary);

console.log(set.size)

for(let user of set) {
    console.log(user.name)
}

console.groupEnd()

console.log("");

// Перебор Set
console.group("Перебор Set")

const setFruits = new Set(['апельсин', 'яблоко', 'банан',])

console.log("Перебор for..of")
for (let value of setFruits) console.log(value);

console.log('')

console.log("Перебор forEach()")
setFruits.forEach((value) => console.log(value));

console.groupEnd()

console.log('')

// Задачи
console.group('Задачи')

// Задача №1
console.log('Задача №1')

function unique(arr){
    return Array.from(new Set(arr))
}

const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

console.log('')

// Задача №2
console.log('Задача №2')

function aclean(arr) {
    const map = new Map()

    for (let word of arr) {
        let sort = word.toLowerCase().split("").sort().join()
        map.set(sort, word);
    }

    return Array.from(map.values())
}

const arrClean = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arrClean));

console.log('')
// Задача №3

console.log('Задача №3')