Castelog.metodos.un_dia_de_la_semana = function(base) {
    if(typeof base === "string") {
        const baseLower = base.toLowerCase();
        if (baseLower === "lunes") { return 1 }
        else if (baseLower === "martes") { return 2 }
        else if (baseLower === "miércoles") { return 3 }
        else if (baseLower === "jueves") { return 4 }
        else if (baseLower === "viernes") { return 5 }
        else if (baseLower === "sábado") { return 6 }
        else if (baseLower === "domingo") { return 0 }
        else throw new Error("Required parameter «base» to be a valid week day when string in order to «Castelog.metodos.un_dia_de_la_semana»");
    }
    if(base instanceof Date) {
        base = base.getDay();
    }
    if(typeof base === "number") {
        if (base === 0) { return "Domingo" }
        else if (base === 1) { return "Lunes" }
        else if (base === 2) { return "Martes" }
        else if (base === 3) { return "Miércoles" }
        else if (base === 4) { return "Jueves" }
        else if (base === 5) { return "Viernes" }
        else if (base === 6) { return "Sábado" }
        else throw new Error("Required parameter «base» to be a valid number when number in order to «Castelog.metodos.un_dia_de_la_semana»");
    }
    throw new Error("Required parameter «base» to be a valid type (string, number or date) in order to «Castelog.metodos.un_dia_de_la_semana»");
};