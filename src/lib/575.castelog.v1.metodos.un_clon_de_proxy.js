Castelog.metodos.un_clon_de_proxy = function(proxy, extension = {}) {
    const clon = new Proxy(typeof proxy === "function" ? function(){} : {}, {
        get: function(dato, clave) {
            if(clave in extension) {
                return extension[clave];
            }
            return proxy[clave];
        },
        set: function(dato, clave, valor) {
            if(clave in extension) {
                return extension[clave] = valor;
            }
            return proxy[clave] = valor;
        },
        apply: function(dato, proxified, args) {
            return proxy(...args);
        }
    });
    return clon;
};