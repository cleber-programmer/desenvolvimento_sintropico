Rex(function ({ atom, hook }) {

  Object.assign(atom, {

    event: function (event, query = '*', bubbling) {
      return function (target, prop, descriptor) {

        function action(e) {
          e.target.matches(query) && this[prop](e);
        }

        hook.after(target, 'createdCallback', function () {
          this.addEventListener(event, action.bind(this), bubbling);
        });

        hook.after(target, 'detachedCallback', function () {
          this.removeEventListener(event, action.bind(this), bubbling);
        });

        return descriptor;

      };
    }

  });

});