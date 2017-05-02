Rex('contains', function () {

  /**
   * Este modulo verifica a existencia de um valor
   * dentro de uma colecao
   */
  return function (value, target) {
    return !/\-1/.test(target.indexOf(value));
  };

});