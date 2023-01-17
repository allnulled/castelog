Castelog.metodos.un_servidor_https = function(controlador, opciones_seguras, opciones) {
    if(typeof window === "object") {
        return;
    } else if(typeof global === "object") {
        return require("https").createServer(controlador, opciones_seguras, opciones);
    }
};