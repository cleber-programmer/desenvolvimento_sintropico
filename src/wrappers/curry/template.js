Rex('curry.template', ({ _ }) =>

  /**
   * Monta um gabarito para mapear os parametros
   * fornecidos nas chamadas assincronas
   */
  (predicate) =>
    Array(predicate.length).toString().split(',').map(() => _));