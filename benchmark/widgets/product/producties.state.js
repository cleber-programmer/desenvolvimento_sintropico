Rex('producties.state', function () {

  /**
   * Estado do widgets Product, separando a responsabilida de consulta
   * dos valores de propriedade evitando a poluicao do codigo
   */
  return function (el) {
    return {

      /**
       * Numero da categoria de produtos, este valor existira quando o
       * usuario clicar no botao de Ver mais
       */
      get categoryId() {
        return el.getAttribute('category') || '';
      },

      /**
       * Numero de resultado quer serao retornado do API
       */
      get results() {
        return el.getAttribute('results') || ''; 
      }

    };
  };

});