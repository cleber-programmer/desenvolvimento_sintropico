Rex('contains', (R) =>

  /**
   * Este modulo verifica a existencia de um valor
   * dentro de uma colecao
   */
  R.curry((value, target = R._) =>
    !/\-1/.test(target.indexOf(value))));