Rex('radio.proxy', function ({ ['radio.handlers']: handlers }) {

  /**
   * Conjultando o contexto com um Proxy, quey ira armazenar os
   * canais
   */
  return function (context) {
    handlers.set(context, new Proxy({}, {

      /**
       * Se um canal ainda nao existir, sera criado o canal e atribuido
       * um novo Set
       */
      get(target, name) {
        return target[name] || (target[name] = new Set);
      }

    }));
  };

});