Castelog.metodos.un_servidor_socket_io = function (servidor, eventos, eventos_socket, opciones_de_socket_servidor, opciones_seguras) {
    try {
        if (typeof window === "object") {
            return;
        } else if (typeof global === "object") {
            let socket_io = undefined;
            try {
                socket_io = require("socket.io");
            } catch (error) {
                console.log(error);
                throw new Error("Error intentando arrancar un servidor con «socket.io» probablemente porque no se encontró la dependencia en node/npm desde " + process.cwd());
            }
            if (typeof servidor === 'undefined') {
                if (opciones_seguras) {
                    throw new Error("Opciones seguras de socket.io no están implementadas todavía");
                } else if (servidor) {
                    // @OK!
                } else {
                    servidor = require("http").createServer(function (request, response) {
                        response.writeHead(200, { "Content-type": "text/plain" });
                        response.write("This is a chat server only");
                        return response.end();
                    });
                }
            }
            const socket_connection = new socket_io.Server(servidor, opciones_de_socket_servidor);
            for (let indexEvento = 0; indexEvento < eventos.length; indexEvento++) {
                const evento = eventos[indexEvento];
                if (Array.isArray(evento) && (evento.length === 2) && (typeof evento[0] === "string") && (typeof evento[1] === "function")) {
                    const [evento_id, evento_funcion] = evento;
                    socket_connection.on(evento_id, (...args) => evento_funcion(args, {
                        socket_io,
                        io: socket_io,
                        socket: socket_connection,
                        evento: evento
                    }));
                } else if ((typeof evento === "object") && (evento.tipo === "espacio de nombres")) {
                    const nombre_de_espacios = evento.nombre;
                    if (typeof evento.nombre !== "string") {
                        throw new Error("Required argument «eventos» on index «" + indexEvento + "» on property «nombre» to be a string in order to «Castelog.metodos.un_servidor_socket_io»");
                    }
                    if (!Array.isArray(evento.eventos)) {
                        throw new Error("Required argument «eventos» on index «" + indexEvento + "» on property «eventos» to be an array in order to «Castelog.metodos.un_servidor_socket_io»");
                    }
                    const socket_namespaced = socket_connection.of(nombre_de_espacios);
                    for (let indexSubevento = 0; indexSubevento < evento.eventos.length; indexSubevento++) {
                        const subevento = evento.eventos[indexSubevento];
                        const [subevento_id, subevento_funcion] = subevento;
                        if (Array.isArray(subevento) && (subevento.length === 2) && (typeof subevento[0] === "string") && (typeof subevento[1] === "function")) {
                            socket_namespaced.on(subevento_id, (...args) => subevento_funcion(args, {
                                socket_io,
                                io: socket_connection,
                                socket: socket_connection,
                                evento: evento
                            }));
                        } else {
                            throw new Error("Required argument «eventos» on index «" + indexEvento + "» on property «eventos» on index «" + indexSubevento + "» to be an array like [string, function] in order to «Castelog.metodos.un_servidor_socket_io»")
                        }
                    }
                } else {
                    throw new Error("Required argument «eventos» on index «" + indexEvento + "» to be an array like [string, function] or to be an object with «tipo» set to «espacio de nombres» in order to «Castelog.metodos.un_servidor_socket_io» (message 2)")
                }
            }
            socket_connection.on("connect", (socket_subconnection) => {
                for (let indexEvento = 0; indexEvento < eventos_socket.length; indexEvento++) {
                    const evento = eventos_socket[indexEvento];
                    if (Array.isArray(evento) && (evento.length === 2) && (typeof evento[0] === "string") && (typeof evento[1] === "function")) {
                        const [evento_id, evento_funcion] = evento;
                        socket_subconnection.on(evento_id, (...args) => evento_funcion(args, {
                            socket_io,
                            io: socket_connection,
                            socket: socket_subconnection,
                            evento: evento
                        }));
                    } else if ((typeof evento === "object") && (evento.tipo === "espacio de nombres")) {
                        const nombre_de_espacios = evento.nombre;
                        if (typeof evento.nombre !== "string") {
                            throw new Error("Required argument «eventos_socket» on index «" + indexEvento + "» on property «nombre» to be a string in order to «Castelog.metodos.un_servidor_socket_io»");
                        }
                        if (!Array.isArray(evento.eventos)) {
                            throw new Error("Required argument «eventos_socket» on index «" + indexEvento + "» on property «eventos» to be an array in order to «Castelog.metodos.un_servidor_socket_io»");
                        }
                        const socket_namespaced = socket_subconnection.of(nombre_de_espacios);
                        for (let indexSubevento = 0; indexSubevento < evento.eventos.length; indexSubevento++) {
                            const subevento = evento.eventos[indexSubevento];
                            const [subevento_id, subevento_funcion] = subevento;
                            if (Array.isArray(subevento) && (subevento.length === 2) && (typeof subevento[0] === "string") && (typeof subevento[1] === "function")) {
                                socket_namespaced.on(subevento_id, (...args) => subevento_funcion(args, {
                                    socket_io,
                                    io: socket_connection,
                                    socket: socket_subconnection,
                                    evento: evento
                                }));
                            } else {
                                throw new Error("Required argument «eventos» on index «" + indexEvento + "» on property «eventos» on index «" + indexSubevento + "» to be an array like [string, function] in order to «Castelog.metodos.un_servidor_socket_io»")
                            }
                        }
                    } else {
                        throw new Error("Required argument «eventos» on index «" + indexEvento + "» to be an array like [string, function] or to be an object with «tipo» set to «espacio de nombres» in order to «Castelog.metodos.un_servidor_socket_io» (message 2)")
                    }
                }
            });
            return socket_connection;
        }
    } catch (error) {
        console.log("Error al intenter «un_servidor_socket_io»", error);
        throw error;
    }
};