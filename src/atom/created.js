Rex('atom.created', function () {
    return function created(target, prop, descriptor) {
        let hook = target.createdCallback || function () { };
        Object.assign(target, {
            createdCallback() {
                descriptor.value.call(this), hook.call(this);
            }
        });
        return descriptor;
    };
});
//# sourceMappingURL=created.js.map