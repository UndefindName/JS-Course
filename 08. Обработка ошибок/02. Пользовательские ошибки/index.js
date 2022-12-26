console.log('Пользовательские ошибки, расширение Error');
console.log('')

/*
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("Нет свойства: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}
*/

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
};

class ValidationError extends MyError {};

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super('Нет свойства: ' + property);
        this.property = property
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) throw new PropertyRequiredError('age');

    if (!user.name) throw new PropertyRequiredError('name');

    return user
}

try {
    let user = readUser('{"age": 25}');
} catch(err) {
    if (err instanceof ValidationError) {
        console.log('Некорректные данные: ' + err.message);
        console.log(err.name);
        console.log(err.property);
    }
    else if (err instanceof SyntaxError) {
        console.log('JSON Ошибка Синтаксиса: ' + err.message);
    }
    else {
        throw err
    }
}

console.log('');
console.log('Задача');

class FormatError extends SyntaxError {
    constructor (message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError('Ошибка форматирования');

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);