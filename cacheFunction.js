
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
