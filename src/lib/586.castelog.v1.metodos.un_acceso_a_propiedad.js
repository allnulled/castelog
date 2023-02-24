Castelog.metodos.un_acceso_a_propiedad = function (selector, base, valor_por_defecto = Error) {
    if (!Array.isArray(selector)) {
        throw new Error("Se requiere propiedad «selector» ser un array para «Castelog.metodos.un_acceso_a_propiedad»");
    }
    let valor_pivote = base;
    try {
        for(let index = 0; index < selector.length; index++) {
            const parte_de_selector = selector[index];
            valor_pivote = valor_pivote[parte_de_selector];
        }
    } catch (error) {
        valor_pivote = valor_por_defecto;
    }
    return valor_pivote;
};