Rex('curry.completed', ({ _ }) =>

  /**
   * Verifica se todos os parametros foram passado
   * para entao poder executar a funcao predicada
   */
  (target) =>
    /-1/.test(target.indexOf(_)));