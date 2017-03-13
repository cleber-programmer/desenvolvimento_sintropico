Rex(function ({ atom }) {

  Object.assign(atom, {

    created: function (target, prop, descriptor) {

      let hookCreated = target.createdCallback || Function;

      Object.assign(target, {
        createdCallback() {
          descriptor.value.call(this), hookCreated.call(this);
        }      
      });

      return descriptor;

    }

  });

});