Castelog.metodos.una_descripcion_del_entorno = function() {
    try {
        if(typeof require === "function") {
            const os = require("os");
            return {
                hostname: os.hostname(),
                platform: os.platform(),
                architecture: os.arch(),
                type: os.type(),
                release: os.release(),
                endianness: os.endianness(),
                totalmem: os.totalmem(),
                tmpdir: os.tmpdir(),
                homedir: os.homedir(),
                userInfo: os.userInfo(),
                cpus: os.cpus(),
                networkInterfaces: os.networkInterfaces()
            };
        };
    } catch (error) {
        console.log("Error al hacer una descripción del entorno:", error);
        throw error;
    }
};