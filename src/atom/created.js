Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    created: function (target, prop, descriptor) {

      hook.after(target, 'createdCallback', function () {
        this[prop]();
      });

      return descriptor;

    }

  });

});