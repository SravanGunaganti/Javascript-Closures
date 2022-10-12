const counterFactory = () => {
    let Count = 0;
    return {
      increment() {
        Count++;
        return Count;
      },
      decrement() {
        Count--;
        return Count;
      },
    };
};

module.exports = counterFactory;