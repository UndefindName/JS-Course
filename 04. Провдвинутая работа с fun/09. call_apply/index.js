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
        if (cache.has(x)) return 'From cache: ' + cache.get(x);

        let result = func.call(this, x);

        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);

console.log(slow(1)); // 1
console.log(slow(1)); // From cache: 1 (14 строка)

console.log('');

console.log(slow(2)); // 2
console.log(slow(2)); // From cache: 2 (14 строка)

console.log('');
console.log('"func.call"');
console.log('');

const worker = {
    someMethod() {
        return 2;
    },

    mult(x) {
        console.log(`Test "call" with ${x}`)
        return x * this.someMethod();
    },

    sum(min, max) { 
        console.log(`Returns the amount of ${min} and ${max}`);
        return min + max;
    }, // Это для func.apply (81 строка)
};

worker.mult = cachingDecorator(worker.mult);

console.log(worker.mult(2));
console.log(worker.mult(2));

console.log('');
console.log('"func.apply"');
console.log('');

function betterDecorator(func, hash) {
    const cache = new Map();

    return function() {
        let key = hash(arguments);
        if (cache.has(key)) return "From cache: " + cache.get(key);

        // let result = func.call(this, ...arguments);
        let result = func.apply(this, arguments)

        cache.set(key, result);
        return result;
    };
};

function hash() {
    return [].join.apply(arguments);
};

worker.sum = betterDecorator(worker.sum, hash);

console.log(worker.sum(3, 5)); // 8
console.log(worker.sum(3, 5)); // From cache: 8

console.log('');
console.log('Заимствование метода'); // 78 строка

console.log('');
console.log('Задачи')

console.log('№1');

function sum(a, b) {
    console.log(a + b);
};

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, args)
    }

    wrapper.calls = [];

    return wrapper
};

sum = spy(sum);

sum(5, 4); // 9
sum(10, 25); // 35

console.log(`call: ${sum.calls[0].join(", ")}\ncall: ${sum.calls[1].join(", ")}`);

console.log('');
console.log('№2');

function f(x) {
    console.log(x);
}

function delay(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments)/* ms */); // ms убран чтобы не ждать вызов
    };
};

let f1000 = delay(f, 1000);
let f2000 = delay(f, 2000);

// f1000('Test 1000ms');
console.log('Test 1000ms');
// f2000('Test 2000ms');
console.log('Test 2000ms');

console.log('');
console.log('№3');

function debounce(func, ms) {
    let coolDown = false;

    return function(x) {
        if (coolDown) return

        coolDown = true;

        func.call(this, x);

        setTimeout(() => coolDown = false, ms)
    };
}

let debTest = debounce(console.log, 1000);

debTest("Выполнится");      
setTimeout(debTest("Не выполнится"), 200);

console.log('');
console.log('№4');

function throttle(f, ms) {
    let coolDown = false;
    let savedArgs = null;
    let savedThis = null;

    return function wrapper() {
        if (coolDown) {
            savedArgs = arguments;
            savedThis = this;
            return
        };

        f.apply(this, x);
        coolDown = true;

        setTimeout(function() {
            coolDown = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms)
    };
};

let throTest = throttle(f, 1000);

throTest(1); // 1
throTest(2); // игнорируется
throTest(3); // 3 после истечения таймера