Castelog.metodos.una_actualizacion_de_base_de_datos = function (modelo, id, datos, bd = "system", adaptador = Castelog.variables.SimplestDB) {
    if (typeof adaptador === "undefined") {
        throw new Error("Required argument «adaptador» to not be undefined in order to «Castelog.metodos.una_actualizacion_de_base_de_datos»");
    }
    const db = adaptador.create({ schema: bd }, true);
    return db.update(modelo, id, datos);
};