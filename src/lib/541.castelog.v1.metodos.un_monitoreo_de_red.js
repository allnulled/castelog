Castelog.metodos.un_monitoreo_de_red = async (agente = "nmap", opciones, parametros_iniciales = undefined, fichero_resultados = "result.xml", directorio = process.cwd()) => {
    try {
        if(agente === "pcap") {
            
        } else {
            throw new Error("Required argument «agente» to be a valid network monirot agent like 'node:pcap' in order to «Castelog.metodos.un_monitoreo_de_red»");
        }
    } catch (error) {
        console.log("Error al intentar «Castelog.metodos.un_monitoreo_de_red»:", error);
        console.log("(*) Nota específica de error (1): recuerda que para «Castelog.metodos.un_monitoreo_de_red(...)» necesitas la dependencia «libpcap» en tu sistema operativo");
        console.log("(*) Nota específica de error (2): recuerda que para «Castelog.metodos.un_monitoreo_de_red(...)» necesitas la dependencia «pcap» en tu «node_modules»");
        console.log("(*) Nota específica de error (3): recuerda que para «Castelog.metodos.un_monitoreo_de_red(...)» necesitarás normalmente privilegios elevados en el dispositivo o «sudo node ~.js» debido al uso del modo promiscuo de la tarjeta de red");
        throw error;
    }
};