Rex('events.day', function () {

  return function (date) {
    return date.split('/').shift();
  };

});