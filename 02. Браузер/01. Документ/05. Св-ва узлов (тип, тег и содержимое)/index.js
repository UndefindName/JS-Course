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

function decorList(id, elem) {

    let tag = document.getElementById(id);
    let arr = Array.from(tag.getElementsByTagName(elem));

    return function() {
        console.clear()
        arr.forEach((li) => console.log(li.firstChild.data.trim() + ': ' + li.getElementsByTagName('li').length));
        console.log('');
        console.log("Общая длинна: " + arr.length);
    }
}

const innerList = decorList('list', 'li')