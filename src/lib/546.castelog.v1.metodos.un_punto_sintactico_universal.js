Castelog.metodos.un_punto_sintactico_universal = (comando) => {
    if (typeof comando !== "function") {
        throw new Error("Required parameter «comando» to be an function in order to «Castelog.metodos.un_punto_sintactico_universal»");
    }
    return new Castelog.variables.Punto_sintactico_universal(comando);
};