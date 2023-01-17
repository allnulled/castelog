Castelog.metodos.un_relleno_de_texto = function(texto, longitud = 2, relleno = "0", por_el_principio = true) {
    if(typeof longitud !== "number") {
        throw new Error("Required parameter «longitud» to be a number in order to «Castelog.metodos.un_relleno_de_texto»");
    }
    if(typeof relleno !== "string") {
        throw new Error("Required parameter «relleno» to be a string in order to «Castelog.metodos.un_relleno_de_texto»");
    }
    let salida = "" + texto;
    while(salida.length < longitud) {
        if(por_el_principio) {
            salida = relleno + salida;
        } else {
            salida = salida + relleno;
        }
    }
    return salida;
};