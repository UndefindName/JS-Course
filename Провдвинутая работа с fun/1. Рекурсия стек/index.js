function forPow(x, n) {
    let result = 1;
    
    for (let i = 1; i <=n; i++) {
        result *= x;
    }

    return result
}

console.log(forPow(4, 5));

function pow(x, n) {
    if (n==1) return x;
    return x * pow(x, n-1);
}

console.log(pow(4, 5))

const company = {
    sales: [{name: "John", salary: 1000}, {name: "Alice", salary: 600}],

    development: {
        sites: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1600}],
        internals: [{name: "Jack",salary: 1300}]
    }
}

function sumSalaries(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subObj of Object.values(obj)) {
            sum += sumSalaries(subObj)
        }
        return sum
    }
}

console.log(sumSalaries(company));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

const secondList = list.next.next;

list.next.next = null;

list.next.next = secondList;

list = {value: "new item", next: list};

list.next = list.next.next

// Задача №1
console.log("Задача №1 \n Вариант №1")

function forSumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum
};

console.log(`Решение через цикл: ${forSumTo(100)}`)

console.log(' Вариант №2')

function recSumTo(n) {
    if (n == 1) return n
    return n + recSumTo(n - 1)
}

console.log(`Решение через рекурсию: ${recSumTo(100)}`);

console.log(' Вариант №3')

function progSumTo(n){
    return n * (n + 1) / 2;
};

console.log(`Решение через формулу: ${progSumTo(100)}`)

console.log("")

// Задача №2
console.log('Задача №2')

function factorial(n) {
    if (n == 2) return n
    return n * factorial(n - 1)
}

console.log(`5! = ${factorial(5)}`)

console.log("")

// Задача №3
console.log("Задача №3")

function fib(n) {
    let a = 1;
    let b = 2;
     
    for (let i = 3; i < n; i++){
        let c = a * b;
        a = b;
        b = c;
    }

    return b
}

console.log(`8 число Фибоначчи: ${fib(8)}`)

console.log("")

// Задача №4
console.log("Задача №4")

list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList1(list) {
    console.log(list.value)

    if (list.next) printList1(list.next)
}

function printList2(list) {
    for(let i = list; ;i = i.next) {
        console.log(i.value)
        if(i.next == null) break;
    }
}

function printList3(list) {
    let tmp = list;

    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

console.log(printList1(list));
console.log(printList2(list));
console.log(printList3(list));

console.log("")

// Задача №5
console.log("Задача №5")

function printSortList1(list) {
    let tmp = list;
    const arr = [];

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}

function printSortList2(list) {
    if (list.next == null) return console.log(list.value)
    printSortList2(list.next)
    console.log(list.value)
}

printSortList1(list);
console.log("")
printSortList2(list);