Castelog.metodos.un_mapeado_por = function (lista, mapeo) {
    if (typeof lista === "object") {
        if (Array.isArray(lista)) {
            return lista.reduce((output, value, index) => {
                const otherValue = mapeo(value, index, index, output, lista);
                if (typeof otherValue !== "undefined") {
                    output.push(value);
                }
                return output;
            }, []);
        } else {
            const keys = Object.keys(lista);
            return keys.reduce((output, key, index) => {
                const value = lista[key];
                const otherValue = mapeo(value, key, index, output, lista);
                if (typeof otherValue !== "undefined") {
                    output[key] = value;
                }
                return output;
            }, {});
        }
    } else throw new Error("Required argument «lista» to be an array in order to «Castelog.metodos.un_mapeado_por»")
};