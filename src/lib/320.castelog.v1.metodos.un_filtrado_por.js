Castelog.metodos.un_filtrado_por = function(lista, filtro) {
    if(typeof lista === "object") {
        if(Array.isArray(lista)) {
            return lista.reduce((output, value, index) => {
                const otherValue = filtro(value, index, index, output, lista);
                if (otherValue === true) {
                    output.push(value);
                }
                return output;
            }, []);
        } else {
            const keys = Object.keys(lista);
            return lista.reduce((output, key, index) => {
                const value = lista[key];
                if(filtro(value, key, index, output, lista)) {
                    output[key] = value;
                }
                return output;
            }, {});
        }
    } else throw new Error("Required argument «lista» to be an array in order to «Castelog.metodos.un_filtrado_por»")
};