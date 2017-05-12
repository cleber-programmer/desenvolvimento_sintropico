Rex('hotels.close', function (r) {

  /**
   * Retorna uma classe responsavel pelo estado fechado
   * do componente hotels
   */
  return function (el) {

    /**
     * Printa o template do estado de fechado
     */
    function paint() {
      return '<a class="event_more" href="#">Ver hoteis</a>';
    }

    /**
     * Troca o estado atual do template de close para open
     */
    Object.assign(paint, {
      toggle(){
        return el.paint = r['hotels.open'](el), el;
      }
    });

    /**
     * Revelation pattern
     */
    return paint;

  };

});