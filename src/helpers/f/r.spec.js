Rex(function (R) {

  it('f', function (ok) {
    ok(/false/.test(R.f()), 'Retorna falso');
    ok(/false/.test(R.f(10)), 'Retorna falso mesmo passando um valor');
    ok(/false/.test(R.f(true)), 'Retorna falso mesmo passando verdadeiro');
  });

});