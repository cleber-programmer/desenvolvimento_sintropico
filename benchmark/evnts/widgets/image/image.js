Rex(function ({ atom }) {

  /**
   * Componente responsave por data start ao
   * carregamento da imagem, utilizando a GPU para otimizar
   * o load da pagina
   */
  @atom.component('evnts-image', 'section')
  class Image {

    /**
     * Inicia o carregamento da image quando o componente
     * for atachado no DOM
     */
    @atom.attached
    echo() {
      requestAnimationFrame(() =>
        this.style.backgroundImage = `url(${ this.getAttribute('src') })`
      )
    }

  }

});