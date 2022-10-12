const cacheFunction = require('../cacheFunction');
const cb = (num) => 2 * num;
const result = cacheFunction(cb);
console.log(result(5));
console.log(result(5));
console.log(result(7));
console.log(result());