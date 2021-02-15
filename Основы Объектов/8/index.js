// Symbol.toPrimitiv &&  toString/valueOf
const user = {
    name: "Bob",
    money: 1000,

    /*
    [Symbol.toPrimitive](hint) {
        console.log(`hint ${hint}`);
        return hint == "string" ? `{name: "{this.name}"}` : this.money;
    },
    */

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    },
};

console.log(user);
console.log(+user);
console.log(user + 500);

// Последующие операции

/*
const x = {
    name: "Tom",
    money: 7,
}

console.log(x);
console.log(+x);
console.log(x + 7);4
*/

const obj = {
    toString() {
        return "3";
    },
};

console.log(obj ** 3);