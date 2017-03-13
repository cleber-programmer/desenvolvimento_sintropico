Rex(function ({ atom }) {

  Object.assign(atom, {

    detached: function (target, prop, descriptor) {

      let hookDetached = target.detachedCallback || Function;

      Object.assign(target, {
        detachedCallback() {
          descriptor.value.call(this), hookDetached.call(this);
        }      
      });

      return descriptor;

    }

  });

});