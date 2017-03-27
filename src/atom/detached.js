Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    detached: function (target, prop, descriptor) {

      hook.after(target, 'detachedCallback', function () {
        this[prop]();
      });

      return descriptor;

    }

  });

});