Castelog.metodos.una_reduccion_recursiva = function (base, reduccion, inicio = {}) {
    const claves = Object.keys(base);
    let salida = inicio;
    for(let index = 0; index < claves.length; index++) {
        const clave = claves[index];
        const valor = base[clave];
        const salida_intermedia = reduccion(salida, valor, clave, reduccion, index, base);
        if(typeof salida_intermedia !== "undefined") {
            if(salida_intermedia instanceof Castelog.variables.Resultado_de_reduccion_recursiva) {
                return salida_intermedia.resultado;
            }
            salida = salida_intermedia;
        }
    }
    return salida;
};

Castelog.variables.Resultado_de_reduccion_recursiva = class {
    static factoria(dato) {
        return new this(dato);
    }
    constructor(resultado) {
        this.resultado = resultado;
    }
};