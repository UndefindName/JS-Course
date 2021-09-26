console.group("Symbol.iterator")

const range = {
    from: 0,
    to: 5,
}

range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

for (let num of range) {
  console.log(num)
}

console.log()
console.groupEnd()

console.group('Явный вызов итератора')

const str = 'Hello';

const iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value)
}