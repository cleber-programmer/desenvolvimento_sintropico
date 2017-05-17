Rex('partial', (R) =>

  /**
   * Aplica os parametros na mesma sequencia, sem a
   * execucao da funcao
   */
  (target, ...a) =>
    (...b) =>
      target(...R.concat(a, b)));