Rex('partial', () =>

  /**
   * Aplica os parametros na mesma sequencia, sem a
   * execucao da funcao
   */
  (predicate, ...args) =>
      predicate.bind(predicate, ...args));