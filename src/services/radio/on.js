Rex(function (R) {

  /**
   * Liga a esculta para uma transmissao especifica para o
   * methodo especificado
   */
  Object.assign(R.radio, {
    on(chanell) {

      return function (target, prop, descriptor) {

        /** 
         * Inicia o contexto do radio com a classe e
         * inicializa a esculta
         */
        function hookCreatedCallback() {
          (this.__radio__ || (this.__radio__ = radio(this))).on(chanell, this[prop]);
        }

        /** 
         * Dropa a dependencia do radio quando o Web Component for
         * removido do DOM
         */
        function hookDetachedCallback() {
          this.__radio__.drop();
        }

        /**
         * Sobreescreve o metodo para dar inicio a esculta
         * o evento
         */
        R.hook.after('createdCallback', target, hookCreatedCallback);

        /**
         * Sobreescreve o metodo para dropar a dependencia do radio
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