Rex('guid', function () {

  return function () {
    return (Date.now() * Math.random()).toString(36);
  };

});