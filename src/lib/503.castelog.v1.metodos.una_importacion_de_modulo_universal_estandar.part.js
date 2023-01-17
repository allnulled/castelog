Castelog.metodos.una_importacion_de_modulo_universal_estandar = function(id, errores = false) {
    try {
        if(!(id in Castelog.modulos)) {
            throw new Error("Módulo universal estándar llamado «" + id + "» no fue encontrado.");
        }
        return Castelog.modulos[id].value;
    } catch (error) {
        if(typeof errores === "function") {
            const errorOutput = errores(error);
            if(errorOutput !== "undefined") {
                return errorOutput;
            }
        }
        console.log("Error al importar módulo universal estándar: " + id);
        throw error;
    }
};