console.log('Расширение встроенных классов');

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // static get [Symbol.species]() {
    //     return PowerArray
    // }

    static test() {
        return 'Hi'
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr);
console.log(filteredArr.isEmpty())