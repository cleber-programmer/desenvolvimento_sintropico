Rex(function ({ storage }) {

  /**
   * Extensao do modulo Storage, incluindo o metodo get devolve o valor
   * pela chave fornecido
   */
  Object.assign(storage, {
    get: function (key, defaultValue = null) {

      /**
       * Parseia o valor caso ele seja um Objeto ou uma Colecao, caso contrario
       * devolve o proprio valor, por padrao o valor sera uma Literal
       */
      function parse(value) {
        return /^(\{|\[).+(\]|\})$/.test(value) ? JSON.parse(value) : value;
      }

      /**
       * Devolve o valor referente a chave que fora passado, caso nao
       * encontrado o valor devolve o valor padrao
       */
      return parse(localStorage.getItem(key)) || defaultValue;

    }
  });

});