console.log('Методы прототипов, obj без __proto__');
console.log('Задача №1');

let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString" ,{
    value() {
        return Object.keys(this).join(",")
    },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
    console.log(key);
};

// alert(dictionary)