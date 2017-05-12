Rex('events.klass', function ({ always, cond }) {

  /**
   * Retorna os modificadores de classes para alinhar
   * os eventos no topo, na esquerda ou direita
   */
  return cond(
      [a => /0/.test(a), always('')]
    , [a => /1/.test(a % 2), always('-odd')]
    , [a => /0/.test(a % 2), always('-pair')]
  );

});