Rex('guid', function () {

  /**
   * Este module cria um valor unico a todo momento que
   * for chamado
   */
  return function () {
    return Math.round(Date.now() * Math.random()).toString(36);
  };

});