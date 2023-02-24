Castelog.metodos.una_seleccion_del_primer_elemento_del_dom = function (parametros, base) {
    if (typeof parametros !== "string") {
        throw new Error("Required parameter «parametros» to be a string (a css selector) in order to «Castelog.metodos.una_seleccion_del_primer_elemento_del_dom»");
    }
    if (typeof base === "string") {
        base = document.querySelector(base);
    }
    if (!(base instanceof HTMLElement)) {
        throw new Error("Required parameter «base» to a string (a css selector) matching at least 1 element or an instance of HTMLElement in order to «Castelog.metodos.una_seleccion_del_primer_elemento_del_dom»");
    }
    return base.querySelector(parametros);
};