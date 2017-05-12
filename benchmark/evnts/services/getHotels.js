Rex('getHotels', function () {

  /**
   * Retorna lista de hoteis
   */
  return async function () {
    return await (await fetch('http://eng.evnts.rocks/hotels')).json();
  };

});