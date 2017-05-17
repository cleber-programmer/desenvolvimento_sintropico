Rex(function (R) {

  it('cond', function (ok) {

    var fn = R.cond(
      [R.equals(0, R._),   R.always('water freezes at 0°C')],
      [R.equals(100, R._), R.always('water boils at 100°C')],
      [R.t,                function(temp) { return 'nothing special happens at ' + temp + '°C'; }]
    );

    ok(/water freezes at 0°C/.test(fn(0)), 'Retorna primeiro item da cadeia');
    ok(/water boils at 100°C/.test(fn(100)), 'Retorna o segundo item da cadeia');
    ok(/nothing special happens at 50°C/.test(fn(50)), 'Retorna o ultimo item da cadeia');

  });

});