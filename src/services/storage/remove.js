Rex(function ({ storage }) {

  /**
   * Extensao do modulo Storage, incluindo o metodo remove a chave
   */
  Object.assign(storage, {
    remove(key) {

      /**
       * Exlusao da chave e devolve a referencia do Storage
       */
      return localStorage.removeItem(key), storage;

    }
  });

});