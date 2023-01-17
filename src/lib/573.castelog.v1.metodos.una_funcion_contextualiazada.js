Castelog.variables.Polyfill_de_vm_para_navegadores = function() {
    // https://raw.githubusercontext.com/snanovskyi/vm-browser/master/index.js
};

Castelog.metodos.una_funcion_contextualizada = function(contexto, funcion, errores = undefined) {
    if(typeof contexto !== "object") {
        throw new Error("Required argument «contexto» to be an object in order to «Castelog.metodos.una_funcion_contextualizada»");
    }
    if(typeof funcion !== "function") {
        throw new Error("Required argument «funcion» to be an function in order to «Castelog.metodos.una_funcion_contextualizada»");
    }
    if (typeof errores !== "function") {
        errores = function (error) {
            console.log("Errors arised on «Castelog.metodos.una_funcion_contextualizada». Details:");
            console.log(error);
            throw error;
        };
    }
    if(typeof errores !== "function") {
        throw new Error("Required argument «errores» to be an function in order to «Castelog.metodos.una_funcion_contextualizada»");
    }
    if (typeof finalmente !== "function") {
        finalmente = Castelog.variables.noop;
    }
    let vm = undefined;
    if ((typeof global !== "undefined") && (typeof require !== "undefined")) {
        vm = require("vm");
    } else if (typeof window !== "undefined") {
        vm = Castelog.variables.Polyfill_de_vm_para_navegadores();
    }
    const funcion_virtual = (...args) => {
        const contexto_virtual = vm.createContext(Object.assign(contexto, {
            Castelog,
            console,
            $parametros_virtuales: args,
            $gestor_de_en_errores: errores,
            $gestor_de_finalmente: finalmente
        }));
        const codigo_virtual = `(${funcion.toString()})($gestor_de_en_errores, $gestor_de_finalmente, ...$parametros_virtuales)`;
        return vm.runInContext(codigo_virtual, contexto_virtual);
    };
    return funcion_virtual;
};