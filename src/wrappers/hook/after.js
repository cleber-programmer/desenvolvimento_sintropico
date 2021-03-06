Rex(function (R) {

  /**
   * Extensao do modulo Hook, inclusao da funcao after, que
   * executara apos a execao da funcao indicada
   */
  Object.assign(R.hook, {
    after: function (prop, target, predicate) {

      (function (method) {

        /**
         * Sobrescreve o predicator horiginal trocando pelo hook, apos a execucao
         * do predicate horiginal sera passa o retorno para o hook que tambem
         * devera retornar o valo
         */
        Object.assign(target, {
        	[prop]() {
            return predicate.apply(this, method.apply(this, arguments)), method.apply(this, arguments);
        	}
        });
      
      /**
       * Passando como parametro a funcao/metodo que tera o hook, caso
       * a funcao nao exista sera passado um stub
       */
      })(R.memoize(target[prop]) || R.always());

    }
  });

});