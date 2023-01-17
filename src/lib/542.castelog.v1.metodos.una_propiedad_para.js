Castelog.metodos.no_es_propietizable = objeto => (typeof objeto !== "object") && (typeof objeto !== "string") && (typeof objeto !== "function");
Castelog.metodos.no_tiene_propiedad = (objeto, propiedad) => Castelog.metodos.no_es_propietizable(objeto) || (typeof propiedad !== "string") || (!(propiedad in objeto));
Castelog.metodos.una_propiedad_para = async (propiedad, objeto, valor_por_defecto = undefined) => {
    if(!Array.isArray(propiedad)) {
        throw new Error("Required parameter «propiedad» to be an array in order to «Castelog.metodos.una_propiedad_para»");
    }
    let valor_pivote = objeto;
    for(let index_propiedad = 0; index_propiedad < propiedad.length; index_propiedad++) {
        const id_de_propiedad = propiedad[index_propiedad];
        if(Castelog.metodos.no_tiene_propiedad(valor_pivote, id_de_propiedad)) return valor_por_defecto;
        valor_pivote = valor_pivote[id_de_propiedad];
    }
    return valor_pivote;
};