// Копирование объектов
let user = {
    name: "Tom",
};

let admin = user;

admin.name = "Jerry";

alert(user.name);

// Сравнение по ссылке

alert(user == admin);
alert(user === admin);

// Клонирование и объеинение объектов, Object.assign
let clone = {};

for (let key in user){
    clone[key] = user[key]
};

clone.name = "Tom";

alert(clone.name);
alert(user.name);

let permissions1 = { canView: true };
let permissions2 = { canEdit: false };

Object.assign(user, permissions1, permissions2);

alert(user.canEdit);
alert(user.canView);

// Вложенное клонирование
let newUser = {
    name: "John",
    sizes: {
        height: 182,
        weight: 50,
    }
};

let newClone = {};

for (let key in newUser) {
    newClone[key] = newUser[key];
    if (typeof(newUser[key]) == "object") {
        newClone[key] = Object.assign({}, newUser[key])
    };
};

alert("Оригинал");
alert(newUser.name);
alert("Клон:");
alert(newClone.name);
alert("Дальше сравнение:");
alert(newClone.sizes == newUser.sizes);

/*
let newClone = Object.assign({}, newUser);
newClone.sizes = Object.assign({}, newUser.sizes)

alert("Сравнение sizes");
alert( newUser.sizes === newClone.sizes );
*/