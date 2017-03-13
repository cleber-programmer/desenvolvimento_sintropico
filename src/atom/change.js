Rex(function ({ atom }) {

  Object.assign(atom, {

    change: function (...properties) {
      return function (target, prop, descriptor) {

        let hookAttribute = target.attributeChangedCallback || function () {};

        function contains(value) {
          return !/\-1/.test(properties.indexOf(value));
        }

        Object.assign(target, {
          attributeChangedCallback(name, oldValue, newValue) {
            contains(name) && (descriptor.value.call(this, newValue, oldValue, name), hookAttribute.call(this, name, oldValue, newValue));
          }      
        });

        return descriptor;

      }
    }

  });

});