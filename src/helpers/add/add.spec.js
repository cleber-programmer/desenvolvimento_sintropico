Rex(function (R) {

  it('add', function (ok) {
    ok(/3/.test(R.add('1', '2')), '("1", "2") → 3');
    ok(/3/.test(R.add(1, '2')), '(1, "2") → 3');
    ok(/1/.test(R.add(true, false)), '(true, false) → 1');
    ok(/0/.test(R.add(null, null)), '(null, null) → 0');
    ok(/0/.test(R.add(undefined, undefined)), '(undefined, undefined) → 0');
    ok(/3/.test(R.add(new Date(1), new Date(2))), '(new Date(1), new Date(2)) → 3');
  });

});