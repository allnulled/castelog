Castelog.metodos.un_reseteo_de_directorio = async function(directorio, esAsincrono = false) {
    try {
        if(typeof require === "function") {
            const fs = require("fs");
            if(esAsincrono) {
                await fs.promises.rmdir(directorio, { recursive: true });
                await fs.promises.mkdir(directorio);
            } else {
                fs.rmdirSync(directorio, { recursive: true });
                fs.mkdirSync(directorio);
            }
        };
    } catch (error) {
        console.log("Error al hacer un reseteo de directorio:", error);
        throw error;
    }
};