console.log('Декораторы и переадресация вызова, call/apply');
console.log('Прозрачное кэширование');
console.log('')

function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) return 'Again ' + cache.get(x);

        let result = func(x);

        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);

console.log(slow(1)); // 1
console.log(slow(1)); // Again 1 (14 строка)

console.log(slow(2)); // 2
console.log(slow(2)); // Again 2 (14 строка)

