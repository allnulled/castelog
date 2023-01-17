Castelog.variables.ClienteActivoDeControlRemoto = class {
    constructor(configuraciones, directorio) {
        Object.assign(this, { configuraciones, directorio });
    }
    async start() {
        try {
            this.on_initialize_configurations();
            this.on_initialize_connection();
        } catch (error) {
            console.log("Error en «Castelog.variables.ClienteActivoDeControlRemoto.prototype.start»:", error)
            throw error;
        }
    }
    on_initialize_configurations() {
        Object.assign(this.configurations, {
            "nativo.socket.host": "127.0.0.1",
            "nativo.socket.port": "9985",
            "nativo.socket.path": "/centralita/de/control/remoto"
        }, this.configurations);
    }
    on_initialize_connection() {
        try {
            // @TOREVIEW...
            if(this.connection) {
                return this.connection;
            }
            const socket_port = this.configurations["nativo.socket.port"] || 9989;
            const socket_host = this.configurations["nativo.socket.host"] || "127.0.0.1";
            const socket_path = this.configurations["nativo.socket.path"] || "/";
            const socket_url = "ws://" + socket_host + ":" + socket_port + socket_path
            this.connection = require("socket.io-client").io(socket_url);
            this.connection.on("list passive devices response", (parameters) => {
                console.log("list passive devices response", parameters);
            });
            this.connection.on("execute on passive device response", (parameters) => {
                console.log("execute on passive device response", parameters);
            });
        } catch (error) {
            console.log("Error en «Castelog.variables.ClienteActivoDeControlRemoto.prototype.on_initialize_connection»:", error)
            throw error;
        }
    }
    async command_to_list_passive_devices(self_id, self_password) {
        try {
            // @TODO...
        } catch(error) {
            
        }
    }
    async command_to_execute_on_passive_device(target_id, target_password, target_code, target_metadata) {
        try {
            // @TODO...
        } catch (error) {
            // @TODO...
        }
    }

};