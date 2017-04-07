Rex(function ({ atom, topCategories, ['category.template']: template }) {

  /**
   * Monta a lista das melhores Categorias, que esta sendo
   * utilizado na pagina de index
   */
  @atom.component('widgets-categories', 'dl')
  class Categories {

    /**
     * Busca a lista de Categorias e mapeia cada item por um template com
     * seus valores correspondente
     */
    @atom.attached
    async render() {
      this.innerHTML = (await topCategories()).subCategory.map(template).join('');
    }

  }
  
});