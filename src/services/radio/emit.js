Rex(function ({ cond, equals, radio, ['radio.emit.decorator']: decorator, ['radio.emit.service']: service, t }) {

  /**
   * Emite uma transmissao em um canal especifico, para todos os contextos, repassando
   * uma copia do que foi passado na transmissao
   */
  Object.assign(radio, {
    emit() {

      cond(
          [(...args) => equals(args.length, 1), decorator]
        , [t, service]
      )(...arguments);

    }
  });

});