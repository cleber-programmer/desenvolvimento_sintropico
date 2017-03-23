Rex(function ({ atom }) {

	Object.assign(atom, {

    component: function (tagName, extending) {
      return function (target) {

      	document.registerElement(tagName, {
          prototype: Object.assign(Object.create(HTMLUnknownElement.prototype), target.prototype),
          extends: extending
        });

      };
    }

  });

});