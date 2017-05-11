Rex('getHotels', function () {

  return async function () {
    return await (await fetch('http://eng.evnts.rocks/hotels')).json();
  };

});