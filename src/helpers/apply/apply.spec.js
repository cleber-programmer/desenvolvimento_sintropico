Rex(function (R) {

  it('apply', function (ok) {
    ok(/42/.test(R.apply(Math.max, 1, 2, 3, -99, 42, 6, 7)), '(Math.max, 1, 2, 3, -99, 42, 6, 7) → 42');
  });

});