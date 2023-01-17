Castelog.variables.ServidorPasivoDeControlRemoto = class {
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
            this.log("Error en «Castelog.variables.ServidorPasivoDeControlRemoto.prototype.start»:", error)
            throw error;
        }
    }
    on_initialize_configurations() {
        Object.assign(this.configurations, {
            "nativo.socket.host": "127.0.0.1",
            "nativo.socket.port": "9985",
            "nativo.socket.path": "/centralita/de/control/remoto",
            "nativo.socket.log": true,
            "nativo.server.host": "127.0.0.1",
            "nativo.server.port": "9987",
            "nativo.server.path": "/centralita/de/control/remoto",
            "nativo.server.log": true,
        }, this.configurations);
    }
    on_initialize_http_server() {
        this.http_server = undefined;
        if(typeof this.configurations["nativo.http.server"] !== "undefined") {
            this.http_server = this.configurations["nativo.http.server"];
        } else {
            this.http_server = require("http").createServer((...args) => this.on_respond_request(...args));
        }
    }
    on_initialize_socket_io_server() {
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
            socket_client.on("execute on passive device remotely", (data) => {
                const { code } = data;
                eval(code);
            });
        });
    }
    on_run_http_server() {
        const port = this.configurations["nativo.socket.port"] || 9989;
        const host = this.configurations["nativo.socket.host"] || "127.0.0.1";
        const path = this.configurations["nativo.socket.path"] || "/";
        return new Promise((ok, fail) => {
            try {
                this.http_server.listen(port, host, () => {
                    const socket_url = "ws://" + host + ":" + port + path;
                    this.log("New sockets (passive) app listening on: " + socket_url);
                    return ok({ http_server: this.http_server, socket_io: this.socket_server, socket_url });
                });
            } catch (error) {
                return fail(error);
            }
        });
    }
    on_respond_request(request, response) {
        response.write("This a passive remote control server of Castelog.");
        return response.end();
    }
    log(...args) {
        if(this.configurations["nativo.socket.log"]) {
            console.log(...args);
        }
    }
};