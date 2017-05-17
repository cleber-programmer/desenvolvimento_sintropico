Rex(function (R) {

  it('concat', function (ok) {
    ok(/a,b,c,d/.test(R.concat(['a', 'b'], ['c', 'd'])), '(["a", "b"], ["c", "d"]) → ["a", "b", "c", "d"]');
    ok(/a,b,c,d,e/.test(R.concat(['a', 'b'], ['c', 'd'], 'e')), '(["a", "b"], ["c", "d"], "e") → ["a", "b", "c", "d", "e"]');
    ok(/a,b,c,d,e/.test(R.concat('a', 'b', 'c', 'd', 'e')), '("a", "b", "c", "d", "e") → ["a", "b", "c", "d", "e"]');
  });

});