Rex('hotels.open', function (r) {

  /**
   * Retorna uma classe responsavel pelo estado aberto
   * do componente hotels
   */
  return function (el) {

    /**
     * Printa o template do estado de aberto, utilizando do
     * motor de templte
     */
    async function paint() {
      return r.template('#hotels', await r['hotels.state']());
    }

    /**
     * Troca o estado atual do template de close para open
     */
    Object.assign(paint, {
      toggle(){
        return el.paint = r['hotels.close'](el), el;
      }
    });

    /**
     * Revelation pattern
     */
    return paint;

  };

});