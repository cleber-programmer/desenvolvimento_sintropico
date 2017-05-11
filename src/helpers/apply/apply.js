Rex('apply', () =>

  /**
   * Executa a funcao passando os parametros
   * subsequentes
   */
  function (target, ...args) {
    return target.apply(this, args); });