Rex('apply', () =>

  /**
   * Aplica a uma funcao o conjunto de parametros
   */
  (target, ...args) =>
    target.apply(void 0, args));