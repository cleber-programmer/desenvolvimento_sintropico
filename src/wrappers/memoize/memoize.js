Rex('memoize', function ({ ['memoize.decorate']: decorate, ['memoize.wrapper']: wrapper }) {

  /**
   * Cacheia o retorno da funcao/metodo, evitando que a execucao do predicado
   * seja executado em chamadas futuras
   */
  return function () {

    /**
     * Encontra o modulo correspondente pela o numero
     * de parametros correspondente ao numero de argumentos
     */
    return {
        '1': wrapper
      , '3': decorate
    }[arguments.length].apply(this, arguments);

  };

});