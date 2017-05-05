Rex('memoize.wrapper', ({ flip, hook }) =>

  /**
   * Este wrapper tem a responsabilidade de cachear o retorno do
   * metodo, evitando que o metodo horiginal seja executado em chamadas
   * sequentes
   */
  (target) =>
    (...args) =>

      /**
       * Verifica se o metodo alvo ja fora chamado, retornando
       * o valor cacheado
       */
      target[`@${args}`] || (target[`@${args}`] = target.apply(target, args)));