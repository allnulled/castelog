Castelog.metodos.una_insercion_de_elemento_del_dom = function (selector, base, elemento_html) {
    if (typeof base === "string") {
        base = Array.from(document.querySelectorAll(base));
    }
    if (base === null) {
        base = [document.body];
    }
    if (base instanceof HTMLElement) {
        base = [base];
    }
    if (!Array.isArray(base)) {
        throw new Error("Required parameter «base» to result a css selection as an array in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if (base.length === 0) {
        throw new Error("Required parameter «base» to be css selection matching minimum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if (base.length > 1) {
        throw new Error("Required parameter «base» to be css selection matching maximum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    base = base[0];
    if (!(base instanceof HTMLElement)) {
        throw new Error("Required parameter «base» to result an instance of HTMLElement in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if (typeof selector !== "string") {
        throw new Error("Required parameter «selector» to be a string in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    const selection = base.querySelectorAll(selector);
    if (selection.length === 0) {
        throw new Error("Required parameter «selector» to match minimum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    if (selection.length > 1) {
        throw new Error("Required parameter «selector» to match maximum 1 element in order to «Castelog.metodos.una_insercion_de_elemento_del_dom»");
    }
    const selected = selection[0];
    selected.appendChild(elemento_html);
    return [selected, elemento_html];
};