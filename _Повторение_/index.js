// Глава 1
console.group("Привет, мир!");
    console.log("JS");
console.groupEnd();

// Глава 2
console.group("Переменные")
    const name_C2 = "John";
    const admin_C2 = name_C2;
    console.log(admin_C2);
console.groupEnd();

// Глава 3
console.group("Типы данных")

 // Число
    let num_C3 = 123;
    num_C3 = 12.345;
console.log(`Число: ${num_C3}`)

// BigInt
    const bigInt_C3 = 5347792384982365829375834647823n;
console.log(`BigInt: ${bigInt_C3}`)

// Строка
    const str_C3 = "Просто текст";
    console.log(`Строка:(${str_C3}) И ${14+23}`); //Обратные кавычки

// Boolean
    const bool_t_C3 = true;
    const bool_f_C3 = false;
console.log(`Boolean: ${bool_t_C3} & ${bool_f_C3}`) 

// null 
    const n_C3 = null;
console.log(`null: ${n_C3}`)

// undefined
    let un_C3 = undefined;
console.log(`undefined: ${un_C3}`)

// Symbol
    const sym_C3 = Symbol('id_C3');
console.log (`Symbol:  ${typeof sym_C3}`)

// Object
    const arr_C3 = [1, 2, 3, 4];
console.log(`object: ${arr_C3}`)

console.groupEnd();

// Глава 4
console.group("Преобразование типов");

// Строковое преобразование
console.log(`Boolean (true) в cтроку: ${String(true)}`); 

// Численное преобразование
console.log(`Boolean (false) в число: ${+false}`);

// Логическое преобразование
console.log(`String (Some Text) в boolean: ${Boolean("Some Text")}`);

console.groupEnd();

// Глава 5
console.group("Логические операторы");

console.groupEnd();