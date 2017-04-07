Rex('topCategories', function ({ config }) {

  /**
   * Este servico lista as principais categorias
   */
  return async function () {
    return new Proxy(
      {
        '@': await (await fetch(`${config.url}/service/v2/topCategories/${config.program}/${config.token}/BR/?format=json&sourceId=${config.source}`)).json(),
        'subCategory': []
      },
      {

        /**
         * Quando nao encontrado um valor, sera forcecido o valor padrao
         */
        get(target, name, receiver) {
          return target['@'][name] || target[name];
        }

      }
    );
  };

});