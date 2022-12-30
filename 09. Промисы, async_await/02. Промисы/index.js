console.log('Промисы');

let promise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5) resolve('Done!');
    else reject(new Error('Whoops!'))
});

promise.then(
    result => console.log(result),
).catch(
    error => console.log(error),
)

console.log('');
// console.log('Пример: loadScript');

// function loadScript(src) {
//     let promise = new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//         document.body.append(script)
//     })

//     promise.then(
//         script => console.log(script),
//         error => console.log(`Ощибка: ${error.message}`),
//     )

//     return promise
// }

// let promScript = loadScript('script.js')

console.log('Задача №2');

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// };

// delay(1000).then(() => console.log('Выполнилось через 1 секунду'));