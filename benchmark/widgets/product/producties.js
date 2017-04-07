Rex(function ({ atom, findProductList, ['producties.state']: state, ['product.template']: template }) {

  /**
   * Widget com listagem de produtos, que esta sendo utilizado na tela
   * de search
   */
  @atom.component('widgets-producties', 'ul')
  class Categories {

    /**
     * Busca a lista de produtos, referente ao estado do widgets
     * que sao categoryId e result, mapeando cada produto pelo template de produto
     * para montar o html final
     */
    @atom.attached
    async render() {
      this.innerHTML = (await findProductList(state(this))).product.map(template).join('');
    }

  }
  
});