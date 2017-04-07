Rex('queryString', function () {

  function createDynamicKey(target, [key, value]) {
    return Object.assign(target, { [key]: value });
  }

  return function () {
    return new Proxy(
      window.location.search.substring(1).split('&').reduce((target, parameter) => createDynamicKey(target, parameter.split('=')), {}),
      {
        get(target, name, receiver) {
          return target[name] || '';
        }
      });
  };

});