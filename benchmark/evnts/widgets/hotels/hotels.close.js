Rex('hotels.close', function (r) {

  return function (el) {

    function paint() {
      return '<a class="event_more" href="#">Ver hoteis</a>';
    }

    Object.assign(paint, {
      toggle(){
        return el.paint = r['hotels.open'](el), el;
      }
    });

    return paint;

  };

});