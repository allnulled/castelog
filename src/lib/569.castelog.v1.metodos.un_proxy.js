Castelog.metodos.un_proxy = function(obj, proxifiers = {}) {
    if(typeof Proxy === "undefined") {
        throw new Error("Required global «Proxy» to not be undefined in order to «Castelog.metodos.un_proxy»");
    }
    return new Proxy(obj, proxifiers);
};