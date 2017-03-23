Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    change: function (...properties) {

      function contains(value) {
        return !/\-1/.test(properties.indexOf(value));
      }

      return function (target, prop, descriptor) {

        hook.before(target, 'attributeChangedCallback', function (name, oldValue, newValue, predicate) {
          contains(name) && (this[prop](newValue, oldValue, name), predicate.call(this, name, oldValue, newValue));
        });

        return Object.assign(descriptor, { enumerable: !0 });

      }
    }

  });

});