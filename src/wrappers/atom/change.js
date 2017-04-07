Rex(function ({ atom, contains, hook }) {

  Object.assign(atom, {
    change(...properties) {

      return function (target, prop, descriptor) {

        hook.before(target, 'attributeChangedCallback', function (name, oldValue, newValue, predicate) {
          contains(name, properties) && (this[prop](newValue, oldValue, name), predicate.call(this, name, oldValue, newValue));
        });

        return descriptor;

      };

    }
  });

});