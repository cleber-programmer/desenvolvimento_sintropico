Rex('getEvents', function () {

  /**
   * Retorna lista de eventos
   */
  return async function () {
    return await (await fetch('http://eng.evnts.rocks/events')).json();
  };

});