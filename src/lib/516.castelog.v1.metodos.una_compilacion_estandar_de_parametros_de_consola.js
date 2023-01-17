Castelog.metodos.una_compilacion_estandar_de_parametros_de_consola = function(parametros) {
    if(!Array.isArray(parametros)) {
        throw new Error("Se requiere que «parametros» sea un array");
    }
    const compilados = {};
    let propiedadSeleccionada = "_";
    for(let index = 0; index < parametros.length; index++) {
        const parametro = parametros[index];
        if (parametro.match(/^\-\-/g)) {
            propiedadSeleccionada = parametro.replace(/^\-\-/g, "");
        } else if(parametro.match(/^\-/g)) {
            propiedadSeleccionada = parametro.replace(/^\-/g, "");
        } else {
            if (!Array.isArray(compilados[propiedadSeleccionada])) {
                compilados[propiedadSeleccionada] = [];
            }
            compilados[propiedadSeleccionada].push(parametro);
        }
    }
    return compilados;
};