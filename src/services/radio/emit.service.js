Rex('radio.emit.service', function ({ ['radio.handlers']: handlers }) {

  /**
   * Emite uma transmissao em um canal especifico, para todos os contextos, repassando
   * uma copia do que foi passado na transmissao
   */
  return function (channel, ...args) {
    for (let [context, proxy] of handlers.entries())
      for (let target of proxy[channel]) target.apply(context, JSON.parse(JSON.stringify(args)));
    return this;
  };

});