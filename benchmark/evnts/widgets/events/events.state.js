Rex('events.state', function ({ getEvents, ['events.date']: date, ['events.klass']: klass }) {

  /**
   * Retorna o stado atual do componente
   */
  return async function () {
    return { date, klass, events: await getEvents() };
  };

});