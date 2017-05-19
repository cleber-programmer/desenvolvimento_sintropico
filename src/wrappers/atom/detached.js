Rex(function (R) {

  /**
   * Extensao do modulo atom, funciona como um deconstructor;
   * Decorador detached executa um metodo quando o Web Component
   * for retirado do DOM
   */
  Object.assign(R.atom, {
    detached(target, prop, descriptor) {

      /**
       * Hook que executara o metodo apontado no decorador no evento
       * de detachedCallback
       */
      function hookCallback() {
        this[prop]();
      }

      /**
       * Troca o metodo detachedCallbac pelo hookCallback que fara o 
       * disparo para o metodo apontotado no decorador no momento em que
       * o Web Component for retirado do DOM
       */
      R.hook.after('detachedCallback', target, hookCallback);

      /**
       * Retorna o descriptor sem nenhuma modificacao
       */
      return descriptor;

    }
  });

});