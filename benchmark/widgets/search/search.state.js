Rex('search.state', function () {

  /**
   * Estado do widgets Search, separando a responsabilida de consulta
   * dos valores de propriedade evitando a poluicao do codigo
   */
  return function (el) {
    return {

      /**
       * Seta um novo valor para o input
       */
      set input(value) {
        return el.querySelector('input').value = value;
      }

    };
  };

});