Castelog.metodos.un_modulo_importado = function(id, file_dir = undefined, process_dir = undefined) {
    try {
        // console.log("0. iniciando importacion de: " + id);
        // Intento 1. De la cache propia:
        // console.log("intento 1: de la cache propia");
        if(id in Castelog.modulos) {
            // console.log("Funcionó el método 1.");
            return Castelog.modulos[id].value;
        }
        // Intento 2. Del require normal:
        // console.log("intento 2: del require normal");
        if(typeof(Castelog.globalmente.require) === "function") {
            try {
                const modulix = Castelog.globalmente.require(id);
                // console.log("Funcionó el método 2.");
                return modulix;
            } catch (error) {
                // noop.
            }
        }
        // Intento 3. Cambiando las rutas + de la cache propia:
        // console.log("intento 3: cambiando rutas + de la cache propia");
        let id2 = id;
        if(id.startsWith("./") && file_dir) {
            id2 = id.replace(/^\.\//g, file_dir.replace(/\/$/g, "") + "/");
        } else if(id.startsWith("@/") && process_dir) {
            id2 = id.replace(/^\.\//g, process_dir.replace(/\/$/g, "") + "/");
        }
        if(id2 in Castelog.modulos) {
            const mod = Castelog.modulos[id2].value;
            // console.log("Funcionó el método 3 con: " + id2);
            return mod;
        }
        // Intento 4. Cambiando las rutas + del require normal:
        // console.log("intento 4: cambiando rutas + del require normal");
        if(typeof(Castelog.globalmente.require) === "function") {
            try {
                const mod = require(id2);
                // console.log("Funcionó el método 4 con: " + id2);
                return mod;
            } catch (error) {
                // Ya no hay más intentos, se lanza error:
                throw error;
            }
        }
        throw new Error(`No se pudo importar módulo porque no existe «${id2}» importable con «require(...)» ni tampoco en «Castelog.modulos»`);
    } catch (error) {
        console.log("Error al importar módulo: " + id);
        throw error;
    }
};