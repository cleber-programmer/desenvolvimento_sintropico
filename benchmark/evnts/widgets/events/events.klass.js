Rex('events.klass', function ({ always, cond }) {

  return cond(
      [a => /0/.test(a), always('')]
    , [a => /1/.test(a % 2), always('-odd')]
    , [a => /0/.test(a % 2), always('-pair')]
  );

});