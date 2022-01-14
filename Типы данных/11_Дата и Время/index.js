const testDate = new Date("2004-03-30");
console.log(testDate)

console.log(testDate.getTime()); // Возвращает timestamp (1970)
console.log(Date.parse("2017-01-11"));

console.log(testDate.getFullYear()); // Год
console.log(testDate.getMonth()); // Месяц
console.log(testDate.getDate()); // День
console.log(testDate.getHours()); // Час
console.log(testDate.getMinutes()); // Минута
console.log(testDate.getSeconds()); // Секунда
console.log(testDate.getMilliseconds()); // Миллисекунда
console.log(testDate.getDay()); // День недели (с воскресенья)

// Для UTC варианта, пример: "date.getUTCMonth()"

console.log(testDate.getTimezoneOffset()) // Разница в минутак (UTC)

testDate.setFullYear(2222);

// Benchmark

function loop(arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr[i].length - 1; j++) {
            sum += arr[i][j];
        }
    }

    return sum;
}

function red(arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++){
        sum += arr[i].reduce((sum, current) => sum + current);
    }

    return sum
}

function bench(fun) {
    const arr = [[4, 13, 15], [23, 12, 2], [35, 21, 7]];

    const start = Date.now()
     for(let i = 0; i < 10000; i++) fun(arr)
    return Date.now() - start
}

let time1 = 0;
let time2 = 0;

bench(loop)
bench(red)


for (let i = 0; i < 10; i++) {
    time1 += +bench(loop);
    time2 += +bench(red);
}

console.log('Итоговое время loop: ' + time1);
console.log('Итоговое время red: ' + time2);

console.log(performance.now()) 
console.log("")

// Задача №1
console.log("Задача №1");

console.log(new Date(2012, 1, 20, 3, 12));

console.log("")

// Задача №2
console.log("Задача №2");

function getWeekDay(date) {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return days[date.getDay()]
}

getWeekDay(testDate);

console.log("")

// Задача №3
console.log("Задача №3")

function getLocalkDay(date) {
    let day = date.getDay()
    if (day == 0) day = 7;
    return day
}

getLocalkDay(testDate)

console.log("")

// Задача №4
console.log("Задача №4")

function getDateAgo(date, days) {
    let nDate = new Date(date - (days * 86400000)); 
    return nDate.getDate()
}

function getDateAgo2(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(copyDate.getDate() - days);
    return copyDate.getDate()
}

console.log("")

// Задача №5
console.log("Задача №5")

function getLastDayofMounth(year, mont) {
    let date = new Date(year, mont + 1, 0)
    return date.getDate()
}

console.log("")

// Задача №6
console.log("Задача №6");

function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

console.log("");

// Задача №7
console.log("Задача №7")

function getSecondsToTomorrow() {
    let dateNow = new Date()
    let dateTom = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1)

    return Math.round((dateTom - dateNow) / 1000)
}

console.log(getSecondsToTomorrow());

console.log()

// Задача №8
console.log("Задача №8");

function formatDate(date) {
    let now = Date.now()
    
    let dif = now - date;

    let month = +date.getMonth() + 1;

    if (dif < 1000) {
        return console.log("Прямо сейчас");
    } else if (dif < 60_000) {
        console.log(`${Math.round(dif / 1000)} сек. назад`)
    } else if (dif < 3_600_000) {
        console.log(`${Math.round(dif / 60_000)} мин. назад`)
    } else {
        console.log(`${date.getDate() < 0 ? "0" + date.getDate() : date.getDate()}.${month < 10 ? "0" + month : month}.${String(date.getFullYear()).slice(-2)} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`)
    }
}