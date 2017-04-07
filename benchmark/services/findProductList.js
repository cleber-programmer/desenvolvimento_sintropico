Rex('findProductList', function ({ config, queryString }) {

  return async function ({ categoryId = '', keyword = queryString().keyword, results = config.results }) {
    return new Proxy(
      {
        '@': await (await fetch(`${config.url}/service/findProductList/${config.program}/${config.token}/BR/?categoryId=${categoryId}&format=json&keyword=${keyword}&results=${results}&sourceId=${config.source}`)).json(),
        'product': []
      },
      {
        get(target, name, receiver) {
          return target['@'][name] || target[name];
        }
      }
    );
  };

});