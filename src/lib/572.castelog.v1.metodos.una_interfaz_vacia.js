Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica = function (base, selectores, base_original, reductor_unico) {
    if (["function", "object"].indexOf(typeof base) === -1) {
        throw new Error("Required argument «base» to be an object or a function in order to «Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica»");
    }
    if (["function", "object"].indexOf(typeof base_original) === -1) {
        throw new Error("Required argument «base_original» to be an object or a function in order to «Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica»");
    }
    if (!Array.isArray(selectores)) {
        throw new Error("Required argument «selectores» to be an array in order to «Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica»");
    }
    if (typeof reductor_unico !== "function") {
        throw new Error("Required argument «reductor_unico» to be a function in order to «Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica»");
    }
    return function (evento) {
        if (base_original === base) {
            reductor_unico(evento);
            return base_original;
        }
        return base_original.$(evento);
    };
};

Castelog.variables.Interfaz_vacia_basica = function (base = {}, selectores = [], base_original = undefined, reductor_unico = undefined, extensiones = {}) {
    if (["object", "function"].indexOf(typeof base) === -1) {
        throw new Error("Required argument «base» to be an object or a function in order to «Castelog.variables.Interfaz_vacia_basica»");
    }
    if (!Array.isArray(selectores)) {
        throw new Error("Required argument «selectores» to be an array in order to «Castelog.variables.Interfaz_vacia_basica»");
    }
    if (["object", "function"].indexOf(typeof base_original) === -1) {
        throw new Error("Required argument «base_original» to be an object or a function in order to «Castelog.variables.Interfaz_vacia_basica»");
    }
    const interfaz_vacia = Castelog.variables.Factory_de_accion_por_defecto_de_interfaz_basica(base, selectores, base_original, reductor_unico);
    interfaz_vacia.cambiar = interfaz_vacia;
    interfaz_vacia.Promise = Promise;
    interfaz_vacia.console = {
        log: console.log.bind(console)
    };
    for (let prop in extensiones) {
        if (["object", "function"].indexOf(extensiones[prop]) === -1) {
            throw new Error("Required argument «extensiones» on index «" + prop + "» to be an object or a function in order to «Castelog.variables.Interfaz_vacia_basica»");
        }
        interfaz_vacia[prop] = Castelog.metodos.una_interfaz_vacia(extensiones[prop]);
    }
    return interfaz_vacia;
};
Castelog.variables.Interfaz_vacia_por_defecto = Castelog.variables.Interfaz_vacia_basica;
Castelog.metodos.una_interfaz_vacia = function (reductor_unico = Castelog.variables.noop, base = {}, selectores = [], base_original = undefined) {
    if (["function"].indexOf(typeof reductor_unico) === -1) {
        throw new Error("Required argument «reductor_unico» to be a function in order to «Castelog.metodos.una_interfaz_vacia»");
    }
    if (["object", "function"].indexOf(typeof base) === -1) {
        throw new Error("Required argument «base» to be an object or a function in order to «Castelog.metodos.una_interfaz_vacia»");
    }
    if (!Array.isArray(selectores)) {
        throw new Error("Required argument «selectores» to be an array in order to «Castelog.metodos.una_interfaz_vacia»");
    }
    if (typeof base_original === "undefined") {
        base_original = base;
    }
    base.$ = Castelog.variables.Interfaz_vacia_por_defecto(base, selectores, base_original, reductor_unico);
    const reducir_a_jsonable = function (dato) {
        const claves = Object.keys(dato);
        const reduccion = claves.reduce((output, item) => {
            output[item] = dato[item];
            return output;
        }, {});
        return reduccion;
    };
    const interfaz_vacia = new Proxy(base, {
        get: function (dato, clave) {
            if (clave.startsWith("$")) {
                return dato[clave];
            }
            if (clave === "toJSON") {
                return function (...args) {
                    return reducir_a_jsonable(base);
                };
            }
            if (!(clave in dato)) {
                const selector_especifico = [].concat(selectores).concat([clave]);
                const base = new Function(Castelog.noop);
                base.referencia = selector_especifico;
                dato[clave] = Castelog.metodos.una_interfaz_vacia(
                    reductor_unico,
                    base,
                    selector_especifico,
                    base_original
                );
            }
            return dato[clave];
        },
        set: function (dato, clave, valor) {
            if (clave.startsWith("$")) {
                return dato[clave] = valor;
            }
            return dato[clave] = valor;
        },
        apply: function (externo, proxificado, argumentos) {
            const resultado = base_original.$({
                original: base_original,
                selector: selectores,
                funcion_original: externo,
                funcion_proxificada: interfaz_vacia,
                argumentos,
                accion: "/" + selectores.join("/"),
                parametro: argumentos[0],
            });
            return interfaz_vacia;
        }
    });
    for(let prop in base) {
        interfaz_vacia[prop] = base[prop];
    }
    return interfaz_vacia;
};