Castelog.metodos.un_modulo_exportado = function(id, modulo, factory = undefined, file_dir = undefined, process_dir = undefined) {
    // console.log("0. iniciando exportacion de: " + id);
    // Persistencia 1. En la cache propia:
    // console.log("1. persistencia en cache propia: ");
    Castelog.modulos[id] = { value: modulo, factory };
    // Persistencia 2. En el module.exports normal:
    if(typeof(module) !== "undefined") {
        // console.log("2. persistencia en module.exports normal: ");
        try {
            module.exports = modulo;
        } catch (error) {
            // noop.
        }
    }
    // Persistencia 3. Cambiando las rutas + cache propia:
    if(process_dir) {
        if(id.startsWith(process_dir)) {
            const path_relative_to_process = id.replace(process_dir, "@/").replace(/\/+/g, "/");
            Castelog.modulos[path_relative_to_process] = { value: modulo, factory };
        }
    }
    // Ya no hay más persistencias, se retorna el módulo con ruta original:
    return Castelog.modulos[id].value;
};