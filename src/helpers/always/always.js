Rex('always', () =>

  /**
   * Sempre retorna o mesmo valor quando a funcao de
   * retorno for executado
   */
  (value) =>
    () => value);