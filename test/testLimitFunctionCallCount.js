const limitFunctionCallCount = require("../limitFunctionCallCount.js");

function cb(counter) {
  return counter;
}
const result = limitFunctionCallCount(cb, 3);

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());