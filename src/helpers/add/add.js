Rex('add', (R) =>

  /**
   * Soma dois valores, convertendo valores nao
   * numerico
   */
  R.curry((a, b) => ~~a + ~~b));