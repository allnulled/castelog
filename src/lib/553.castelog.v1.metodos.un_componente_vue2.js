Castelog.metodos.un_componente_vue2 = function(id, plantilla_arg, logica, estilos, parametros_de_estilos = {}) {
    if(typeof window === "object") {
        const vue_global = (typeof window.Vue !== "undefined") ? window.Vue :
            (typeof window.vue !== "undefined") ? window.vue : undefined;
        if(typeof vue_global === "undefined") {
            throw new Error("Castelog no pudo encontrar Vue en el entorno vía 'window.vue' o 'window.Vue'");
        }
        let plantilla = plantilla_arg;
        if(typeof plantilla_arg === "function") {
            plantilla = plantilla_arg(id);
        }
        const componente_base_original = { template: plantilla };
        const definicion_logica_de_componente = logica ? logica(componente_base_original) : {};
        const componente_base = Object.assign({}, componente_base_original, definicion_logica_de_componente);
        const componente_clase_base = vue_global.component(id, componente_base);
        const uniqueId = "castelog-style-tag-" + id;
        const foundElement = document.getElementById(uniqueId);
        if(estilos && !foundElement) {
            const styleTag = document.createElement("style");
            styleTag.id = uniqueId;
            styleTag.textContent = Castelog.metodos.una_plantilla(estilos, {
                estilo_uid: uniqueId,
                componente: componente_base,
                componente_id: id,
                componente_clase: componente_clase_base,
                ...parametros_de_estilos,
            })();
            document.head.appendChild(styleTag);
        }
        return componente_clase_base;
    } else if(typeof global === "object") {
        return;
    }
};