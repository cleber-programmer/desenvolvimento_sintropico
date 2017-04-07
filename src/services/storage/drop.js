Rex(function ({ storage }) {

  /**
   * Extensao do modulo Storage, incluindo o metodo drop que limpa
   * todas as chaves com seu valores
   */
  Object.assign(storage, {
    drop: function () {

      /**
       * Limpa as chaves -> valores, posteriormente retornando o
       * proprio objeto Storage
       */
      return localStorage.clear(), storage;

    }
  });

});