Castelog.metodos.una_serializacion_como_json = function (dato) {
    const visto = [];
    return JSON.stringify(dato, function (clave, valor) {
        if ((!(valor === null && typeof valor === 'object'))) {
            if (visto.indexOf(valor) !== -1) {
                return;
            }
            visto.push(valor)
        }
        return valor;
    });
};