console.log('"instanceof"');

class Animal {
    [Symbol.toStringTag] = "Animal";
    static [Symbol.hasInstance](obj) {
        if(obj.canEat) return true;
    }
}

let obj = {canEat: true};
console.log(obj instanceof Animal)