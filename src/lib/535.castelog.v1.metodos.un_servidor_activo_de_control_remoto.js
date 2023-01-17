Castelog.metodos.un_servidor_activo_de_control_remoto = async function(configuraciones, directorio) {
    try {
        return new Castelog.variables.ServidorActivoDeControlRemoto(configuraciones, directorio);
    } catch(error) {
        console.log("Error al «Castelog.metodos.una_centralita_de_control_remoto()»:", error);
        throw error;
    }
};