Castelog.metodos.una_superquery = function(esquema, cliente, base) {
    if(typeof esquema !== "object") {
        throw new Error("Se requiere de parámetro «esquema» ser un objeto para «Castelog.metodos.una_superquery»");
    }
    if(typeof cliente !== "function") {
        throw new Error("Se requiere de parámetro «cliente» ser una función para «Castelog.metodos.una_superquery»");
    }
    if(typeof base !== "function") {
        throw new Error("Se requiere de parámetro «base» ser una función para «Castelog.metodos.una_superquery»");
    }
    return base({ esquema, cliente });
};