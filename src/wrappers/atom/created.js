Rex(function () {

  /**
   * Extensao do modulo atom, funciona com um constructor;
   * Decorador created executa um metodo quando o Web Component for
   * criado, antes de ser apendado no DOM
   */
  Object.assign(R.atom, {
    created(target, prop, descriptor) {

      /**
       * Hook que executara o metodo apontado no decorador no evento
       * de createdCallback
       */
      function hookCallback() {
        setImmediate(this[prop].bind(this));
      }

      /**
       * Troca o metodo createdCallbac pelo hookCallback que fara o 
       * disparo para o metodo apontotado no decorador no momento em que
       * o Web Component for criado
       */
      R.hook.after('createdCallback', target, hookCallback);

      /**
       * Retorna o descriptor sem nenhuma modificacao
       */
      return descriptor;

    }
  });

});