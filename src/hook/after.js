Rex(function ({ hook }) {

  Object.assign(hook, {
    after: function (target, prop, predicate) {

      (function (method) {
        Object.assign(target, {
        	[prop]: function () {
        		return predicate.call(this, method.apply(this, arguments));
        	}
        });
      })(target[prop] || function () {});

    }
  });

});