Rex('guid', () =>

  /**
   * Este module cria um valor unico a todo momento que
   * for chamado
   */
  () =>
    Math.round(Date.now() * Math.random()).toString(36));