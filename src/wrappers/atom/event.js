Rex(function (R) {

  /**
   * Extensao do modulo atom, executa os metodo apontoado no decorado que
   * indica o evento de interesse que atenda a query de selecao
   */
  Object.assign(R.atom, {
    event(event, query = '*', bubbling) {

      return function (target, prop, descriptor) {

        /**
         * Executa o metodo hook quey foi decorado pelo decorador
         * event
         */
        function action(e) {
          e.target.matches(query) && this[prop](e);
        }

        /** 
         * Quando o evento createdCallback for disparado, sera adicionado
         * o evento que fora informado no decorator
         */
        function hookCreatedCallback() {
          this.addEventListener(event, action.bind(this), bubbling);
        }

        /** 
         * Quando o evento detachedCallback for disparado, sera removido
         * o evento que fora informado no decorator
         */
        function hookDetachedCallback() {
          this.removeEventListener(event, action.bind(this), bubbling);
        }

        /**
         * Adiciona um hook no metodo createdCallbac pelo hookCreatedCallback 
         */
        R.hook.after('createdCallback', target, hookCreatedCallback);

        /**
         * Adiciona um hook no metodo detachedCallbac pelo hookDetachedCallback 
         */
        R.hook.after('detachedCallback', target, hookDetachedCallback);

        /**
         * Retorna o descriptor sem nenhuma modificacao
         */
        return descriptor;

      };
      
    }
  });

});