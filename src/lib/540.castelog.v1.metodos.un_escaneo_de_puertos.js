Castelog.metodos.un_escaneo_de_puertos = async (agente = "nmap", opciones = {}) => {
    try {
        if(agente === "nmap") {
            const {
                parametros = undefined,
                salida = "result.xml",
                directorio = process.cwd()
            } = opciones;
            const opciones_de_comando_por_defecto = parametros ? parametros : [
                "-p1-65535",
                "--packet-trace",
                "-r",
                "-vv",
                "-dd",
                "--reason",
                "--osscan-guess",
                "--script-trace",
                "-sV",
                "-oX",
                "result.xml",
                "127.0.0.1",
            ];
            const opciones_de_comando = typeof opciones === "string" ? opciones : opciones_de_comando_por_defecto.concat(opciones);
            await new Promise((ok, fail) => {
                const spawn = require("child_process").spawn("nmap", opciones_de_comando, { cwd: directorio, stdio: ["inherit", "inherit", "inherit"] });
                spawn.on("error", function(error) {
                    if(error) {
                        return fail(error);
                    }
                });
                spawn.on("exit", function (code) {
                    return ok(code);
                });
                spawn.on("data", function (chunk) {});
            });
            const ruta_resultados = require("path").resolve(__dirname, salida);
            return await Castelog.metodos.un_fichero_xml(ruta_resultados);
        } else {
            throw new Error("Required argument «agente» to be a valid port scanner agent like 'nmap' in order to «Castelog.metodos.un_escaneo_de_puertos»");
        }
    } catch (error) {
        console.log("Error al intentar «Castelog.metodos.un_escaneo_de_puertos»:", error);
        console.log("(*) Nota específica de error (1): recuerda que para «Castelog.metodos.un_escaneo_de_puertos(...)» necesitas la dependencia «nmap» en tu sistema operativo");
        console.log("(*) Nota específica de error (2): recuerda que para «Castelog.metodos.un_escaneo_de_puertos(...)» necesitas la dependencia «xml2js» en tu «node_modules»");
        throw error;
    }
};