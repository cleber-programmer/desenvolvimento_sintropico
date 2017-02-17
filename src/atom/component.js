Rex('atom.component', function () {

  return function component(tagName) {
    return function (target) {

      document.registerElement(tagName, {
        prototype: Object.assign(Object.create(HTMLElement.prototype), target.prototype)
      });

    };
  };

});