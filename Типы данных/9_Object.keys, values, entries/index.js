//  Задача №1

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
}

function sumSalaries(obj) {

    let sum = 0

    for (let num of Object.values(obj)) {
        sum += num
    }

    return sum
}

console.log(sumSalaries(salaries))

// Задача №2

function count(obj) {
    return Object.keys(obj).length
}