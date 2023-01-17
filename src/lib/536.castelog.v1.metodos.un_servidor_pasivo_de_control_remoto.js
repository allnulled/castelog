Castelog.metodos.un_servidor_pasivo_de_control_remoto = async function(configuraciones, directorio) {
    try {
        return new Castelog.variables.ServidorPasivoDeControlRemoto(configuraciones, directorio);
    } catch(error) {
        console.log("Error al «Castelog.metodos.una_centralita_de_control_remoto()»:", error);
        throw error;
    }
};