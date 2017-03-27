Rex('flip', function () {

  return function (predicate) {
    return function (...args) {
      return predicate.apply(this, args.reverse());
    };
  };

});