Rex('events.date', function ({ ['events.day']: day, ['events.month']: month }) {

  return function({ startDate, endDate }) {
    return `${ day(startDate) }, ${ day(endDate) } de ${ month(endDate) }`;
  };

});