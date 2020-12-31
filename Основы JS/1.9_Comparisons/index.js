/*
let name = prompt("Введите ваше имя:")
alert(`Вас зовут ${name}`)
*/

alert(5 > 3);
alert(3 != 6);

alert(null == undefined);
alert(null === undefined);

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false