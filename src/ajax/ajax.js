Rex('ajax', function ({  }) {

  return function (method, url, data) {
    return (function (listeners, xhr) {

      xhr.onreadystatechange = function () {
        equal(get(this, 'readyState'), 4) && or(get(listeners, get(this, 'status')), always)(interceptor('response', method, url, get(this, 'responseText'), this), this);
      };
      
      xhr.open(method, url, !0);
      xhr.send(interceptor('request', method, url, data, xhr));

      return function when(status, callback) {
        return set(listeners, status, callback), when;
      };

    })({}, new XMLHttpRequest);

  };

});