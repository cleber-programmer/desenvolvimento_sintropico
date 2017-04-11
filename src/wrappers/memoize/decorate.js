Rex('memoize.decorate', function ({ flip, hook }) {

  /**
   * Este docorador tem a responsabilidade de cachear o retorno do
   * metodo, evitando que o metodo horiginal seja executado em chamadas
   * sequentes
   */
  return function (target, key, descriptor) {

    /**
     * Hook que verifica se o metodo alvo ja fora chamado, retornando
     * o valor cacheado
     */
    function hookCallback(method, ...args) {
      return this[`@${args}`] || (this[`@${args}`] = method.apply(this, args));
    }

    /**
     * Encapsula o metodo horiginal pelo hookCallback
     */
    hook.before(descriptor, 'value', flip(hookCallback));

    /**
     * Retorna o descriptor com o metodo alvo alterado
     * pela funcao hookCallback
     */
    return descriptor;
    
  }

});