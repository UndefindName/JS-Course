console.log('Браузерное окружение');
console.log('')

function sayHi() {
    console.log('Hello!')
}

window.sayHi();
console.log(window.innerHeight);

console.log('');
console.log('DOM (Document Object Model)');

function changeBg() {
    document.body.style.backgroundColor = 'grey';
    // console.log('Color: grey');
    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        // console.log('Color: black');
    }, 1000);
}

console.log('');
console.log('BOM (Browser Object Model)')

function changeLocation() {
    location.href = 'https://youtube.com'
}