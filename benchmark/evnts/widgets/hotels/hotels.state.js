Rex('hotels.state', function ({ getHotels }) {

  /**
   * Retorna o estado atual do componente de hotels
   */
  return async function () {
    return await { hotels: await getHotels() };
  };

});