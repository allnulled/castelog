/*lib:hook-by-priority v1.0.1*/
(function (root, factory) {
    const scope = (typeof window !== 'undefined') ? window : global;
    if ("HookByPriority" in scope) return scope.HookByPriority;
    const output = factory();
    if (typeof module === 'object' && typeof module.exports === 'object')
        module.exports = output;
    if (typeof define === 'function' && define.amd)
        define([], factory);
    if (typeof exports === 'object')
        exports["HookByPriority"] = output;
    scope["HookByPriority"] = output;
})(this, function () {
    class HookByPriority {
        static create(...args) {
            return new this(...args);
        }
        constructor(options = {}) {
            this.events = {};
            this.DEFAULT_PRIORITY = 100;
            Object.assign(this, options);
        }
        sorter(a, b) {
            return a.priority >= b.priority ? -1 : 1;
        }
        add(event, callback, priority = this.DEFAULT_PRIORITY) {
            if (!(event in this.events)) {
                this.events[event] = [];
            }
            if (Array.isArray(callback)) {
                for (let index = 0; index < callback.length; index++) {
                    const callbackItem = callback[index];
                    if (typeof callbackItem !== "function") {
                        throw new Error("Parameter <callback> must be an array or a function. Item at position " + index + " failed");
                    }
                    this.events[event].push({ callback: callbackItem, priority });
                }
            } else if (typeof callback === "function") {
                this.events[event].push({ callback, priority });
            } else {
                throw new Error("Parameter <callback> must be an array or a function")
            }
            this.events[event] = this.events[event].sort(this.sorter);
        }
        async use(event, parameters = {}) {
            try {
                const events = this.events[event];
                for (let index = 0; index < events.length; index++) {
                    const callback = events[index].callback;
                    try {
                        await callback(parameters);
                    } catch (error) {
                        console.error(`[ERROR] Event ${index} caused an error:`, error);
                    }
                }
                return parameters;
            } catch (error) {
                throw error;
            }
        }
        has(event, callback) {
            if(!Array.isArray(this.events[event])) return false;
            const current_position = this.events[event].indexOf(callback);
            return current_position === -1 ? false : current_position === -1;
        }
        delete(event, callbackOrConfirmationFlag = false) {
            if (callbackOrConfirmationFlag === true) {
                delete this.events[event];
            } else if (typeof callbackOrConfirmationFlag === "function") {
                const position = this.has(event);
                if(position !== false) {
                    this.events[event].splice(position, 1);
                }
            } else {
                throw new Error("Parameter «callbackOrConfirmationFlag» must be true or a function");
            }
        }
    };
    HookByPriority.default = HookByPriority;
    return HookByPriority;
});
