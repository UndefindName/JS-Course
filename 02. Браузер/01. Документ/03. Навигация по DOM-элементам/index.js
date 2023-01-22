console.log('Задача №1');

let table = document.getElementById('table')

function color() {
    let cells = [];

    if (cells.length == 0) {
        for (let i = 0; i < table.rows.length; i++) {
            cells.push(table.rows[i].cells[i]);
        }
    }

    if (cells[0].style.background != 'red') {
        cells.forEach((cell) => cell.style.background = 'red')
    } else {
        cells.forEach((cell) => cell.style.background = 'inherit')
    }
}

// function color() {
//     if (!(table.rows[0].cells[0].style.background == 'red')) {
//         for (let i = 0; i < table.rows.length; i++) {
//             let td = table.rows[i].cells[i];
//             td.style.background = 'red';
//         }
//     } else {
//         for (let i = 0; i < table.rows.length; i++) {
//             let td = table.rows[i].cells[i];
//             td.style.background = 'inherit';
//         }
//     }
// }