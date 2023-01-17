Castelog.variables.ServidorActivoDeControlRemoto = class {
    constructor(configurations, directory) {
        this.activos = [];
        this.pasivos = [];
        Object.assign(this, { configurations, directory });
    }
    async start() {
        try {
            this.on_initialize_configurations();
            this.on_initialize_http_server();
            this.on_initialize_socket_io_server();
            await this.on_run_http_server();
        } catch(error) {
            console.log("Error en «Castelog.variables.ServidorActivoDeControlRemoto.prototype.start»:", error)
            throw error;
        }
    }
    on_initialize_configurations() {
        // @TOREVIEW...
        Object.assign(this.configurations, {
            "nativo.socket.host": "127.0.0.1",
            "nativo.socket.port": "9989",
            "nativo.socket.path": "/centralita/de/control/remoto"
        }, this.configurations);
    }
    on_initialize_http_server() {
        // @TOREVIEW...
        this.http_server = undefined;
        if(typeof this.configurations["nativo.http.server"] !== "undefined") {
            this.http_server = this.configurations["nativo.http.server"];
        } else {
            this.http_server = require("http").createServer((...args) => this.on_respond_request(...args));
        }
    }
    on_initialize_socket_io_server() {
        // @TOREVIEW...
        this.socket_server = require("socket.io").io(this.http_server);
        this.socket_server.on("connect", socket_client => {
            if(this.configurations["nativo.socket.events"]) {
                const allEvents = this.configurations["nativo.socket.events"];
                const eventsKeys = Object.keys(allEvents);
                for(let indexEvent = 0; indexEvent < eventsKeys.length; indexEvent++) {
                    const eventKey = eventsKeys[indexEvent];
                    const eventValue = allEvents[eventKey];
                    const [ event_id, event_function ] = eventValue;
                    socket_client.on(event_id, event_function);
                }
            }
            socket_client.on("unregister passive device", (data) => {
                const { user, password } = data;
                // filter socket_server.?getAllConnections
                // so you can get the user+password key checked
                // then return assigned passive devices
                socket_client.emit("unregister passive device response", { error: "not yet available" });
            });
            socket_client.on("register passive device", (data) => {
                const { user, password } = data;
                // filter socket_server.?getAllConnections
                // so you can get the user+password key checked
                // then return assigned passive devices
                socket_client.emit("register passive device response", { error: "not yet available" });
            });
            socket_client.on("list passive devices", (data) => {
                const { } = data;
                // filter socket_server.?getAllConnections
                // so you can get the user+password key checked
                // then return assigned passive devices
                socket_client.emit("list passive devices response", { error: "not yet available" });
            });
            socket_client.on("execute on passive devices", (data) => {
                const { targets, code } = data;
                // filter socket_server.?getAllConnections
                // so you can get the user+password key checked
                // then return assigned passive devices
                socket_client.emit("execute on passive devices response", { error: "not yet available" });
            });
        });
    }
    on_run_http_server() {
        // @TOREVIEW...
        const port = this.configurations["nativo.socket.port"] || 9989;
        const host = this.configurations["nativo.socket.host"] || "127.0.0.1";
        const path = this.configurations["nativo.socket.path"] || "/";
        return new Promise((ok, fail) => {
            try {
                this.http_server.listen(port, host, () => {
                    const socket_url = "ws://" + host + ":" + port + path;
                    console.log("Un servidor activo de control remoto en:\n  - " + socket_url);
                    return ok({ http_server: this.http_server, socket_io: this.socket_server, socket_url });
                });
            } catch (error) {
                return fail(error);
            }
        });
    }
    on_respond_request(request, response) {
        // @TOREVIEW...
        response.write("This an active remote control server of Castelog.");
        return response.end();
    }
};