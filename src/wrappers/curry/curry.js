Rex('curry', ({ ['curry.completed']: completed, ['curry.mapper']: mapper, ['curry.template']: template, partial }) =>

  /**
   * Retorna uma funcao equivalente que seus argumentos nao necessitan
   * de ser fornecida uma de cada vez
   */
  (predicate) =>
    partial(function curry(feed, ...args) {
      return mapper(feed, args), completed(feed) ? predicate(...feed) : partial(curry, feed); }, template(predicate)));