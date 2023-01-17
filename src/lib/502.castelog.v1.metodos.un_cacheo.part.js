Castelog.metodos.un_cacheo = function(clave, valor, condicion) {
    let condicionFinal = condicion;
    if(typeof condicion === "function") {
        condicionFinal = condicion();
    }
    NoSeRefresca:
    if(!condicionFinal) {
        const cacheDB = Castelog.variables.SimplestDB.getCache();
        const coincidencias = cacheDB.select("cache", item => item.key === clave);
        const coincidenciasIds = Object.keys(coincidencias);
        if (coincidenciasIds.length === 0) {
            break NoSeRefresca;
        } else if (coincidenciasIds.length > 1) {
            throw new Error("Clave de cacheo «" + clave + "» corrupta por concurrencia de " + coincidenciasIds.length + " registros (0001).");
        }
        return coincidencias[coincidenciasIds[0]].value;
    }
    let valorFinal = valor;
    if (typeof valor === "function") {
        valorFinal = valor();
    }
    const cacheDB = Castelog.variables.SimplestDB.getCache();
    const coincidencias = cacheDB.select("cache", item => item.key === clave);
    const coincidenciasIds = Object.keys(coincidencias);
    if(coincidenciasIds.length === 0) {
        const item = cacheDB.insert("cache", { key: clave, value: valorFinal });
        return item.value;
    } else if(coincidenciasIds.length > 1) {
        throw new Error("Clave de cacheo «" + clave + "» corrupta por concurrencia de " + coincidenciasIds.length + " registros (0002).");
    }
    const coincidencia = coincidencias[coincidenciasIds[0]];
    cacheDB.update("cache", coincidencia.id, { valor: valorFinal });
    return valorFinal;
};