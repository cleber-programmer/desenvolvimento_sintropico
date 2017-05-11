Rex(function ({ hook }) {

  /**
   * Extensao do modulo Hook, inclusao da funcao before, que
   * executara apos a execao da funcao indicada
   */
  Object.assign(hook, {
    before: function (target, prop, predicate) {

      (function (method) {

        /**
         * Sobrescreve o predicator horiginal trocando pelo hook, sera executado
         * antes que recebera todos os parametros adicionado o predicate horiginal no
         * final dos argumentos
         */
        Object.assign(target, {
        	[prop]() {
            return predicate.apply(this, arguments), method.apply(this, arguments);
        	}
        });
      
      /**
       * Passando como parametro a funcao/metodo que tera o hook, caso
       * a funcao nao exista sera passado um stub
       */
      })(target[prop]);

    }
  });

});