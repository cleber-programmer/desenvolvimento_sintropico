Rex('queryString', function () {

  /**
   * Crian dinamicamente chave e valor
   */
  function createDynamicKey(target, [key, value]) {
    return Object.assign(target, { [key]: value });
  }

  /**
   * Este servico retorana um JSON de todos os paremetro encontrado
   * na URI
   */
  return function () {
    return new Proxy(
      window.location.search.substring(1).split('&').reduce((target, parameter) => createDynamicKey(target, parameter.split('=')), {}),
      {

        /**
         * Quando nao encontrado um valor, sera forcecido o valor padrao
         */
        get(target, name, receiver) {
          return target[name] || '';
        }

      });
  };

});