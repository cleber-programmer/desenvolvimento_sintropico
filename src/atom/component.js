Rex(function ({ atom }) {

	Object.assign(atom, {

    component: function (tagName, extending) {
      return function (target) {

      	document.registerElement(tagName, {
          prototype: Object.assign(Object.create(HTMLElement.prototype), target.prototype),
          [extending ? 'extends' : '']: extending
        });

      };
    }

  });

});