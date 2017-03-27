Rex(function ({ storage }) {

  function parse(value) {
    return /^(\{|\[).+(\]|\})$/.test(value) ? JSON.parse(value) : value;
  }

  Object.assign(storage, {

    get: function (key, defaultValue = null) {
      return parse(localStorage.getItem(key)) || defaultValue;
    }

  });

});