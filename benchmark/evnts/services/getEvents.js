Rex('getEvents', function () {

  return async function () {
    return await (await fetch('http://eng.evnts.rocks/events')).json();
  };

});