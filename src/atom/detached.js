Rex('atom.detached', function () {
    return function detached(target, prop, descriptor) {
        let hook = target.detachedCallback || function () { };
        Object.assign(target, {
            detachedCallback() {
                descriptor.value.call(this), hook.call(this);
            }
        });
        return descriptor;
    };
});
//# sourceMappingURL=detached.js.map