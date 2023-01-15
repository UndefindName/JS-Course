console.log('Обработка ошибок, "try..catch"');
console.log('');

try {
    console.log('Начало блока "try"');
    throw new Error("test");
} catch (err) {
    console.log('Возникла ошибка');
    console.log("");
}

console.log('Использование "try..catch"');
console.log('Генерация собственных ошибок');
console.log('Проброс исключений')
console.log('')

let json = '{"age": 30}';

try {
    let user = JSON.parse(json);

    if(!user.name) throw new SyntaxError('Данные неполны: нет имени');

    console.log(user.name)
} catch (err) {
    if (err.name == "SyntaxError") console.log("JSON Error: " + err.message)
    else {throw err}
}

console.log('Глобальный catch');

window.onerror = function(message, url, line, col, error) {
    console.log(`${message}\n В ${line}:${col} на ${url}`)
}