(function (modules, proxy) {

  /**
   * 2. Extendo o objeto window, com o modulo 'Rex' e subscrevo
   *    o evento onload
   */
  Object.assign(window, {

    /**
     * 3. Principal Funcao responsavel por registrar e consumir
     *    Modulos, utilizando-se da sobrecarga
     */
    Rex(nameOrModule, module) {
      module ? (proxy[nameOrModule] = module) : modules.push(nameOrModule);
    },

    /**
     * 4. Inicializacao dos Modulos aguarda o evento onload, permitindo
     *    hoisting dos Modulos registrado
     */
    onload() {
      modules.forEach(module => module(proxy, {}));
    }

  });

/**
 * 1. Inicializa o Modulo passando como parametro, um Array Literal e
 *    um Proxy que faz todo o trabalho de Injecao de Dependencia
 */
})([], new Proxy({ '@': {} }, {
  
  /**
   * 5. Intermedeia as chamadas dos Modulos, memoizando o retorno da Funcao
   *    construtora
   */
  get(target, name, receiver) {
    return target['@'][name] || (target['@'][name] = target[name](receiver, {}));
  }
  
}));