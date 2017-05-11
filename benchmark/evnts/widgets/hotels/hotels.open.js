Rex('hotels.open', function (r) {

  return function (el) {

    async function paint() {
      return r.template('#hotels', { hotels: await r.getHotels() });
    }

    Object.assign(paint, {
      toggle(){
        return el.paint = r['hotels.close'](el), el;
      }
    });

    return paint;

  };

});