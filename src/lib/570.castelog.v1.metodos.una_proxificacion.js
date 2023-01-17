Castelog.metodos.una_proxificacion = function(...args) {
    return new Castelog.variables.Proxificacion(...args);
};

Castelog.metodos.un_resultado_de_proxificacion = function (...args) {
    return new Castelog.variables.Resultado_de_proxificacion(...args);
};

Castelog.variables.Resultado_de_proxificacion = class {
    static factoria(dato) {
        return new this(dato);
    }
    constructor(resultado) {
        this.resultado = resultado;
    }
};

Castelog.variables.Proxificacion = class {
    static get Resultado_de_proxificacion() {
        return Castelog.variables.Resultado_de_proxificacion;
    }
    constructor(dato_original) {
        let proxy = undefined, dato = dato_original;
        if (typeof dato_original === "function") {
            proxy = Castelog.variables.Proxificacion.obtener_proxy_de_funcion(dato);
        } else if (typeof dato_original === "object") {
            proxy = Castelog.variables.Proxificacion.obtener_proxy_de_objeto(dato);
        } else {
            throw new Error("Required parameter «dato_original» to be object or function in order to «Proxificacion.constructor»");
        }
        return proxy;
    }
    static comprobar_tipo_de_evento(evento, dato) {
        if ((typeof evento !== "string") || (["get", "set", "call"].indexOf(evento) === -1)) {
            throw new Error("Required parameter «evento» to be a string and a known event type in order to «Proxificacion.comprobar_tipo_de_evento»");
        }
        return true;
    }
    static comprobar_accion_o_dato_de_accion(accion, dato) {
        if(typeof accion === "function") {
            return true;
        } else if((typeof accion === "object") && Array.isArray(accion) && (accion.length > 0)) {
            return true;
        }
        throw new Error("Required parameter «accion» to be a function or an array of more than 0 items in order to «Proxificacion.comprobar_accion_o_dato_de_accion»");
    }
    static comprobar_accion(accion, dato) {
        if (typeof accion !== "function") {
            throw new Error("Required parameter «accion» to be a function in order to «Proxificacion.comprobar_accion»");
        }
        return true;
    }
    static comprobar_configuracion(configuracion, dato) {
        if (typeof configuracion !== "object") {
            throw new Error("Required parameter «configuracion» to be an object in order to «Proxificacion.comprobar_configuracion»");
        }
        return true;
    }
    static extender_con_proxy_api(dato) {
        dato.$proxy_api = {
            debug: false,
            eventos: {
                para: {
                    get: [],
                    set: [],
                    call: [],
                }
            },
            seleccionar: function (tipo_de_evento, filtro) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion(filtro);
                return dato.$proxy.eventos.para[tipo_de_evento].filter(filtro);
            },
            insertar: function (tipo_de_evento, accion, configuracion = {}) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion(accion);
                Castelog.variables.Proxificacion.comprobar_configuracion(configuracion);
                const datos_de_evento = [accion, configuracion];
                dato.$proxy_api.eventos.para[tipo_de_evento].push(datos_de_evento);
                return datos_de_evento;
            },
            eliminar: function (tipo_de_evento, accion) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion_o_dato_de_accion(accion);
                const checker = (typeof accion === "function") ? evento => evento[0] === accion : evento => evento === accion;
                const evento = dato.$proxy_api.eventos.para[tipo_de_evento].filter(checker);
                if (typeof evento === "undefined") {
                    throw new Error(`Required parameter «accion» to be known as an event function by «${tipo_de_evento}» in order to «proxificacion.$proxy_api.eliminar»`)
                }
                return dato.$proxy_api.eventos.para[tipo_de_evento].splice(
                    0 + dato.$proxy_api.eventos.para[tipo_de_evento].indexOf(evento),
                    1
                );
            },
            actualizar: function (tipo_de_evento, accion, nueva_accion, nueva_configuracion = {}) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion_o_dato_de_accion(accion);
                Castelog.variables.Proxificacion.comprobar_accion(nueva_accion);
                const checker = (typeof accion === "function") ? evento => evento[0] === accion : evento => evento === accion;
                const evento = dato.$proxy_api.eventos.para[tipo_de_evento].filter(checker);
                if (typeof evento === "undefined") {
                    throw new Error(`Required parameter «accion» to be known as an event function by «${tipo_de_evento}» in order to «proxificacion.$proxy_api.actualizar»`)
                }
                return dato.$proxy_api.eventos.para[tipo_de_evento].splice(
                    0 + dato.$proxy_api.eventos.para[tipo_de_evento].indexOf(evento),
                    1,
                    [nueva_accion, nueva_configuracion]
                );
            },
            apendizar: function (tipo_de_evento, accion, nueva_accion, nueva_configuracion = {}) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion_o_dato_de_accion(accion);
                Castelog.variables.Proxificacion.comprobar_accion(nueva_accion);
                const checker = (typeof accion === "function") ? evento => evento[0] === accion : evento => evento === accion;
                const evento = dato.$proxy_api.eventos.para[tipo_de_evento].filter(checker);
                if (typeof evento === "undefined") {
                    throw new Error(`Required parameter «accion» to be known as an event function by «${tipo_de_evento}» in order to «proxificacion.$proxy_api.apendizar»`)
                }
                return dato.$proxy_api.eventos.para[tipo_de_evento].splice(
                    0 + dato.$proxy_api.eventos.para[tipo_de_evento].indexOf(evento),
                    0,
                    [nueva_accion, nueva_configuracion]
                );
            },
            prependizar: function (tipo_de_evento, accion, nueva_accion, nueva_configuracion = {}) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                Castelog.variables.Proxificacion.comprobar_accion_o_dato_de_accion(accion);
                Castelog.variables.Proxificacion.comprobar_accion(nueva_accion);
                const checker = (typeof accion === "function") ? evento => evento[0] === accion : evento => evento === accion;
                const evento = dato.$proxy_api.eventos.para[tipo_de_evento].filter(checker);
                if (typeof evento === "undefined") {
                    throw new Error(`Required parameter «accion» to be known as an event function by «${tipo_de_evento}» in order to «proxificacion.$proxy_api.prependizar»`)
                }
                return dato.$proxy_api.eventos.para[tipo_de_evento].splice(
                    1 + dato.$proxy_api.eventos.para[tipo_de_evento].indexOf(evento),
                    0,
                    [nueva_accion, nueva_configuracion]
                );
            },
            ejecutar: function (tipo_de_evento, parametros_de_proxificacion) {
                Castelog.variables.Proxificacion.comprobar_tipo_de_evento(tipo_de_evento);
                const [externo, clave, valor] = parametros_de_proxificacion;
                if ((typeof clave === "string") && clave.startsWith("$")) {
                    if (tipo_de_evento === "get") {
                        return externo[clave];
                    } else if (tipo_de_evento === "set") {
                        return externo[clave] = valor;
                    } else if (tipo_de_evento === "call") {
                        return externo(...clave);
                    }
                }
                if(tipo_de_evento === "get") {
                    if((typeof clave === "string") && (clave === "toJSON")) {
                        return (...args) => JSON.stringify(externo, args[0] ? args[0] : null, args[1] ? args[1] : 2);
                    } else if ((typeof clave === "string") && (clave === "toString")) {
                        return () => externo;
                    }
                }
                const eventos = dato.$proxy_api.eventos.para[tipo_de_evento];
                const resultado = [];
                for (let index = 0; index < eventos.length; index++) {
                    const evento = eventos[index];
                    if(!Array.isArray(evento)) {
                        console.log(evento);
                        throw new Error(`Required configuration «proxificacion.$proxy_api.eventos.para.${ tipo_de_evento }» or simply «eventos» on index «${ index }» to be an array in order to «proxificacion.$proxy_api.ejecutar»`);
                    }
                    const [accion, parametros_de_accion] = evento;
                    Castelog.variables.Proxificacion.comprobar_accion(accion);
                    const salida = accion.call(externo, tipo_de_evento === "call" ? {
                        ambito: externo,
                        configuraciones: parametros_de_proxificacion,
                        dato: parametros_de_proxificacion[0],
                        clave: undefined,
                        valor: undefined,
                        parametros: parametros_de_accion,
                        hecho: Castelog.variables.Proxificacion.Resultado_de_proxificacion.factoria,
                        argumentos: parametros_de_proxificacion[1]
                    } : {
                        ambito: externo,
                        configuraciones: parametros_de_proxificacion,
                        dato: parametros_de_proxificacion[0],
                        clave: parametros_de_proxificacion[1],
                        valor: parametros_de_proxificacion[2],
                        parametros: parametros_de_accion,
                            hecho: Castelog.variables.Proxificacion.Resultado_de_proxificacion.factoria
                    });
                    if (salida instanceof Castelog.variables.Proxificacion.Resultado_de_proxificacion) {
                        return salida.resultado;
                    }
                    resultado.push(salida);
                }
                return resultado;
            }
        };
        return dato;
    }
    static obtener_proxy_de_objeto(dato) {
        this.extender_con_proxy_api(dato);
        return new Proxy(dato, {
            get: function (externo, clave) {
                if (typeof externo.$proxy_api.debug === "function") {
                    externo.$proxy_api.debug("[DEBUG][PROXY][GETTER] Property: " + clave);
                }
                return dato.$proxy_api.ejecutar("get", [externo, clave]);
            },
            set: function (externo, clave, valor) {
                if (typeof externo.$proxy_api.debug === "function") {
                    externo.$proxy_api.debug("[DEBUG][PROXY][SETTER] Property: " + clave);
                }
                return dato.$proxy_api.ejecutar("set", [externo, clave, valor]);
            },
        })
    }
    static obtener_proxy_de_funcion(dato) {
        this.extender_con_proxy_api(dato);
        return new Proxy(dato, {
            apply: function (externo, proxificado, argumentos) {
                if (typeof externo.$proxy_api.debug === "function") {
                    externo.$proxy_api.debug("[DEBUG][PROXY][CALLER] Arguments: " + argumentos.length + (argumentos.length ? " (" + argumentos.map(arg => typeof arg) + ")" : ""));
                }
                return dato.$proxy_api.ejecutar("call", [externo, argumentos]);
            },
        })
    }
};

