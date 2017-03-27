Rex('memoize', function ({ flip, hook }) {

  return function (target, key, descriptor) {

    hook.before(descriptor, 'value', flip(function (method, ...args) {
      return this[`@${args}`] || (this[`@${args}`] = method.apply(this, args));
    }));

    return descriptor;
    
  }

});