Rex(function ({ storage }) {

  Object.assign(storage, {

    remove: function (key) {
      return localStorage.removeItem(key), storage;
    }

  });

});