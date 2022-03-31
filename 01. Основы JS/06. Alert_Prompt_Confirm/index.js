// alert
alert("Hi");

// prompt
let age = prompt('Сколько тебе лет?', 0);
alert(`Тебе ${age} лет`);

// confirm
let x = confirm("Выбери кнопку");
if (x === true) {
   alert("Ты нажал ОК");
} else {
   alert("Ты нажал Отмена");
}

// Задание

let name = prompt("Добрый день. Назовите ваше имя!")
alert(`Ваше имя: ${name}`);