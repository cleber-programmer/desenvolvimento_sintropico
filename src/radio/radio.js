Rex('radio', function (_, { handlers = new Map() }) {

  function radio(context) {

    /**
     * Para utilizarmos o new em todas as refencias, forço de
     * forma transparente a criacao de uma nova instancia
     */
    if (!(this instanceof radio)) {
      return new radio(context);
    }

    /**
     * Conjultando o contexto com um Proxy, quey ira armazenar os
     * canais
     */
    handlers.set(context, new Proxy({}, {

      /**
       * Se um canal ainda nao existir, sera criado o canal e atribuido
       * um novo Set
       */
      get(target, name) {
        return target[name] || (target[name] = new Set);
      }

    }));

    /**
     * Desliga todas as escultas
     */
    function drop() {
      return handlers.get(context).clear(), this;
    }

    /**
     * Localiza dentro do Map o canal pelo contexto conjulgado
     */
    function get(channel) {
      return handlers.get(context)[channel];
    }

    /**
     * Desliga a esculta de uma transmissao especifica
     */
    function off(channel, target) {
      return get(channel).delete(target), this;
    }

    /**
     * Liga a esculta para uma transmissao especifica
     */
    function on(channel, target) {
      return get(channel).add(target), this;
    }

    /**
     * Pattern revelation
     */
    return { drop, off, on };

  }

  /**
   * Estende a class radio com o metodo statico emit
   */
  return Object.assign(radio, {

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