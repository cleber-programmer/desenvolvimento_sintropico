Rex(function ({ atom, template, ['events.state']: state }) {

  /**
   * Componente responsavel pela listagem dos eventos
   */
  @atom.component('evnts-event', 'ul')
  class Event {

    /**
     * Renderiza o template quando o componente
     * for atachado no DOM
     */
    @atom.attached
    async render() {
      this.innerHTML = template('#events', await state());
    }

  }

});