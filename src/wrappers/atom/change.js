Rex(function (R) {

  /**
   * Extensao do modulo atom, o decorador change notifica o metodo
   * decorado quando o atributo identificado for alterado
   */
  Object.assign(R.atom, {
    change(...properties) {
      return function (target, prop, descriptor) {

        /**
         * Notifica o metodo que fora decorado, para receber o novo valor da
         * propriedade alterado
         */
        function hookCallback(name, oldValue, newValue) {
          R.contains(name, properties) && (this[prop](newValue, oldValue, name));
        }

        /**
         * Altera o metodo attributeChangedCallback para incluir o hook, no momento
         * que este metodo for chamado, sera repassado para o metodo que fora decorado
         */
        R.hook.before('attributeChangedCallback', target, hookCallback);

        /**
         * Retorna o descriptor sem nenhuma modificacao
         */
        return descriptor;

      };
    }
  });

});