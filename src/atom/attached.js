Rex(function ({ atom }) {

  Object.assign(atom, {

    attached: function (target, prop, descriptor) {

      let hookAttached = target.attachedCallback || Function;

      Object.assign(target, {
        attachedCallback() {
          descriptor.value.call(this), hookAttached.call(this);
        }      
      });

      return descriptor;

    }

  });

});