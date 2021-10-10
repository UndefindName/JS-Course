// WeakMap
console.group('WeakMap');

const weakMap = new WeakMap();

let obj = {}

weakMap.set(obj, "ok");
console.log(weakMap)

obj = null;
console.log(weakMap)

console.log('')
console.groupEnd();