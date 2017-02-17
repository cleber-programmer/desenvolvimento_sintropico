Rex('atom.attached', function () {

  return function attached(target, prop, descriptor) {

    let hook = target.attachedCallback || function () {};

    Object.assign(target, {
      attachedCallback() {
        descriptor.value.call(this), hook.call(this);
      }      
    });

    return descriptor;

  }

});