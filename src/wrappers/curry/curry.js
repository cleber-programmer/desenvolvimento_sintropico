Rex('curry', ({ ['curry.completed']: completed, ['curry.mapper']: mapper, ['curry.template']: template, partial }) =>

  /**
   * Retorna uma funcao equivalente que seus argumentos nao necessitan
   * de ser fornecida uma de cada vez
   */
  (target) =>
    partial(function curry(feed, ...args) {
      return completed(mapper(feed, args)) ? target(...mapper(feed, args)) : partial(curry, mapper(feed, args)); }, template(target)));