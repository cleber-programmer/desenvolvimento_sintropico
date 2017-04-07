Rex('guid', function () {

  /**
   * Este module cria um valor unico a todo momento que4
   * for chamado
   */
  return function () {
    return (Date.now() * Math.random()).toString(36);
  };

});