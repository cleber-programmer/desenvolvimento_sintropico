Rex(function (R) {

  it('always', function (ok) {
    ok(/42/.test(R.always(42)()), '(42)() → 42');
    ok(/42/.test(R.always(42)(10)), '(42)(10) → 42');
    ok(/42/.test(R.always(42)(10)), '(42)(false) → 42');
    ok(/false/.test(R.always(false)()), '(false)() → false');
    ok(/abc/.test(R.always('abc')()), '(abc)() → abc');
    ok(/undefined/.test(R.always(undefined)()), '(undefined)() → undefined');
    ok(/undefined/.test(R.always()(true)), '()(true) → undefined');
  });
});