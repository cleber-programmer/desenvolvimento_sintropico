Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    attached: function (target, prop, descriptor) {

      hook.after(target, 'attachedCallback', function () {
        this[prop]();
      });

      return descriptor;

    }

  });

});