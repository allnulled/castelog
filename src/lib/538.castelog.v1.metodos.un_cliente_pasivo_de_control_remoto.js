Castelog.metodos.un_cliente_pasivo_de_control_remoto = async function (configuraciones, directorio) {
    try {
        return new Castelog.variables.ClientePasivoDeControlRemoto(configuraciones, directorio);
    } catch (error) {
        console.log("Error al «Castelog.metodos.un_cliente_pasivo_de_control_remoto()»:", error);
        throw error;
    }
};