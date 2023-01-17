Castelog.metodos.un_servidor_http = function(controlador, opciones) {
    if(typeof window === "object") {
        return;
    } else if(typeof global === "object") {
        return require("http").createServer(controlador, opciones);
    }
};