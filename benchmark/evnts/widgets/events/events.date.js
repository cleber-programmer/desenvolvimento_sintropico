Rex('events.date', function ({ ['events.day']: day, ['events.month']: month }) {

  /**
   * Retorna a data formatada para ser utilizado
   * no template dos eventos
   */
  return function({ startDate, endDate }) {
    return `${ day(startDate) }, ${ day(endDate) } de ${ month(endDate) }`;
  };

});