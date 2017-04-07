Rex(function ({ storage }) {

  /**
   * Extensao do modulo Storage, incluindo o metodo set cria e/ou altera o valor
   * pela chave forcecia
   */
  Object.assign(storage, {
    set: function (key, value = null) {

      /**
       * Verifica se o valor fornecido é um Objeto ou Array, para executar
       * o parse para Literal antes de ser armazenado evitando erros ou referencia
       */
      function is(value) {
        return /(object|array)\]$/i.test(Object.prototype.toString.call(value));
      }

      /**
       * Cria e/ou altera o valor da chave e devolve a referencia do Storage
       */
      return localStorage.setItem(key, is(value) ? JSON.stringify(value) : value), storage;

    }
  });

});