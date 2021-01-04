let i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);

// break
let sum = 0;

while (true) {
  let value = +prompt("Введите число", '');

  if (!value) break;
  sum += value;
}
alert( 'Сумма: ' + sum )

// continue
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i);
}
// continue/break не работают после ?

// Метки для continue/break
outer :for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, '');
    if (!input) break outer;
  }
}
alert(`Готово`);

// Задание №1
let ii = 3;

while (ii) {
  alert(ii--);
}
// 1

// Задание №2
let qq = 0;
while(++qq < 5) alert(qq); // От 1 до 4

let qw = 0;
while(qw++ < 5) alert(qw); // От 1 до 5

// Задание №3
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
// В обоих случаях от 0 до 4

// Задание №4
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) alert(i);
}

// Задание №5
while(i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задание №6
while(i < 100) {
    i = prompt("Введите число больше 100:", '')
    if(i == null) break;
  }

// Задание №7
let n = prompt(`Введите длинну промежутка: `, '');
for (let i = 1; i <= n; i++) {
  let sum = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      sum++
    }
    if(j == i && sum == 2) {
      alert(i)
    }
  }
} l