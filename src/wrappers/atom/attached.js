Rex(function (R) {

  /**
   * Extensao do modulo atom, decorador attached executa um metodo
   * quando o Web Component for apendado no DOM
   */
  Object.assign(R.atom, {
    attached(target, prop, descriptor) {

      /**
       * Hook que executara o metodo apontado no decorador no evento
       * de attachedCallback
       */
      function hookCallback() {
        setImmediate(this[prop].bind(this));
      }

      /**
       * Troca o metodo attachedCallbac pelo hookCallback que fara o 
       * disparo para o metodo apontotado no decorador no momento em que
       * o Web Component for atachado no DOM
       */
      R.hook.after('attachedCallback', target, hookCallback);

      /**
       * Retorna o descriptor sem nenhuma modificacao
       */
      return descriptor;

    }
  });

});