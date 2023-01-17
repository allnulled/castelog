Castelog.metodos.una_observacion_de_fenomenos = function(factoria, base = {}) {
    if(typeof factoria !== "function") {
        throw new Error("Required argument «factoria» to be a function in order to «Castelog.metodos.una_observacion_de_fenomenos»")
    }
    return function(configuraciones = {}) {
        if (typeof configuraciones !== "object") {
            throw new Error("Required argument «configuraciones» to be an object in order to «Castelog.metodos.una_observacion_de_fenomenos»")
        }
        const observacion = new Castelog.variables.Observacion_de_fenomenos(base, factoria, configuraciones)
        return observacion;
    };
};

Castelog.metodos.una_insercion_de_ley = function(observacion, accion, propiedad, evento) {
    if (typeof observacion.$fenomenos_api !== "object") {
        throw new Error("Required argument «observacion» to be an instance of «Castelog.metodos.una_observacion» in order to «Castelog.metodos.una_insercion_de_ley»");
    }
    if (typeof accion !== "string") {
        throw new Error("Required argument «accion» to be a string in order to «Castelog.metodos.una_insercion_de_ley»");
    }
    if ((typeof propiedad !== "string") && (propiedad !== null)) {
        throw new Error("Required argument «propiedad» to be a string in order to «Castelog.metodos.una_insercion_de_ley»");
    }
    if (typeof evento !== "function") {
        throw new Error("Required argument «evento» to be a function in order to «Castelog.metodos.una_insercion_de_ley»");
    }
    return observacion.$fenomenos_api.leyes.insertar(accion, propiedad, evento);
};

Castelog.metodos.una_actualizacion_de_ley = function (observacion, accion, propiedad, evento) {
    if (typeof observacion.$fenomenos_api !== "object") {
        throw new Error("Required argument «observacion» to be an instance of «Castelog.metodos.una_observacion» in order to «Castelog.metodos.una_actualizacion_de_ley»");
    }
    if (typeof accion !== "string") {
        throw new Error("Required argument «accion» to be a string in order to «Castelog.metodos.una_actualizacion_de_ley»");
    }
    if ((typeof propiedad !== "string") && (propiedad !== null)) {
        throw new Error("Required argument «propiedad» to be a string in order to «Castelog.metodos.una_actualizacion_de_ley»");
    }
    if (typeof evento !== "function") {
        throw new Error("Required argument «evento» to be a function in order to «Castelog.metodos.una_actualizacion_de_ley»");
    }
    return observacion.$fenomenos_api.leyes.actualizar(accion, propiedad, evento);
};

Castelog.metodos.una_eliminacion_de_ley = function (observacion, accion, propiedad, evento) {
    if (typeof observacion.$fenomenos_api !== "object") {
        throw new Error("Required argument «observacion» to be an instance of «Castelog.metodos.una_observacion» in order to «Castelog.metodos.una_eliminacion_de_ley»");
    }
    if (typeof accion !== "string") {
        throw new Error("Required argument «accion» to be a string in order to «Castelog.metodos.una_eliminacion_de_ley»");
    }
    if ((typeof propiedad !== "string") && (propiedad !== null)) {
        throw new Error("Required argument «propiedad» to be a string in order to «Castelog.metodos.una_eliminacion_de_ley»");
    }
    if (typeof evento !== "function") {
        throw new Error("Required argument «evento» to be a function in order to «Castelog.metodos.una_eliminacion_de_ley»");
    }
    return observacion.$fenomenos_api.leyes.eliminar(accion, propiedad, evento);
};

Castelog.metodos.una_inicializacion_de_fenomeno = function (observacion, nombre, valor) {
    return observacion.$fenomenos_api.inicializar(nombre, valor);
};

Castelog.metodos.una_actualizacion_de_fenomeno = function (observacion, nombre, valor) {
    return observacion.$fenomenos_api.actualizar(nombre, valor);
};

Castelog.metodos.una_eliminacion_de_fenomeno = function (observacion, nombre) {
    return observacion.$fenomenos_api.eliminar(nombre);
};

Castelog.variables.Observacion_de_fenomenos = class {
    static extender_con_fenomenos_api(proxy) {
        proxy.$fenomenos_api = {
            leyes: {
                insertar: function(tipo_de_evento, propiedad, consecuencia) {
                    return proxy.$proxy_api.insertar(tipo_de_evento, ...propiedad ? [propiedad, consecuencia] : [consecuencia]);
                },
                actualizar: function (tipo_de_evento, consecuencia_anterior, consecuencia_nueva) {
                    return proxy.$proxy_api.actualizar(tipo_de_evento, consecuencia_anterior, consecuencia_nueva);
                },
                eliminar: function(tipo_de_evento, consecuencia_anterior) {
                    return proxy.$proxy_api.eliminar(tipo_de_evento, consecuencia_anterior);
                },
            },
            inicializar: function (nombre, valor) {
                if(typeof nombre !== "string") {
                    throw new Error("Required argument «nombre» to be a string in order to «proxy.$fenomenos_api.inicializar»");
                }
                if(typeof proxy[nombre] !== "undefined") {
                    throw new Error(`Required phenomena «${ nombre }» to not be defined in order to «$proxy.$fenomenos_api.inicializar»`);
                }
                proxy[nombre] = valor;
                return proxy[nombre];
            },
            actualizar: function (nombre, valor) {
                if(typeof nombre !== "string") {
                    throw new Error("Required argument «nombre» to be a string in order to «proxy.$fenomenos_api.actualizar»");
                }
                proxy[nombre] = valor;
                return proxy[nombre];
            },
            eliminar: function (nombre) {
                if(typeof nombre !== "string") {
                    throw new Error("Required argument «nombre» to be a string in order to «proxy.$fenomenos_api.eliminar»");
                }
                delete this[nombre];
                return proxy[nombre];
            }
        };
    }
    constructor(dato_original = {}, factoria = false, configuraciones = {}) {
        const proxy = Castelog.metodos.una_proxificacion(dato_original);
        Castelog.variables.Observacion_de_fenomenos.extender_con_fenomenos_api(proxy);
        if(typeof factoria === "function") {
            const resultado = factoria(proxy, configuraciones);
            if (typeof resultado !== "undefined") {
                return resultado;
            }
        } else if(factoria === false) {
            // OK!
        } else {
            throw new Error("Required argument «factoria» to be a function or false in order to «Castelog.variables.Observacion_de_fenomenos»")
        }
        return proxy;
    }
};

Castelog.metodos.una_casuistica_de_observacion = function(observacion, proxy, configuraciones = {}) {
    return new observacion(proxy, configuraciones);
};