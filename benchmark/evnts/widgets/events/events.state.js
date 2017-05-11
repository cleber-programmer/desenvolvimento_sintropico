Rex('events.state', function ({ getEvents, ['events.date']: date, ['events.klass']: klass }) {

  return async function () {
    return { date, klass, events: await getEvents() };
  };

});