Rex('atom.event', function () {
    return function event(event, query, bubbling) {
        return function (target, prop, descriptor) {
            let hookCreated = target.createdCallback || function () { };
            let hookDetached = target.detachedCallback || function () { };
            function action(e) {
                e.target.matches(query) && this[prop](e);
            }
            Object.assign(target, {
                createdCallback() {
                    this.addEventListener(event, action.bind(this), bubbling), hookCreated.call(this);
                },
                detachedCallback() {
                    this.removeEventListener(event, action.bind(this), bubbling), hookDetached.call(this);
                }
            });
            return descriptor;
        };
    };
});
//# sourceMappingURL=event.js.map