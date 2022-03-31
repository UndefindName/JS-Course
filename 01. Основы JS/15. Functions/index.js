function showMessage() {
    alert('Всем привет!');
}

showMessage();
// Внешние переменные

let userName = prompt('Как вас зовут?');

function helloMessage() {
    userName = "Админ";
    let message = 'Привет, ' + userName;
    alert(message);
}

alert(userName);

helloMessage(); 

alert(userName);

// Параметры
let name = prompt("Как вас зовут?");
let text = prompt("Что вы хотите сказать?")

function newMassage(from, text = "текст не добавлен") { // Параметры по умолчанию
    alert(from + ': ' + text);
}

newMassage(name, text);

// Возврат значения
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result);
// 
function checkAge(age) {
  if (age >= 18) {
      return true;
  } else {
      return confirm ('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18)

if (checkAge(age)) {
    alert('Доступ получен');
} else {
    alert ('Доступ закрыт');
}
// 
function showMovie(age){
  if (!checkAge(age)) {
      return;
  }
  
  alert ("Вам показывают кино");
}

showMovie(age);

// Функции == Комментарии
function showPrimes(n) {

    for (let j = 2; j < n; j++){
        if (!isPrime(j)) continue;
    }

    alert(j);
}

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
}

// Задание №1
function checkAgee(age) {
   return (age > 18) ? true : confirm('Родители разрешили?');
}

/*
function checkAgee(age){
   return (age > 18) || confirm('Родители разрешили?');
}
*/

// Задание №2
function min(a, b) {
    return (a < b) ? a : b
}

alert(min(10, 45));

alert(min(16, -5));

// Задание №3
let xx = prompt('Введите число');
let nn = prompt('Введите степень числа');

function pow(x,n){
    return alert(x ** n);
}

pow(xx,nn)