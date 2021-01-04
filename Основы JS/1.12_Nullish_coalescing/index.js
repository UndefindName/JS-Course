let result = (4 !== null && 4 !== undefined) ? 8 : 6;
alert(result);

let user = "Админ";
alert(user ?? "Аноним")

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

alert(firstName ?? lastName ?? nickName); //В данном случае можно заменить ?? на || и ничего не изменится

let hheight = 0;

alert(hheight || 100); // 100
alert(hheight ?? 100)  // height = 0

let height = 47;
let width = 15;

let area = (height ?? 100) * (width ?? 50);
alert(area)

// Использование ?? вместе с && или ||
let x = (1 && 2) ?? 3;
alert(x)