Rex(function ({ atom, memoize, queryString, ['search.state']: state }) {

  /**
   * Widget de search, responsavel por redirecionar para a pagina de search e por
   * atualizar o valor da query string keyword para o imput
   */
  @atom.component('widgets-search', 'form')
  class Search {

    /**
     * Reflete o valor da query String para o input do component
     */
    @atom.attached
    dataBind() {
      return state(this).input = queryString().keyword.replace(/\+/g, ' '), this;
    }

  }

});