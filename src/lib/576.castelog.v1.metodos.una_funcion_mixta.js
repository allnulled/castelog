Castelog.metodos.un_resultado_de_funcion_mixta = function (...args) {
    return new Castelog.variables.Resultado_de_funcion_mixta(...args);
};

Castelog.variables.Resultado_de_funcion_mixta = class {
    static factoria(dato) {
        return new this(dato);
    }
    constructor(resultado) {
        this.resultado = resultado;
    }
};

Castelog.metodos.una_funcion_mixta = function (partir = [], configuraciones = []) {
    if (!Array.isArray(partir)) {
        throw new Error("Required parameter «partir» to be an array in order to «Castelog.metodos.una_funcion_mixta»")
    }
    if (!Array.isArray(configuraciones)) {
        throw new Error("Required parameter «configuraciones» to be an array in order to «Castelog.metodos.una_funcion_mixta»")
    }
    const partir_copy = [].concat(partir);
    return function (...parametros) {
        try {
            const total = [];
            for (let index = 0; index < partir_copy.length; index++) {
                const funcion_parcial = partir_copy[index];
                (function x(funcion_parcial) {
                    let resultado_parcial = undefined;
                    if (typeof funcion_parcial === "function") {
                        resultado_parcial = funcion_parcial(...parametros, configuraciones, total, this, index);
                    } else {
                        resultado_parcial = funcion_parcial;
                    }
                    if (resultado_parcial instanceof Castelog.variables.Resultado_de_funcion_mixta) {
                        return resultado_parcial.resultado;
                    }
                    total.push(resultado_parcial)
                })(funcion_parcial);
            }
            return total;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};