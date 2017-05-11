Rex('cond', function () {

  return function (...chain) {
    return function (...args) {

      let index = -1;

      while(++index < chain.length) {
        if(chain[index][0](...args)) return chain[index][1](...args);
      }

    };
  };

});