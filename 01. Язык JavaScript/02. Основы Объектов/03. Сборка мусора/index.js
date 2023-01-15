// Пример работы Garbage Collection
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let man = {
    name: "John",
}

let woman = {
    name: "Ann"
}


let family = marry(man, woman);

delete family.father;
delete family.mother.husband;

alert(family.mother.name);
alert(family.father.name)