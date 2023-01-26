function createDIV() {
    let input = document.getElementById('divInput');
    let card = document.createElement('div');
    let div = document.createElement('div');
    let btn = document.createElement('button');

    // Лимит карточек
    {
        let arr = document.querySelectorAll('.card');
        if (arr.length == 7) arr[0].remove();
    }

    // Создание карточки
    {
        btn.textContent = "Удалить";
        btn.className = 'deleteBtn'
        btn.setAttribute('onclick', 'deleteCard(this)')

        div.innerHTML = `${input.value}`
        div.className = 'alert'

        card.append(div);
        card.append(btn);
        card.className = 'card';

        input.value = ''
        document.body.children[1].append(card)
    }
}

function check(event) {
    if (event.which == 13) createDIV()
}

function clearList() {
    document.querySelectorAll('.card').forEach(elem => elem.remove())
}

function deleteCard(elem) {
    elem.parentNode.remove();
}