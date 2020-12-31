// Задание №1
let answer = prompt('Какое "официальное" название JavaScript?', '');

(answer == "ECMAScript") ?
alert("Правильно!") : alert('Не знаете? "ECMAScript"!');

// Задание №2
let message = prompt("Введите любое число:");

if (message < 0) {
    alert('-1');
} else if (message > 0) {
    alert('1');
} else {
    alert('0');
}

// Задание №3
let result;

(1 + 2 < 4) ?
 result = 'Мало':
 result = 'Много';

alert(result)

// Задание №4
let mesage;
let login = prompt('Кто вы?');

 (login == 'Сотрудник') ?  mesage = 'Привет':
 (login == 'Директор') ?  mesage = 'Здравствуйте':
 (login == '') ?  mesage = 'Нет логина': 
  mesage = '';

alert(mesage)