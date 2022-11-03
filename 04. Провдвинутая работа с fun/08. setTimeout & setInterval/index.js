console.log('Планирование: setTimeout & setInterval');
console.log('setTimeout');

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
};

// setTimeout(sayHi, 1000, "Привет", "Андрей"); // Вызово функции произойдёт спусть 1 секкунду с заданными аргументами (закоментил ибо мешает смотреть ответы в консоли)

console.log("Отмена через clearTimeout");

let timerID = setTimeout(() => console.log('test'), 1000);
console.log(timerID);

clearTimeout(timerID);
console.log(timerID)

console.log('');
console.log("setInterval");

// let intervalID = setInterval(() => console.log('tick'), 1000);

// setTimeout(() => {console.log("stop"); clearInterval(intervalID)}, 5000);

console.log('');
console.log('Вложенный setTimeout');

/* let timeID = setTimeout(function tick() {
    console.log('tak');
    timeID = setTimeout(tick, 2000)
}, 2000); */

console.log('');
console.log('Задачи');

console.log('№1');

function printNumbersInterval(a, b) {
    let inter = setInterval(() => {
        console.log(a++)
        if (a > b) clearInterval(inter);
    }, 1000)
};

// printNumbersInterval(1, 10);

function printNumbersTimeout(a, b) {
    setTimeout(function func() {
        console.log(a++);
        if (a <= b) setTimeout(func, 1000);
    }, 1000);
};

// printNumbersTimeout(1, 10);
console.log('Задача решена, решение смотреть вкоде')