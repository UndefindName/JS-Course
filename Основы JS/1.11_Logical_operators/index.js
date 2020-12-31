// (|| ИЛИ)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    console.log("Офис закрыт.")
}

console.log( 1 || 0 ); 
console.log( true || 'no matter what' ); 

console.log( null || 1 ); 
console.log( null || 0 || 1 ); 
console.log( undefined || null || 0 );

let x;
false || (x = 1);
console.log(x);

let bn = prompt("Введите ваш возрост:", '');
(bn >= 18) || (alert(`Вам ещё нужно подождать: ${18 - bn} лет`));
// На удивдение эти 2 строчки работают, но главное не забывать ; ставить

// (&& И) может находить первое ложное значение
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

let bb = prompt("Введите ваш возрост:", '');
(bb >= 18) && alert("Добрый день, можете проходить!");

// (! НЕ) Высший приоритет, !!value тоже самое что и Boolean(value)

// Задание №1
alert(null || 2 || undefined); // 2

// Задание №2
alert(alert(1) || 2 || alert(3)) // Сперва сработает alert(1) а затем 2

// Задание №3
alert( 1 && null && 2); // null

// Задание №4
alert (alert(1) && alert(2)) // Выведет 1 и undefined

// Задание №5
alert(null || 2 && 3 || 4) // 2 && 3 = 3

// Задание №6
let mm = 47; // mm = age

if (mm >= 14 && mm <= 90) {
    alert("В диапозоне");
}

// Задание №7

// Вариант 1
if (mm <14 || mm > 90) {}
// Вариант 2
if(!(mm >= 14 && mm <= 90)) {}
// Вариант 3
if (!(mm<14 || mm > 90)) {} //Этот вариант был проверен и он тоже является рабочим

// Задание №8
if (-1 || 0) alert( 'first' ); // Выполнится 
if (-1 && 0) alert( 'second' ); // Не выполнится
if (null || -1 && 1) alert( 'third' ); // Выполнится

// Задание №9//
let login = prompt("Кто там?")

if (login == "Админ") {
    let password = prompt("Пароль", "Подсказывать не буду");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password == null) {
        alert("Отмена");
    } else {
        alert("Неверный пароль");
    }
} else if (login == '' || login == null) {
    alert("Отмена")
} else {
    alert("Я вас не знаю")
}