const log = console.log;

log('Встроенные прототипы');
log('Изменение встроенных прототипов');

String.prototype.show = function() {log(this)};

console.log("Заимствование у прототипов");

let obj = {
    0: "Hello",
    1: "World!",
    length: 2,
};

obj.join = Array.prototype.join
log(obj.join(", "))

log('');
log('Задачи');

// log('№1');

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
// };

// function f() {
//     log('Hello!');
// }

// f.defer(1000)

// log('№2');

// Function.prototype.defer = function(ms) {
//     return (...args) => {
//         setTimeout(this, ms, ...args)
//     }
// }

// function f(a, b) {
//     log(a + b);
// }

// f.defer(1000)(5, 4)