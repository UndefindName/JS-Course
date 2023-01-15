console.log("new Function");

let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2));

let sayHi = new Function("console.log('Hi')");

sayHi();