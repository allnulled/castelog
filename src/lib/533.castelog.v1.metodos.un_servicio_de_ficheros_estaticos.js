Castelog.metodos.un_servicio_de_ficheros_estaticos = async function(parametros, errores = false, enFicherosNoEncontrados = false, enOtrosCasos = false) {
    try {
        if(typeof require !== "function") {
            throw new Error("Required global «require» to be a function in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
        }
        const fs = require("fs");
        const parse_url = (arg) => require("url").parse(arg);
        const path = require("path");
        const { directorio, request, response, url: directorio_url_original = "/" } = parametros;
        const directorio_url = directorio_url_original.replace(/\/$/g, "") + "/";
        if(typeof directorio !== "string") {
            throw new Error("Required parameter «directorio» to be a string in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
        }
        if (typeof directorio_url !== "string") {
            throw new Error("Required parameter «directorio» to be a string in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
        }
        if(typeof request === "undefined") {
            throw new Error("Required parameter «request» to not be undefined in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
        }
        if(typeof response === "undefined") {
            throw new Error("Required parameter «response» to not be undefined in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
        }
        const requested_url = parse_url(request.url).pathname;
        if(requested_url.startsWith(directorio_url)) {
            const remaining_url = requested_url.replace(directorio_url, "").replace(/^\//g, "");
            const fichero_path = path.resolve(directorio, remaining_url);
            if(!fichero_path.startsWith(directorio)) {
                throw new Error("Required parameter «request.url» to result in a subfile of «directorio» in order to «Castelog.metodos.un_servicio_de_ficheros_estaticos»");
            }
            const reader = fs.createReadStream(fichero_path);
            reader.pipe(response);
            reader.on("error", function(error) {
                if (typeof enFicherosNoEncontrados === "function") {
                    return enFicherosNoEncontrados(error, parametros);
                }
            });
        } else {
            if (typeof enOtrosCasos === "function") {
                return enOtrosCasos();
            }
        }
    } catch(error) {
        if(typeof errores === "function") {
            return errores(error, parametros);
        }
    }
};