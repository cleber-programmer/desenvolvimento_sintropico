Rex('arity', (R) =>

  /**
   * Altera a assinatura da quantidades de parametros
   * que a funcao alvo possui
   */
  R.curry((length, target) =>
    (...args) =>
      ({
          '0': function ()            { return R.apply(target, ...args); }
        , '1': function (a)           { return R.apply(target, ...args); }
        , '2': function (a, b)        { return R.apply(target, ...args); }
        , '3': function (a, b, c)     { return R.apply(target, ...args); }
        , '4': function (a, b, c, d)  { return R.apply(target, ...args); }
      })[length]));