const arr = ["John", 30];

let [nick, agE] = arr;

console.log(nick + '\n' + agE);

// 

const testOpt = {
    size: {
        width: 100,
        heigtht: 200
    },
    items: ["Cake", "Donut"],
    extra: true,
}

let {
    size: {
        width: wid,
        heigtht: hei,
    },
    items: [desert, desert2],
    title = "Menu",
} = testOpt;

// Задача №1
console.log("Задача №1");

let user = {
    name: "John",
    years: 30,
}

let {name, years: age, isAdmin = false} = user;

console.log(name + "\n" + age + "\n" + isAdmin);
console.log("")

//  Задача №2
console.log("Задача №20");

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries))