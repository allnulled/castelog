Castelog.metodos.un_cliente_socket_io = function (eventos, opciones) {
    try {
        let socket_io_client = undefined;
        let cliente = undefined;
        let common_io = undefined;
        if (typeof io === "function") {
            socket_io_client = io;
            common_io = io.io;
        } else if (typeof require === "function") {
            socket_io_client = require("socket.io-client");
            common_io = socket_io_client.io;
        } else {
            throw new Error("Required dependency «socket.io-client» reachable by global or by module in order to «Castelog.metodos.un_cliente_socket»");
        }
        if (typeof common_io !== "function") {
            throw new Error("Required dependency «common_io» to be a function in order to «Castelog.metodos.un_cliente_socket»");
        }
        const client_socket = common_io(opciones);
        if (!Array.isArray(eventos)) {
            throw new Error("Required parameter «eventos» to be an array in order to «Castelog.metodos.un_cliente_socket_io»");
        }
        for (let indexEvento = 0; indexEvento < eventos.length; indexEvento++) {
            const evento = eventos[indexEvento];
            if (Array.isArray(evento) && (evento.length === 2) && (typeof evento[0] === "string") && (typeof evento[1] === "function")) {
                const [evento_id, evento_funcion] = evento;
                const evento_funcion_final = (() => {
                    return (...args) => {
                        return evento_funcion(args, {
                            socket_io_client,
                            io: socket_io_client.io,
                            client: client_socket,
                            socket: client_socket,
                            evento: evento
                        });
                    }
                })();
                client_socket.on(evento_id, evento_funcion_final);
            } else {
                throw new Error("Required argument «eventos» on index «" + indexEvento + "» to be an array like [string, function] in order to «Castelog.metodos.un_cliente_socket_io»")
            }
        }
        return client_socket;
    } catch (error) {
        console.log("Error al intenter «un_cliente_socket_io»", error);
        throw error;
    }
};