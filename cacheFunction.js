// const cacheFunction = (cb) => {
//     const output = {};
//     return function (arg) {
//       if (output[arg]) return output[arg];
//       output[arg] = cb(arg);
//       return output[arg];
//     };
//   };



function cacheFunction(cb) {
    let cache = {};
    return (num) => {
      if (cache[num] == undefined) {
        cache[num] = cb(num);
        return cache[num];
      } else {
        return cache[num];
      }
    };
  }
  
  module.exports = cacheFunction;