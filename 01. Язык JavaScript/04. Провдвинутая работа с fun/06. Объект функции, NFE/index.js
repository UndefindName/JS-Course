console.log("Объект функции");
console.log("")
console.log("Свойство 'name'");

function sayHi() {
    console.log("Hi");
};

console.log(`Имя функции: ${sayHi.name}`);
console.log("");

console.log("Свойство 'length'");

function f1(a) {};
function f2(a, b) {};
function f3(a, b, ...rest) {};

console.log(`Длинна f1:${f1.length}, f2:${f2.length}, f3:${f3.length}`) // rest не учитывается в подсчёте длинны

function ask(question, ...handlers) {
    let isYes = true; //confirm(question)

    for (const handler of handlers) {
      if (!handler.length) {
        if (isYes) handler()
      } else {
        handler(isYes);
      }
    };
}

ask("Вопрос?", () => console.log("Вы ответили да"), result => console.log(result));

console.log("");
console.log("Пользовательские свойства");

function sayBye() {
    sayBye.counter++;

    return "Bye";
};

sayBye.counter = 0;

console.log(sayBye(), sayBye(), sayBye(), "\nКолличество вызово sayBye:" + sayBye.counter);

console.log("");
console.log("Named Function Expression");

let namedFe = function func(name) {
    name ? console.log("Hi " + name) : func("Guest");
}
// При вызове namedFe.name вернёт (func), а не (namedFe)

namedFe();
namedFe("John");

console.log("");
console.log("Задачи");

console.log("№1");

function makeCounter() {
    let count = 0;

    func.set = (num) => count = num;
    func.decrease = () => --count

    function func() {
        return count++
    }

    return func 
}

let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
  
counter.set(10); // установить новое значение счётчика
  
console.log( counter() ); // 10
  
counter.decrease(); // уменьшить значение счётчика на 1
  
console.log( counter() ); // 10 (вместо 11)

console.log("");
console.log("№2");

function sum(a) {
    let currentSum = a;

    function func(b) {
        currentSum += b
        return func
    }

    func[Symbol.toPrimitive] = () => currentSum

    return func
}

console.log(+sum(1)(2)); // 3
console.log(+sum(5)(-1)(2)); // 6
console.log(+sum(6)(-1)(-2)(-3)); // 0
console.log(+sum(0)(1)(2)(3)(4)(5)); // 15