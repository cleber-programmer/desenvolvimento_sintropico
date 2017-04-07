Rex('findProductList', function ({ config, queryString }) {

  /**
   * Este servico procura todos os produtos, levando em consideracao o Id da
   * categoria, palavras chaves e numero maximo de items por consulta
   */
  return async function ({ categoryId = '', keyword = queryString().keyword, results = config.results }) {
    return new Proxy(
      {
        '@': await (await fetch(`${config.url}/service/findProductList/${config.program}/${config.token}/BR/?categoryId=${categoryId}&format=json&keyword=${keyword}&results=${results}&sourceId=${config.source}`)).json(),
        'product': []
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