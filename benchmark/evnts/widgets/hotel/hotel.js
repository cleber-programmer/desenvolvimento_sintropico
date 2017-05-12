Rex(function ({ atom, template, ['hotel.state']: state }) {

  /**
   * Componente responsavel por renderizar o layout de hotel
   */
  @atom.component('evnts-hotel', 'main')
  class Hotel {

    /**
     * Printa a tela de Hotel, quando o componente for
     * atachado no DOM
     */
    @atom.attached
    async render() {
      this.innerHTML = template('#hotel', await state());
    }

  }

});