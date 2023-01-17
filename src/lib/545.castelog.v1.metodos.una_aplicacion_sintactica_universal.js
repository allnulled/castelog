Castelog.metodos.una_aplicacion_sintactica_universal = (comandos, configuracion) => {
    if(typeof comandos !== "object") {
        throw new Error("Required parameter «comandos» to be an object in order to «Castelog.metodos.una_aplicacion_sintactica_universal»");
    }
    if(typeof configuracion !== "object") {
        throw new Error("Required parameter «configuracion» to be an object in order to «Castelog.metodos.una_aplicacion_sintactica_universal»");
    }
    return new Castelog.variables.Aplicacion_sintactica_universal(comandos, configuracion);
};