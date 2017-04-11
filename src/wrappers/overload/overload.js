Rex('overload', function () {

  /**
   * Modulo olverload é uma sobre carga de metodos, pela
   * quantidades de paremetros e nao pelo tipo de dados como em
   * linguagens que com tipagem de dados
   */
  return function (taraget, key, overrid) {
    (function (method) {

      /**
       * Se a quantidade de items passados em arguments for correspondente
       * com o tamanho do overrid entao sera executado, caso contrario sera executado
       * o metodo que fora sobre carregado
       */
      Object.assign(taraget, {
        [key]() {
          return (overrid.length == arguments.length ? overrid : method).apply(this, arguments);
        }
      });

    })(taraget[key]);
  };

});