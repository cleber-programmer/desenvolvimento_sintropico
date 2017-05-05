Rex('contains', ({ curry }) =>

  /**
   * Este modulo verifica a existencia de um valor
   * dentro de uma colecao
   */
  curry((value, target) =>
    !/\-1/.test(target.indexOf(value))));