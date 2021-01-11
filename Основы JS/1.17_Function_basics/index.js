// let func = (arg1, arg2, ...argN) => expression

let sum = (a, b) => a + b;

alert( sum(5, 3) );

let sayHi = () => alert("Hi");

sayHi();

let age = prompt("How old are you?", 18);

let welcome = (age < 18) ?
  () => alert("Hi"):
  () => alert("Hello");

  welcome();

// Многострочные стрелочные функции

let summa = (a, b) => {
    let result = a + b;
    return result;
}

alert( summa(5, 23) );

// Задание
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
   "Вы согласны?",
   () => alert("Вы согласились."),
   () => alert("Вы отменили выполнение")
)