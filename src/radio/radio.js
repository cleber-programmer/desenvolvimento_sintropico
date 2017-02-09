Rex('radio', function (_, { handlers = new Map() }) {
    function radio(context) {
        if (!(this instanceof radio)) {
            return new radio(context);
        }
        handlers.set(context, new Proxy({}, {
            get(target, name) {
                return target[name] || (target[name] = new Set);
            }
        }));
        function get(channel) {
            return handlers.get(context)[channel];
        }
        function off(channel, target) {
            return get(channel).delete(target), this;
        }
        function on(channel, target) {
            return get(channel).add(target), this;
        }
        return { off, on };
    }
    return Object.assign(radio, {
        emit(channel, ...args) {
            for (let [context, proxy] of handlers.entries())
                for (let target of proxy[channel])
                    target.apply(context, JSON.parse(JSON.stringify(args)));
            return this;
        }
    });
});
//# sourceMappingURL=radio.js.map