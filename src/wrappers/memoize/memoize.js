Rex('memoize', ({ ['memoize.decorate']: decorate, ['memoize.wrapper']: wrapper }) =>

  /**
   * Cacheia o retorno da funcao/metodo, evitando que a execucao do predicado
   * seja executado em chamadas futuras
   */
  (...args) =>

    /**
     * Encontra o modulo correspondente pela o numero
     * de parametros correspondente ao numero de argumentos
     */
    ({
      '1': wrapper
     ,'3': decorate
    }[args.length].apply(null, args)));