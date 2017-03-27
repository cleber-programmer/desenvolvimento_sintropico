Rex(function ({ storage }) {

  function is(value) {
    return /(object|array)\]$/i.test(Object.prototype.toString.call(value));
  }

  Object.assign(storage, {

    set: function (key, value = null) {
      return localStorage.setItem(key, is(value) ? JSON.stringify(value) : value), storage;
    }

  });

});