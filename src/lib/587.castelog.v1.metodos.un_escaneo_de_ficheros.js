Castelog.metodos.un_escaneo_de_ficheros = function (ruta = ".", asincrono = false) {
    if (typeof ruta !== "string") {
        throw new Error("Se requiere propiedad «ruta» ser un string para «Castelog.metodos.un_escaneo_de_ficheros»");
    }
    if(asincrono === false) {
        return require("fs").readdirSync(ruta);
    } else {
        return require("fs").promises.readdir(ruta);
    }
};