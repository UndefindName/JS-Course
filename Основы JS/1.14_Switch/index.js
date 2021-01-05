// Синтаксис
let z = 2 + 2;

switch (z) {
    case 3:
        alert('Маловато');
        break;
    case 4:
        alert('В точку!');
        break;
    case 5:
        alert('Перебор');
        break;    
    default:
        alert("Нет таких значений");
}

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}
// Группировка case
let aa = 1 + 2;

switch (aa) {
    case 4:
        alert('Правильно!');
        break;

    case 3:
    case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break
    default:
        alert('Результат выглядит странновато.');
}
// В case всегда строгая проверка ===
let arg = prompt("Введите число");
switch (arg) {
    case '0':
    case '1':
        alert('Один или ноль');
        break;

    case '2':
        alert('Два');
        break;

    case 3:
        alert('Никогда не выполнится!');
        break;
    default:
        alert('Неизвестное значение');
}
// Задание №1
let browser = prompt("Каким браузером вы пользуетесь?", "Edge");
  if (browser == "Edge") {
      alert("You've got the Edge!");
  } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
      alert('Okay we support these browser too');
  } else {
      alert ('We hope that this page looks ok!')
  }

// Задание №2
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('Я не знаю данного числа')
}