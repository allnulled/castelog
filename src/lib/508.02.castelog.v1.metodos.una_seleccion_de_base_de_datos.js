Castelog.metodos.una_seleccion_de_base_de_datos = function (modelo, filtrando, ordenando, agrupando, paginando, bd = "system", adaptador = Castelog.variables.adaptador_de_bases_de_datos_por_defecto, objetivo = "a varios ítems") {
    if(typeof adaptador === "undefined") {
        throw new Error("Required argument «adaptador» to not be undefined in order to «Castelog.metodos.una_seleccion_de_base_de_datos»");
    }
    const db = adaptador.create({ schema: bd }, true);
    const [mysqlClass1, mysqlClass2] = [
        Castelog.variables.un_proxy_de_conexion_para_mysql2,
        Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2
    ];
    if ((db instanceof mysqlClass1) || (db instanceof mysqlClass2)) {
        if (objetivo === "a un ítem") {
            return db.select_one(modelo, filtrando, ordenando, agrupando, paginando, bd);
        } else if (objetivo === "a varios ítems") {
            return db.select_many(modelo, filtrando, ordenando, agrupando, paginando, bd);
        } else if (objetivo === "al primer ítem") {
            return db.select_first(modelo, filtrando, ordenando, agrupando, paginando, bd);
        } else if (objetivo === "al último ítem") {
            return db.select_last(modelo, filtrando, ordenando, agrupando, paginando, bd);
        }
    } else if (db.instanceType === "standard") {
        return db.select(modelo, filtrando, ordenando, agrupando, paginando, bd, adaptador, objetivo);
    } else {
        if(objetivo === "a varios ítems") {
            const resultOriginal = db.select(modelo, filtrando ? filtrando : i => i);
            let result = Object.keys(resultOriginal).reduce((output, key) => {
                output.push([key, resultOriginal[key]]);
                return output;
            }, []);
            if(agrupando) {
                // result = result.sort(ordenando);
            }
            if(ordenando) {
                if(typeof ordenando === "function") {
                    result = result.sort(ordenando);
                } else if(Array.isArray(ordenando)) {
                    result = result.sort(function(a, b) {
                        for(let index = 0; index < ordenando.length; index++) {
                            const ordenacion = ordenando[index];
                            const aHas = ordenacion in a;
                            const bHas = ordenacion in b;
                            if(aHas && bHas) {
                                if(a[ordenacion] < b[ordenacion]) {
                                    return -1;
                                } else if(a[ordenacion] > b[ordenacion]) {
                                    return 1;
                                }
                            } else if (aHas) {
                                return -1;
                            } else if(bHas) {
                                return 1;
                            }
                        }
                        return -1;
                    });
                } else {
                    throw new Error("Parámetro «ordenando» debe ser una función o un array. [0001]");
                }
            }
            if(paginando) {
                if(typeof paginando !== "object") {
                    throw new Error("Parámetro «paginando» debe ser un objeto. [0001]");
                }
                const { pagina, items } = paginando;
                const itemsNumber = parseInt(items) || 20;
                const paginaNumber = parseInt(pagina) || 0;
                let indexPagina = 0;
                let indexItem = 0;
                let result2 = [];
                for(let indexRow = 0; indexRow < result.length; indexRow++) {
                    const row = result[indexRow];
                    indexItem++;
                    if(indexItem >= itemsNumber) {
                        indexPagina++;
                        indexItem = 0;
                    }
                    if(indexPagina === paginaNumber) {
                        result2.push(row);
                    }
                }
                result = result2;
            }
            if(Array.isArray(result)) {
                result = result.reduce((output, item) => {
                    const [ key, value ] = item;
                    output[key] = value;
                    return output;
                }, {});
            }
            return result;
        }
    }
};