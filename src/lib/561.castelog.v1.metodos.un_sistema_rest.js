Castelog.metodos.un_sistema_rest = function(configuraciones, configuracionesServer, donde, tipo, enError) {
    if(typeof configuraciones !== "object") {
        throw new Error("Required parameter «configuraciones» to be an object in order to «un_sistema_rest»");
    }
    if(typeof configuracionesServer !== "object") {
        throw new Error("Required parameter «configuracionesServer» to be an object in order to «un_sistema_rest»");
    }
    if(typeof configuracionesServer.adapter !== "string") {
        configuracionesServer.adapter = "dexie";
    }
    let ServerClass = undefined;
    if(configuracionesServer.adapter === "mysql") {
        if(configuraciones.platform !== "node") {
            throw new Error("Required parameter «configuracionesServer.adapter» to be compatible with «configuracionesApi.platform» in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials !== "object") {
            throw new Error("Required parameter «configuracionesServer.credentials» to be an object in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials.user !== "string") {
            throw new Error("Required parameter «configuracionesServer.credentials.user» to be an string in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials.password !== "string") {
            throw new Error("Required parameter «configuracionesServer.credentials.password» to be an string in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials.host !== "string") {
            throw new Error("Required parameter «configuracionesServer.credentials.host» to be an string in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials.port !== "number") {
            throw new Error("Required parameter «configuracionesServer.credentials.port» to be an number in order to «un_sistema_rest»");
        }
        if(typeof configuracionesServer.credentials.database !== "string") {
            throw new Error("Required parameter «configuracionesServer.credentials.database» to be an string in order to «un_sistema_rest»");
        }
    } else if(configuracionesServer.adapter === "dexie") {
        if (configuraciones.platform !== "browser") {
            configuraciones.platform = "browser";
        }
    } else {
        throw new Error("Required parameter «configuraciones.adapter» to be a known type ('dexie','mysql') in order to «un_sistema_rest»");
    }
    const RestAPI = Castelog.variables.Automatic_http_rest_api_interface(configuraciones);
    if (configuracionesServer.adapter === "dexie") {
        ServerClass = RestAPI.VirtualDataServer;
    } else if (configuracionesServer.adapter === "mysql") {
        ServerClass = RestAPI.DataServer;
    } else {
        throw new Error("Required parameter «configuraciones.adapter» to be a known type ('dexie','mysql') in order to «un_sistema_rest»");
    }
    return ServerClass.initialize(configuracionesServer).then(serverInstance => {
        Object.assign(serverInstance, {
            create(options) {
                return {
                    instanceType: "standard",
                    select(modelo, filtrando, ordenando, agrupando, paginando, bd, adaptador, objetivo) {
                        if(objetivo === "a un ítem") {
                            return serverInstance.rest.selectOne(modelo, {
                                where: filtrando ? filtrando : []
                            });
                        } else if (objetivo === "a varios ítems") {
                            return serverInstance.rest.selectMany(modelo, {
                                where: filtrando ? filtrando : [],
                                order: ordenando ? ordenando : [],
                                groups: agrupando ? agrupando : [],
                                pagination: paginando ? paginando : [1, 20]
                            });
                        } else if (objetivo === "al primer ítem") {
                            return serverInstance.rest.selectFirst(modelo, {
                                where: filtrando ? filtrando : [],
                                order: ordenando ? ordenando : [],
                                groups: agrupando ? agrupando : [],
                                pagination: paginando ? paginando : [1, 20]
                            });
                        } else if (objetivo === "al último ítem") {
                            return serverInstance.rest.selectLast(modelo, {
                                where: filtrando ? filtrando : [],
                                order: ordenando ? ordenando : [],
                                groups: agrupando ? agrupando : [],
                                pagination: paginando ? paginando : [1, 20]
                            });
                        } else {
                            throw new Error("Required argument «motivo» to be an identifiable string in order to «select»");
                        }
                    },
                    insert(modelo, valores) {
                        return serverInstance.rest.insertMany(modelo, {
                            items: Array.isArray(valores) ? valores : [valores]
                        });
                    },
                    update(modelo, filtrando, valores) {
                        return serverInstance.rest.updateMany(modelo, {
                            where: filtrando,
                            values: valores
                        });
                    },
                    delete(modelo, filtrando) {
                        return serverInstance.rest.deleteMany(modelo, {
                            where: filtrando
                        });
                    }
                };
            }
        });
        if(typeof donde === "function") {
            return (async () => {
                try {
                    await donde(serverInstance);
                    return serverInstance;
                } catch(error) {
                    if (typeof enError === "function") {
                        return enError(error, RestAPI, serverInstance);
                    }
                }
            });
        }
        return serverInstance;
    }).catch(error => {
        if(typeof enError === "function") {
            return enError(error, RestAPI);
        }
    });
};