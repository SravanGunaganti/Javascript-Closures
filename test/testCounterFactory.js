const counterFactory = require('../counterFactory');

const result = counterFactory();

const increment = result.increment();
const decrement = result.decrement();

console.log('incrementValue:',increment);
console.log('decrementValue;',decrement);