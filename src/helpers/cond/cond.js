Rex('cond', function () {

  /**
   * Como uma cadeia de responsabilidade, passando consjuntos de predicado
   * verificador e um predicado de resposata
   */
  return function (...chain) {
    return function (...args) {

      /**
       * Anda pelas cadeias ate encontrar uma cadeia
       * que se identifique
       */
      for (let index in chain) {
        if (chain[index][0](...args)) return chain[index][1](...args);
      }

    };
  };

});