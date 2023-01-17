Castelog.metodos.un_comando_de_consola = function(comando, configuraciones, esParalelo = false) {
    try {
        if(esParalelo) {
            if(!Array.isArray(comando)) {
                throw new Error("Required parameter «comando» to be an array in order to «Castelog.metodos.un_comando_de_consola» in «en paralelo» mode");
            }
            if (comando.length !== 2) {
                throw new Error("Required parameter «comando» to be an array of 2 items in order to «Castelog.metodos.un_comando_de_consola» in «en paralelo» mode");
            }
            if(typeof comando[0] !== "string") {
                throw new Error("Required parameter «comando» on item 1 to be a string in order to «Castelog.metodos.un_comando_de_consola» in «en paralelo» mode");
            }
            if(!Array.isArray(comando[1])) {
                throw new Error("Required parameter «comando» on item 2 to be an array in order to «Castelog.metodos.un_comando_de_consola» in «en paralelo» mode");
            }
        } else {
            if (typeof comando !== "string") {
                throw new Error("Required parameter «comando» to be a string in order to «Castelog.metodos.un_comando_de_consola» in «en serie» mode");
            } 
        }
        if(typeof configuraciones !== "object") {
            throw new Error("Required parameter «configuraciones» to be an object in order to «Castelog.metodos.un_comando_de_consola»");
        }
        if(typeof require !== "function") {
            throw new Error("Required global «require» to be a function in order to «Castelog.metodos.un_comando_de_consola»");
        }
        if(typeof configuraciones.cwd !== "string") {
            configuraciones.cwd = process.cwd();
        }
        if(typeof configuraciones.stdio === "undefined") {
            if(!esParalelo) {
                configuraciones.stdio = ["inherit", "inherit", "inherit"];
            } else {
                configuraciones.stdio = ["ignore", "ignore", "ignore"];
            }
        }
        if(esParalelo) {
            return new Promise((ok, fail) => {
                return require("child_process").spawn(comando[0], comando[1], configuraciones, (error, stdout, stderr) => {
                    if(error) {
                        return fail(error);
                    }
                    if(stderr) {
                        return ok({ error: stderr });
                    }
                    if(stdout) {
                        return ok(stdout);
                    }
                    return ok();
                });
                
            });
        } else {
            return require("child_process").execSync(comando, configuraciones);
        }
    } catch (error) {
        console.log("Error al ejecutar comando de consola:", error);
        throw error;
    }
};