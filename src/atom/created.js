Rex(function ({ atom }) {

  Object.assign(atom, {

    created: function (target, prop, descriptor) {

      let hookCreated = target.createdCallback || Function;

      Object.assign(target, {

        createdCallback() {
          this[prop](), hookCreated.call(this);
        }

      });

      Object.assign(descriptor, { enumerable: !0 });

      return descriptor;

    }

  });

});