Castelog.metodos.estoy_en = function(expresion, arg1) {
    // Esta función está por completarse/parchearse.
    // Actualmente solo determina correctamente si:
    //   - estoy en navegador: tiene en cuenta window.
    //   - estoy en sistema: tiene en cuenta global y require.
    //   - estoy en windows: funciona bien en node.js solamente (en sistema).
    //   - estoy en linux: funciona bien solo si consideras linux a todo lo que no sea windows.
    if(expresion === "estoy en navegador") {
        return (typeof window !== "undefined") && (typeof document !== "undefined");
    } else if(expresion === "estoy en sistema") {
        return (typeof global !== "undefined") && (typeof require !== "undefined");
    } else if(expresion === "estoy en windows") {
        return (typeof global !== "undefined") && (typeof require !== "undefined") && (require("os").platform().indexOf("win") === 0);
    } else if(expresion === "estoy en linux") {
        return (typeof global !== "undefined") && (typeof require !== "undefined") && (require("os").platform().indexOf("win") !== 0);
    } else if(expresion === "estoy en entorno") {
        return Castelog.variables.globales.entorno === arg1;
    } else {
        throw new Error("Expresión de detección de entorno no identificada o no disponible: "+ expresion);
    }
    if(expresion === "estoy en mac") {
        return undefined;
    } else if(expresion === "estoy en chrome") {
        return undefined;
    } else if(expresion === "estoy en firefox") {
        return undefined;
    } else if(expresion === "estoy en opera") {
        return undefined;
    } else if(expresion === "estoy en safari") {
        return undefined;
    } else if(expresion === "estoy en ios") {
        return undefined;
    } else if(expresion === "estoy en android") {
        return undefined;
    } else if(expresion === "estoy en móvil") {
        return undefined;
    } else if(expresion === "estoy en tablet") {
        return undefined;
    } else if(expresion === "estoy en ordenador") {
        return undefined;
    }
    return true;
};