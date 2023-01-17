Castelog.variables.Punto_sintactico_universal = class {
    constructor(comando, onError) {
        this.comando = comando;
        this.onError = onError ? onError : (error, command, parameters) => {
            console.log("Error ejecutando comando de punto sintáctico universal «" + command + "»:", error);
            throw error;
        };
    }
    run(parametros) {
        try {
            return this.comando(parametros);
        } catch(error) {
            return this.onError(error, command, parameters);
        }
    }
};