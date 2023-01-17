Castelog.metodos.una_seleccion_de_elementos_del_dom = function(parametros, base) {
    if(typeof parametros !== "string") {
        throw new Error("Required parameter «parametros» to be a string (a css selector) in order to «Castelog.metodos.una_seleccion_de_elementos_del_dom»");
    }
    if(typeof base === "string") {
        base = document.querySelector(base);
    }
    if(!(base instanceof HTMLElement)) {
        throw new Error("Required parameter «base» to a string (a css selector) matching at least 1 element or an instance of HTMLElement in order to «Castelog.metodos.una_seleccion_de_elementos_del_dom»");
    }
    return Array.from(base.querySelectorAll(parametros));
};
Castelog.metodos.una_seleccion_del_primer_elemento_del_dom = function(parametros, base) {
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
Castelog.metodos.una_insercion_de_estilos_en_cascada = function(id, contenidos) {
    const PROPERTY = "data-identificador-de-estilo-en-cascada-de-castelog";
    const matches = Array.from(document.head.querySelectorAll(`style`)).filter(item => {
        const id_elemento = item.getAttribute(PROPERTY);
        return id === id_elemento;
    });
    if(matches.length) {
        return false;
    }
    const styleTag = document.createElement("style");
    styleTag.setAttribute(PROPERTY, id);
    styleTag.textContent = contenidos;
    document.head.appendChild(styleTag);
};
Castelog.metodos.un_bloque_de_estilos_en_cascada = function(bloque_de_texto) {
    return bloque_de_texto;
};
Castelog.metodos.una_insercion_de_elemento_del_dom = function(selector, base, elemento_html) {
    if(typeof base === "string") {
        base = Array.from(document.querySelectorAll(base));
    }
    if (base === null) {
        base = [document.body];
    }
    if(base instanceof HTMLElement) {
        base = [ base ];
    }
    if(!Array.isArray(base)) {
        throw new Error("Required parameter «base» to result a css selection as an array in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if(base.length === 0) {
        throw new Error("Required parameter «base» to be css selection matching minimum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if(base.length > 1) {
        throw new Error("Required parameter «base» to be css selection matching maximum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    base = base[0];
    if(!(base instanceof HTMLElement)) {
        throw new Error("Required parameter «base» to result an instance of HTMLElement in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if (typeof selector !== "string") {
        throw new Error("Required parameter «selector» to be a string in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    const selection = base.querySelectorAll(selector);
    if(selection.length === 0) {
        throw new Error("Required parameter «selector» to match minimum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if(selection.length > 1) {
        throw new Error("Required parameter «selector» to match maximum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    const selected = selection[0];
    selected.appendChild(elemento_html);
    return [selected, elemento_html];
};
Castelog.metodos.un_elemento_jquery = function(...parametros) {
    if(typeof jQuery !== "function") {
        throw new Error("Required «jQuery» library to be loaded in order to «Castelog.metodos.un_elemento_jquery»");
    }
    return jQuery(...parametros);
};
