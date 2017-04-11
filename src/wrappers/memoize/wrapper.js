Rex('memoize.wrapper', function ({ flip, hook }) {

  /**
   * Este wrapper tem a responsabilidade de cachear o retorno do
   * metodo, evitando que o metodo horiginal seja executado em chamadas
   * sequentes
   */
  return function (target) {
    return function () {

      /**
       * Verifica se o metodo alvo ja fora chamado, retornando
       * o valor cacheado
       */
      return target[`@${arguments}`] || (target[`@${arguments}`] = target.apply(this, arguments));

    }
    
  }

});