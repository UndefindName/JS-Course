// Глава 1
console.group("Привет, мир!");
    console.log("Просто вывод в консоль");
console.groupEnd();
console.log("");

// Глава 2
console.group("Переменные")
    const name_C2 = "John";
    const admin_C2 = name_C2;
    console.log(admin_C2);
console.groupEnd();
console.log("");

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
console.log("");

// Глава 4
console.group("Преобразование типов");

// Строковое преобразование
console.log(`Boolean (true) в cтроку: ${String(true)}`); 

// Численное преобразование
console.log(`Boolean (false) в число: ${+false}`);

// Логическое преобразование
console.log(`String (Some Text) в boolean: ${!!("Some Text")}`);

console.groupEnd();
console.log("");

// Глава 5
console.group("Логические операторы");

// 3 оператора: ||(ИЛИ), &&(И), !(НЕ)

console.log("||(ИЛИ)")

console.log(`Возвращает false только в случае когда оба варианта false`);
console.log(`При сравнении возвращает 1е истиное значение или последнее`);
console.log("");

console.log(`&&(И)`)
console.log(`Диаметрально противоположен ||(ИЛИ)`);
console.log("");

console.log(`!(НЕ)`)
console.log(`!(НЕ) преобразует в Boolean, а затем меняет на противоположное значение`)
console.log("");

console.groupEnd();
console.log("");

// Глава 6
console.group("Оператор объединения с null '??'");

console.log("Возвращает первый 'определённый' аргумент или последний");

console.groupEnd();
console.log("");

// Глава 7
console.group("Функции");
console.log("Объявление функции");

console.groupEnd();