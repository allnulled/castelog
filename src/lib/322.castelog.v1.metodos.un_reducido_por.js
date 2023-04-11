Castelog.metodos.un_reducido_por = function (lista, reduccion, base = false) {
    if (typeof lista === "object") {
        if(typeof reduccion !== "function") throw new Error("Required argument «reduccion» to be a function");
        if (Array.isArray(lista)) {
            const base_inicializada = (base !== false) ? base : [];
            return lista.reduce((output, value, index) => {
                const otherValue = reduccion(value, output, index, index, lista);
                if (typeof otherValue !== "undefined") {
                    output = otherValue;
                }
                return output;
            }, base_inicializada);
        } else {
            const keys = Object.keys(lista);
            const base_inicializada = (base !== false) ? base : {};
            return keys.reduce((output, key, index) => {
                const value = lista[key];
                const otherValue = reduccion(value, output, key, index, lista);
                if (typeof otherValue !== "undefined") {
                    output = otherValue;
                }
                return output;
            }, base_inicializada);
        }
    } else throw new Error("Required argument «lista» to be an array in order to «Castelog.metodos.un_reducido_por»")
};