Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    created: function (target, prop, descriptor) {

      hook.after(target, 'detachedCallback', function () {
        this[prop]();
      });

      return Object.assign(descriptor, { enumerable: !0 });

    }

  });

});