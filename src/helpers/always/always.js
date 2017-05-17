Rex('always', () =>

  /**
   * Retorna uma função que retorna o objeto
   * inicialmente fornecido
   */
  (value) =>
    () => value);