console.log('Изменение документа');

function createDIV() {
    let arr = document.querySelectorAll('.alert')
    let div = document.createElement('div');
    let html = document.getElementById('divInput')


    if(arr.length == 7) arr[6].remove()

    console.log(arr.length)

    div.className = 'alert';
    div.innerHTML = `${html.value}`;

    html.value = ''
    document.body.children[1].prepend(div)
}

function check(event) {
    if (event.which == 13) createDIV()
}

console.log