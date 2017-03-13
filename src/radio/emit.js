Rex(function ({ radio, ['radio.handlers']: handlers }) {

  /**
   * Estende a class radio com o metodo statico emit
   */
  Object.assign(radio, {

    /**
     * Emite uma transmissao em um canal especifico, para todos os contextos, repassando
     * uma copia do que foi passado na transmissao
     */
    emit(channel, ...args) {
      for (let [context, proxy] of handlers.entries())
        for (let target of proxy[channel]) target.apply(context, JSON.parse(JSON.stringify(args)));
      return this;
    }

  });

});