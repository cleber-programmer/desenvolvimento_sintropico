Rex(function ({ storage }) {

  Object.assign(storage, {

    drop: function () {
      return localStorage.clear(), storage;
    }

  });

});