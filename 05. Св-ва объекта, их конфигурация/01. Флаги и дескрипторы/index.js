console.group('Флаги и дескрипторы свойств');
console.log('Флаги свойств');

let user = {
    name: "John",
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'age', {value: 30}) // создаёт св-во age с фиксированным значением (30)

console.log('');
console.log('Неперечислимое свойство');

console.log('Чтобы не выводить св-во в цикле нужно установить флаг => enumerable: false');