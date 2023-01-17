Castelog.metodos.un_elemento_html = function(codigo) {
    if(typeof window === "object") {
        const parent = document.createElement("div");
        parent.innerHTML = codigo;
        return parent.children[0];
    } else if(typeof global === "object") {
        throw new Error("El entorno no soporta la carga de elementos HTML nativa. Suele funcionar en navegadores.");
    }
};