Castelog.variables.tipos_de_proxificacion_disponibles = [
    "accede a propiedad",
    "accede a cualquier propiedad",
    "asigna propiedad",
    "asigna cualquier propiedad",
    "se llama",
];

Castelog.metodos.siempre_que_proxificacion = function(proxificacion, tipo, ...otros) {
    if(!("$proxy_api" in proxificacion)) {
        throw new Error("Required argument «proxificacion» to be an instance of «Castelog.variables.Proxificacion» in order to «Castelog.metodos.siempre_que_proxificacion»");
    }
    if(typeof tipo !== "string") {
        throw new Error("Required argument «tipo» to be a string in order to «Castelog.metodos.siempre_que_proxificacion»");
    }
    if(Castelog.variables.tipos_de_proxificacion_disponibles.indexOf(tipo) === -1) {
        throw new Error("Required argument «tipo» to be a valid string in order to «Castelog.metodos.siempre_que_proxificacion»");
    }
    if(otros.length === 0) {
        throw new Error("Required argument «otros» to have 1 or more items in order to «Castelog.metodos.siempre_que_proxificacion»");
    }
    if(tipo === "accede a propiedad") {
        const [ propiedad, evento ] = otros;
        if(typeof propiedad !== "string") {
            throw new Error("Required argument «propiedad» to be a string in order to Castelog.metodos.siempre_que_proxificacion»");
        }
        if (typeof evento !== "function") {
            throw new Error("Required argument «evento» to be a function in order to Castelog.metodos.siempre_que_proxificacion»");
        }
        return proxificacion.$proxy_api.insertar("get", function(parametros) {
            const { dato, clave } = parametros;
            if(clave === propiedad) {
                return evento(parametros);
            }
        }, {});
    } else if (tipo === "accede a cualquier propiedad") {
        const [evento] = otros;
        if (typeof evento === "function") {
            return proxificacion.$proxy_api.insertar("get", function (parametros) {
                return evento(parametros);
            }, {});
        } else if(typeof evento === "object") {
            if(Array.isArray(evento.deja_de) && (evento.deja_de.length > 0) && (evento.deja_de[0] === "function")) {
                throw new Error("Required argument «evento.deja_de» to be a function on «accede a cualquier propiedad» in order to «Castelog.metodos.siempre_que_proxificacion»");
            }
            const { deja_de, en_su_lugar = null } = evento;
            if(en_su_lugar === null) {
                return proxificacion.$proxy_api.eliminar("get", deja_de[0]);
            } else if(typeof en_su_lugar === "function") {
                return proxificacion.$proxy_api.actualizar("get", deja_de[0], en_su_lugar);
            } else {
                throw new Error("Required argument «evento.en_su_lugar» to be a function or null on «accede a cualquier propiedad» in order to «Castelog.metodos.siempre_que_proxificacion»");
            }
        } else {
            throw new Error("Required argument «evento» to be a function or an object on «accede a cualquier propiedad» in order to Castelog.metodos.siempre_que_proxificacion»");
        }
    } else if (tipo === "asigna propiedad") {
        const [propiedad, evento] = otros;
        if (typeof propiedad !== "string") {
            throw new Error("Required argument «propiedad» to be a string in order to Castelog.metodos.siempre_que_proxificacion»");
        }
        if (typeof evento !== "function") {
            throw new Error("Required argument «evento» to be a function in order to Castelog.metodos.siempre_que_proxificacion»");
        }
        return proxificacion.$proxy_api.insertar("set", function (parametros) {
            const { dato, clave } = parametros;
            if (clave === propiedad) {
                return evento(parametros);
            }
        }, {});
    } else if (tipo === "asigna cualquier propiedad") {
        const [evento] = otros;
        if (typeof evento === "function") {
            return proxificacion.$proxy_api.insertar("set", function (parametros) {
                return evento(parametros);
            }, {});
        } else if (typeof evento === "object") {
            if(Array.isArray(evento.deja_de) && (evento.deja_de.length > 0) && (evento.deja_de[0] === "function")) {
                throw new Error("Required argument «evento.deja_de» to be a function on «asigna cualquier propiedad» in order to «Castelog.metodos.siempre_que_proxificacion»");
            }
            const { deja_de, en_su_lugar = null } = evento;
            if (en_su_lugar === null) {
                return proxificacion.$proxy_api.eliminar("set", deja_de[0]);
            } else if (typeof en_su_lugar === "function") {
                return proxificacion.$proxy_api.actualizar("set", deja_de[0], en_su_lugar);
            } else {
                throw new Error("Required argument «evento.en_su_lugar» to be a function or null on «asigna cualquier propiedad» in order to «Castelog.metodos.siempre_que_proxificacion»");
            }
        } else {
            throw new Error("Required argument «evento» to be a function or an object on «asigna cualquier propiedad» in order to Castelog.metodos.siempre_que_proxificacion»");
        }
    } else if (tipo === "se llama") {
        const [evento] = otros;
        if (typeof evento !== "function") {
            throw new Error("Required argument «evento» to be a function in order to Castelog.metodos.siempre_que_proxificacion»");
        }
        return proxificacion.$proxy_api.insertar("call", function (parametros) {
            return evento(parametros);
        }, {});
    } else {
        throw new Error("Required argument «tipo» to be a valid string in order to «Castelog.metodos.siempre_que_proxificacion»")
    }
};