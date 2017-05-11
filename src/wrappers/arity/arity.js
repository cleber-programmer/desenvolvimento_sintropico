Rex('arity', ({ apply, curry }) =>

  /**
   * Altera a assinatura da quantidades de parametros
   * que a funcao alvo possui
   */
  curry((length, target) =>
    (...args) =>
      ({
          '0': function ()            { return curry(target, ...args); }
        , '1': function (a)           { return curry(target, ...args); }
        , '2': function (a, b)        { return curry(target, ...args); }
        , '3': function (a, b, c)     { return curry(target, ...args); }
        , '4': function (a, b, c, d)  { return curry(target, ...args); }
      })[length]));