Rex('template', function () {

  return function (query, data) {
    return (Function("d", "var p=[];with(d){p.push('" +
      document.querySelector(query)
              .innerHTML
              .replace(/[\r\t\n]/g, " ")
              .split("<%")
              .join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t")
              .join("');")
              .split("%>")
              .join("p.push('")
              .split("\r")
              .join("\\'")+ "');}return p.join('');")
    )(data);
  };

});