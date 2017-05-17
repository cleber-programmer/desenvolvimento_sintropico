Rex('curry.template', ({ _ }) =>

  /**
   * Monta um gabarito para mapear os parametros
   * fornecidos nas chamadas assincronas
   */
  (target) =>
    Array(target.length).toString().split(',').map(() => _));