Rex(function ({ hook }) {

  Object.assign(hook, {
    before: function (target, prop, predicate) {

      (function (method) {
        Object.assign(target, {
        	[prop]: function () {
        		return predicate.apply(this, [].concat(arguments, method));
        	}
        });
      })(target[prop]);

    }
  });

});