Castelog.metodos.un_reducido_por = function (lista, reduccion, base = false) {
    if (typeof lista === "object") {
        if (Array.isArray(lista)) {
            return lista.reduce((output, value, index) => {
                const otherValue = reduccion(value, output, index, index, lista);
                if (typeof otherValue !== "undefined") {
                    output = otherValue;
                }
                return output;
            }, base || []);
        } else {
            const keys = Object.keys(lista);
            return keys.reduce((output, key, index) => {
                const value = lista[key];
                const otherValue = reduccion(value, output, key, index, lista);
                if (typeof otherValue !== "undefined") {
                    output = otherValue;
                }
                return output;
            }, base || {});
        }
    } else throw new Error("Required argument «lista» to be an array in order to «Castelog.metodos.un_reducido_por»")
};