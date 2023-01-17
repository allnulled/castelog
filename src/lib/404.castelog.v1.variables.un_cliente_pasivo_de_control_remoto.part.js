Castelog.variables.ClientePasivoDeControlRemoto = class {
    constructor(configuraciones, directorio) {
        Object.assign(this, { configuraciones, directorio });
    }
    async start() {
        try {
            this.on_initialize_configurations();
            this.on_initialize_connection();
        } catch (error) {
            console.log("Error en «Castelog.variables.ClientePasivoDeControlRemoto.prototype.start»:", error)
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
            const socket_url = "ws://" + socket_host + ":" + socket_port + socket_path;
            const socket_id = "abcdef";
            this.connection = require("socket.io-client").io(socket_url);
            this.connection.on("connect", (parameters) => {
                console.log("connect", parameters);
                this.connection.emit("register passive device", { name: socket_id, password: socket_id });
            });
            this.connection.on("disconnect", (parameters) => {
                console.log("disconnect", parameters);
                this.connection.emit("unregister passive device", { name: socket_id, password: socket_id });
            });
            this.connection.on("register passive device response", () => {
                console.log("ok: current device was registered as passive device");
            });
            this.connection.on("unregister passive device response", () => {
                console.log("ok: current device was unregistered as passive device");
            });
            this.connection.on("execute on passive device remotely", (parameters) => {
                console.log("execute on passive device remotely", parameters);
            });
        } catch (error) {
            console.log("Error en «Castelog.variables.ClientePasivoDeControlRemoto.prototype.on_initialize_connection»:", error)
            throw error;
        }
    }
};