Rex(function (R) {

  /**
   * Extensao do modulo atom, o decorador componente cria um componente
   * como o nome da tag quer fora passado
   */
	Object.assign(R.atom, {
    component(tagName, extending) {
      return function (target) {

        /**
         * Cria um novo Web Components customizado, desde que o nome da tag tenha
         * um hifen e que este nome ja nao foi registrado
         */
      	document.registerElement(tagName, {
          prototype: Object.assign(Object.create(HTMLElement.prototype), target.prototype),
          [extending ? 'extends' : '']: extending
        });

      };
    }
  });

});