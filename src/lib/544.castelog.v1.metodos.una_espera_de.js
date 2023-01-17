Castelog.metodos.una_espera_de = (tiempo, bloque) => {
    if(typeof tiempo !== "number") {
        throw new Error("Required parameter «tiempo» to be a number in order to «Castelog.metodos.una_espera_de");
    }
    if(typeof bloque !== "function") {
        throw new Error("Required parameter «bloque» to be a function in order to «Castelog.metodos.una_espera_de");
    }
    return new Promise(ok => {
        bloque();
        setTimeout(() => {
            try {
                ok();
            } catch(error) {
                fail(error);
            }
        }, tiempo);
    })
};