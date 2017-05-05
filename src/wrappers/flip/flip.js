Rex('flip', () =>

  /**
   * Este modulo inverte a ordem dos pararametro e repassando para o
   * predicate encapsulado
   */
  (predicate) =>

    /**
     * Rece os argumentos atraves do parametro ...args onde sera
     * frito a inversao desses valores sendo aplicado no predicado
     */
    (...args) =>
      predicate.apply(this, args.reverse()));