Castelog.metodos.siendo = (base, filtros) => {
    if(!Array.isArray(filtros)) {
        throw new Error("Required parameter «filtros» to be an array in order to «Castelog.metodos.siendo»");
    }
    let salida = base;
    for(let indexFiltros = 0; indexFiltros < filtros.length; indexFiltros++) {
        const [filtro, parametros] = filtros[indexFiltros];
        if(!(filtro in Castelog.variables.apendices_de_siendo)) {
            throw new Error("Required filter «" + filtro + "» to be registered on «Castelog.variables.apendices_de_siendo» in order to «Castelog.metodos.siendo@" + filtro + "»");
        }
        const filtroFunction = Castelog.variables.apendices_de_siendo[filtro];
        salida = filtroFunction(salida, parametros);
    }
    return salida;
};