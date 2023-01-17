Castelog.metodos.un_cliente_activo_de_control_remoto = async function (configuraciones, directorio) {
    try {
        return new Castelog.variables.ClienteActivoDeControlRemoto(configuraciones, directorio);
    } catch (error) {
        console.log("Error al «Castelog.metodos.un_cliente_activo_de_control_remoto()»:", error);
        throw error;
    }
};