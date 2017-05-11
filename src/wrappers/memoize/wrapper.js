Rex('memoize.wrapper', function ({ flip, hook }) {

  /**
   * Este wrapper tem a responsabilidade de cachear o retorno do
   * metodo, evitando que o metodo horiginal seja executado em chamadas
   * sequentes
   */
  return function (target) {
    return function () {
      return target[`@${arguments}`] || (target[`@${arguments}`] = target.apply(this, arguments));
    };
  };

});