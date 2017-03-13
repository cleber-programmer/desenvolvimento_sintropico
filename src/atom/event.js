Rex(function ({ atom }) {

  Object.assign(atom, {

    event: function (event, query, bubbling) {
      return function (target, prop, descriptor) {

        let hookCreated = target.createdCallback || Function;
        let hookDetached = target.detachedCallback || Function;

        function action(e) {
          e.target.matches(query) && descriptor.value.call(this, e);
        }

        Object.assign(target, {
          
          createdCallback() {
            this.addEventListener(event, action.bind(this), bubbling), hookCreated.call(this);
          },

          detachedCallback() {
            this.removeEventListener(event, action.bind(this), bubbling), hookDetached.call(this);
          }

        });

        return descriptor;

      };
    }

  });

});