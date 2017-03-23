Rex(function ({ atom }) {

  Object.assign(atom, {

    detached: function (target, prop, descriptor) {

      let hookDetached = target.detachedCallback || Function;

      Object.assign(target, {
        detachedCallback() {
          this[prop](), hookDetached.call(this);
        }      
      });

      Object.assign(descriptor, { enumerable: !0 });

      return descriptor;

    }

  });

});