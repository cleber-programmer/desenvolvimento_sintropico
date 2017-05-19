Rex('radio', function ({ ['radio.handlers']: handlers, ['radio.proxy']: proxy }) {

  /**
   * Uma classe da forma tradicionar, desta forna nao sera
   * preciso do operado new para instanciar
   */
  return function radio(context) {

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
    proxy(context);

    /**
     * Desliga todas as escultas
     */
    function drop() {
      return handlers.delete(context), this;
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

  };

});