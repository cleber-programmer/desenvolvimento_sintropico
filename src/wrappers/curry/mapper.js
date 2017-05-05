Rex('curry.mapper', ({ _ }) =>

  /**
   * Mapeia uma colecao, substituindo todos os elementos baseado no index
   * de sua localizacao pelo seu correspondente
   */
  (feed, args = [], index = 0) =>
    feed.splice(0, Number.MAX_VALUE, ...feed.map(item => (item == _) ? (args[index++] || _) : item)));