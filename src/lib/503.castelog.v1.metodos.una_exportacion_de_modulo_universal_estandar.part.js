Castelog.metodos.una_exportacion_de_modulo_universal_estandar = function(id, modulo, file_dir = undefined, process_dir = undefined) {
    try {
        Castelog.modulos[id] = {
            filedir: file_dir,
            processdir: process_dir,
            value: modulo
        };
    } catch (error) {
        console.log("Error al exportar módulo universal estándar: " + id);
        throw error;
    }
};