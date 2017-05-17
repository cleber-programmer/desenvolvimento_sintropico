Rex('curry.mapper', ({ _ }) =>

  /**
   * Mapeia uma colecao, substituindo todos os elementos baseado no index
   * de sua localizacao pelo seu correspondente
   */
  (feed, args, index = 0) =>
    feed.map(item => (index < args.length && item == _) ? args[index++] : item));