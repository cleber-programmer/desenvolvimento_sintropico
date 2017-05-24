Rex('radio.emit.decorator', function ({ partial, ['radio.emit.service']: emit }) {

  /**
   * Emite uma transmissao em um canal especifico, para todos os contextos, repassando
   * uma copia do que foi passado na transmissao
   */
  return function (channel) {
    return function (target, prop, descriptor) {
      
      /**
       * Encapsula o metodo horiginal pelo hookCallback
       */
      hook.after('value', descriptor, partial(emit, channel));

      /**
       * Retorna o descriptor com o metodo alvo alterado
       * pela funcao hookCallback
       */
      return descriptor;

    };
  };

});