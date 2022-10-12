// const limitFunctionCallCount = (cb, n) => {
//     let call = 0;
//     return function(){
//       if (call>=n){
//         return null;
//       } 
//       call++;
//       return cb();
//     };
// };

// module.exports = limitFunctionCallCount;

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