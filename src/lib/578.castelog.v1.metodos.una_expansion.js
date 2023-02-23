Castelog.variables.configuraciones_de_expansion_por_defecto = {
    separador: "/"
};
Castelog.metodos.una_expansion = function(base = {}, expansor = {}, configuraciones_arg = {}) {
    const configuraciones = Object.assign({}, Castelog.variables.configuraciones_de_expansion_por_defecto, configuraciones_arg);
    const { separador } = configuraciones;
    const expansor_ids = Object.keys(expansor);
    for(let index_id = 0; index_id < expansor_ids.length; index_id++) {
        const expansor_id = expansor_ids[index_id];
        const expansor_valor = expansor[expansor_id];
        const expansor_partes = expansor_id.split(separador).filter(it => it !== "");
        let pivote = base;
        for(let index_parte_id = 0; index_parte_id < expansor_partes.length; index_parte_id++) {
            const expansor_parte = expansor_partes[index_parte_id];
            if(typeof pivote === "undefined") {
                pivote = {};
            } else if (typeof pivote === "boolean") {
                pivote = { $valor: pivote };
            } else if (typeof pivote === "number") {
                pivote = { $valor: pivote };
            }
            if(index_parte_id === expansor_partes.length - 1) {
                pivote[expansor_parte] = expansor_valor;
            } else {
                pivote = pivote[expansor_parte];
            }
        }
    }
    return base;
}