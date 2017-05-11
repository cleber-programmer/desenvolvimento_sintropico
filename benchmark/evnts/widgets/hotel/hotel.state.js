Rex('hotel.state', function ({ getHotels, query }) {

  return async function () {
    return (await getHotels())[--query().id];
  };

});