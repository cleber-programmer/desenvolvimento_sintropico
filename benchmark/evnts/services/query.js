Rex('query', function () {

  /**
   * Retorna um objeto com cave e valor dos parametros
   * exeistente da url
   */
  return function () {
    return location.search
                   .substring(1)
                   .split('&')
                   .map((parameter) =>
                      parameter.split('='))
                   .reduce((target, [key, value]) =>
                      Object.assign(target, { [key]: value }), {});
  };

});