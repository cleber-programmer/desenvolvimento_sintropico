Rex(function ({ atom }) {

  Object.assign(atom, {

    attached: function (target, prop, descriptor) {

      let hookAttached = target.attachedCallback || Function;

      Object.assign(target, {

        attachedCallback() {
          this[prop](), hookAttached.call(this);
        }

      });

      Object.assign(descriptor, { enumerable: !0 });

      return descriptor;

    }

  });

});