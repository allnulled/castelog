Castelog.variables.Aplicacion_sintactica_universal = class {
    static get DEFAULT_CONFIGURATION() {
        return {
            separador: "."
        };
    }
    constructor(comandos, configuracion) {
        this.comandos = comandos;
        this.configuracion = Object.assign({}, this.constructor.DEFAULT_CONFIGURATION, configuracion);
    }
    execute(command, parameters) {
        try {
            const command_path = command.split(this.configuracion.separador);
            let value = this.comandos;
            for(let index = 0; index < command_path.length; index++) {
                const command_step = command_path[index];
                if(!(command_step in value)) {
                    throw new Error("Required command step «" + command_step + "» on command path «" + command_path.splice(0, index).join(this.configuracion.separador) + "» in order to «Castelog.variables.Aplicacion_sintactica_universal.execute» with command «" + command + "»");
                }
                value = value[command_step];
            }
            if(!(value instanceof Castelog.variables.Punto_sintactico_universal)) {
                throw new Error("Required command path «" + command + "» to be a «Castelog.variables.Punto_sintactico_universal» in order to «Castelog.variables.Aplicacion_sintactica_universal.execute» with command «" + command + "»");
            }
            return value.run(parameters);
        } catch(error) {
            return this.onError(error, command, parameters);
        }
    }
    onError(error, command, parameters) {
        console.log("Error ejecutando comando «" + command + "» de aplicación sintáctica universal:", error);
        throw error;
    }
};