let x = 1, y = 3;

x = -x; // Унарный операнд
alert(x)

x = -x;
alert(y - x); // Бинарный операнд

// Взятие остатка %
alert(5 % 2);
alert(8 % 3);

// Возведение в степень **
alert(2 ** 2);
alert(2 ** 3);
alert(2 ** 4);

alert(2 ** (1/2));
alert(2 ** (1/3));

// Сложение строк
alert('Первый кусок ' + 'Второй кусок')
alert('1' + 2);
alert(1 + 5 + '7');

// Приведение к числу (+value = Number(value))
alert(+true);
alert(+"");

// Унарные имеют больший приоретет по сравнению с бинарными

// Присваивание
let c = 5 + +true - 2;
alert(c);

// Присваивание = возвращает значение
let a = 3
let b = 2;

let m = a - 2 * (b = a + 1)
alert(m)
alert(b)

// Присваевание по цепочке
let l, u, i;
 i = 3 ** 2;
 u = i;
 l = u;
//  Тоже самое что и y = u = i = 3 ** 2;

// Инкремент/декремент => ++/--

let couter = 1
let r = couter++;
alert(r); // Выведет 1

couter = 1;
r = ++couter;
alert(r) // Выведет 2

// Побитовые операторы (Они есть но пользуются ими не часто)

// Оператор "запятая"

let v = (3 + 5 , 4 + 7);
alert(v) // Выведет 8 (3 + 5) 

// Задание №1
let aa = 1, bb = 1;

let cc = ++aa; // cc = 2
let dd = bb++; // dd = 1

// Задание №2
let a2 = 2;

let x2 = 1 + (a *= 2);

// a2 = 4; x =5 

// Задание №3
/*
 "" + 1 + 0 = 10
 "" - 1 + 0 = -1
 true + false = 1
 6 / "3" = 2
 "2" * "3" = 6
 4 + 5 + "px" = 9px
 "$" + 4 + 5 = $45
 "4" - 2 = 2
 "4px" - 2 = NaN
 7 / 0 = Infinity
 "  -9  " + 5 = -9  5;
 "  -9  " - 5 = -14;
 null + 1 = 1
 undefined + 1 = NaN
 " \t \n" - 2
 */

// Задание №4
let a4 = prompt("Первое число?", 1);
let b4 = prompt("Второе число?", 2);

alert(+a4 + +b4); // 12