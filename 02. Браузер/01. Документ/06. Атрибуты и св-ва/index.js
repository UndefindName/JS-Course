console.log('Атрибуты и св-ва');
console.log('DOM св-ва\n ');

document.body.myData = {
    name: 'Caesar',
    title: 'Imperator',
}

document.body.sayTagName = function () {
    console.log(this.tagName)
}

Element.prototype.sayHi = function () {
    console.log(`Hello, I'm ${this.tagName}`);
}

console.log(document.body.myData.title);

console.log('');
console.log('HTML атрибуты');

console.log(`${document.body.id}\n `);
// console.log(document.body.something);

console.log('Задача №1');

console.log(document.getElementById('widget').dataset.widgetName)

console.log('');
console.log('Задача №2');

let list = document.getElementById('list')

let links = list.querySelectorAll('a')

Array.from(links).forEach((a) => {
    if (a.hasAttribute('href')) {
        let href = a.getAttribute('href')

        if (href.includes('://') && !href.startsWith('http://internal.com'))
        a.style.color = 'orange'
    }
})