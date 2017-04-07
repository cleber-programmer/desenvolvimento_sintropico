Rex('topCategories', function ({ config }) {

  return async function () {
    return new Proxy(
      {
        '@': await (await fetch(`${config.url}/service/v2/topCategories/${config.program}/${config.token}/BR/?format=json&sourceId=${config.source}`)).json(),
        'subCategory': []
      },
      {
        get(target, name, receiver) {
          return target['@'][name] || target[name];
        }
      }
    );
  };

});