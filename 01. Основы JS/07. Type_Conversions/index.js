// Строковое преобразование
let value = true;
alert(typeof(value));
alert(typeof(String(value)));

// Численное преобразвания
alert("100" / "5");

let str = "123";
alert(typeof(str))
alert(typeof(Number(str)))

alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (ошибка чтения числа на месте символа "z")
alert(Number(true));        // 1
alert(Number(false));       // 0

// Логическое преобразование
alert(Boolean(1)); //true

alert(Boolean(0)); //false

alert(Boolean(" ")); //true

alert(Boolean("")); //false

alert(Boolean("0")); //true//