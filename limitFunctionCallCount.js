
function limitFunctionCallCount(cb, n) {
    let counter = 0;
    return () => {
      if (counter < n) {
          counter++;
        return cb(counter);
      } else return null;
    };
  }

  module.exports = limitFunctionCallCount;
