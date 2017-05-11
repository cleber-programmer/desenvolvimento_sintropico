Rex('query', function () {

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