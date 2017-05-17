Rex(function (R) {

  it('t', function (ok) {
    ok(/true/.test(R.t()), 'Retorna true');
    ok(/true/.test(R.t(10)), 'Retorna true mesmo passando um valor');
    ok(/true/.test(R.t(true)), 'Retorna true mesmo passando verdadeiro');
  });

});