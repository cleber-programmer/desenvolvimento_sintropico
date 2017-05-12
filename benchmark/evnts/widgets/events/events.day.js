Rex('events.day', function () {

  /**
   * Retorna o dia de uma data
   */
  return function (date) {
    return date.split('/').shift();
  };

});