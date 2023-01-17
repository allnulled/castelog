Castelog.metodos.una_confirmacion = function(mensaje, defecto = false) {
    if(typeof window === "object") {
        return window.confirm(mensaje, defecto);
    } else if(typeof global === "object") {
        const readline = require("readline");
        const reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return new Promise(ok => {
            const ask = () => {
                reader.question(mensaje + ( defecto ? " (S/n = por defecto «sí»)" : " (s/N = por defecto «no»)" ), answer => {
                    reader.close();
                    if(!answer) {
                        return ok(defecto);
                    }
                    return ok(answer);
                });
            };
            ask();
        });
    }
};