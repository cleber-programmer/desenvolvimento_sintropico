Rex(function ({ atom, ['hotels.close']: close }) {

  /**
   * Componente responsavel pelo renderizacao dos hoteis
   * do evento relacionado
   */
  @atom.component('evnts-hotels', 'section')
  class Hotel {

    /**
     * Determina o estado inicia do componente, por padrao
     * o estado close
     */
    @atom.created
    build() {
      this.paint = close(this);
    }

    /**
     * Printa o template do estado atual quando o componente
     * for atachado no DOM
     */
    @atom.attached
    async render() {
      this.innerHTML = await this.paint();
    }

    /**
     * Redireciona para apagin ade hotel, com o parametro do
     * item selecionado
     */
    @atom.event('click', 'td')
    select({ target }) {
      location.assign(`./hotel.html?id=${ target.parentNode.dataset.id }`);
    }

    /**
     * Altera o estado no componten posteriormente renderizando
     * o novo template
     */
    @atom.event('click', 'a')
    toggle(e) {
      e.preventDefault();
      this.paint.toggle().render();
    }
    
  }

});