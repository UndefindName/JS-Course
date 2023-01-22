console.log('Св-ва узлов: тип, тег и содержимое');

let btn = document.getElementById('btn');
let oldText = btn.innerHTML;

// function changeText() {
//     if (btn.innerHTML != 'Текст заменился!') {
//         btn.innerHTML = 'Текст заменился!';
//     } else {
//         btn.innerHTML = oldText
//     }
// }

console.log('');
console.log('Задача №1');

let id = document.getElementById('list');
let arr = Array.from(id.getElementsByTagName('li'));

function innerList() {
    console.clear()
    arr.forEach((li) => console.log(li.firstChild.data.trim() + ': ' + li.getElementsByTagName('li').length));
    console.log('');
    console.log("Общая длинна: " + arr.length);
}