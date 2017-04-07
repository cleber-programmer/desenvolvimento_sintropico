Rex('flip', function () {

  /**
   * Este modulo inverte a ordem dos pararametro e repassando para o
   * predicate encapsulado
   */
  return function (predicate) {

    /**
     * Rece os argumentos atraves do parametro ...args onde sera
     * frito a inversao desses valores sendo aplicado no predicado
     */
    return function (...args) {
      return predicate.apply(this, args.reverse());
    };

  };

});