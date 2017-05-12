Rex('hotel.state', function ({ getHotels, query }) {

  /**
   * Retorna o estado atual da tela de hotel, com o hotel
   * correspondente do parametro id
   */
  return async function () {
    return (await getHotels())[--query().id];
  };

});