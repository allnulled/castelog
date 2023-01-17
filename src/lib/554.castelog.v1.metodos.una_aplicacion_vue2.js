Castelog.metodos.una_aplicacion_vue2 = function (id, plantilla, logica, estilos, parametros_de_estilos = {}, rutas = [], traducciones = [], montada = null) {
    if(typeof window === "object") {
        const vue_global = (typeof window.Vue !== "undefined") ? window.Vue : (typeof window.vue !== "undefined") ? window.vue : undefined;
        if(typeof vue_global === "undefined") {
            throw new Error("Castelog no pudo encontrar Vue en el entorno vía 'window.vue' o 'window.Vue'");
        }
        if(typeof vue_global.prototype.$primera_app_vue_desde_castelog === "undefined") {
            if(typeof VueI18next !== "undefined") {
                vue_global.use(VueI18n);
            }
        }
        const componente_base_original = { template: plantilla };
        const definicion_logica_de_componente = logica ? logica(componente_base_original) : {};
        const componente_base = Object.assign({}, componente_base_original, definicion_logica_de_componente);
        const uniqueId = "castelog-style-tag-" + id;
        const foundElement = document.getElementById(uniqueId);
        if(estilos && (!foundElement)) {
            const styleTag = document.createElement("style");
            styleTag.id = uniqueId;
            styleTag.textContent = Castelog.metodos.una_plantilla(estilos, {
                estilo_uid: uniqueId,
                componente: componente_base,
                componente_id: id,
                ...parametros_de_estilos,
            })();
            document.head.appendChild(styleTag);
        }
        // const userPreferredLocales = window.navigator.languages;
        // const localeIds = Object.keys(traducciones);
        // let currentLocale = "en";
        // for(let indexLocales = 0; indexLocales < userPreferredLocales.length; indexLocales++) {
        //     const userPreferredLocale = userPreferredLocales[indexLocales];
        //     const userPreferredIso = userPreferredLocale.split("-")[0];
        //     const localePosition = localeIds.indexOf(userPreferredIso);
        //     if (localePosition !== -1) {
        //         currentLocale = localeIds[localePosition];
        //     }
        // }
        // i18next.init({
        //     lng: currentLocale,
        //     nsSeparator: "#<1>#",
        //     keySeparator: "#<2>#",
        //     pluralSeparator: "#<3>#",
        //     contextSeparator: "#<4>#",
        //     resources: traducciones ? Object.keys(traducciones).reduce(function(out, key) {
        //         if(!(key in out)) {
        //             out[key] = {
        //                 translation: traducciones[key]
        //             };
        //         }
        //         return out;
        //     }, {}) : {}
        // });
        const vue_global_parameters = {...componente_base};
        if(Array.isArray(rutas) && rutas.length) {
            if(typeof vue_global.prototype.$primera_app_vue_desde_castelog === "undefined") {
                vue_global_parameters.router = new VueRouter({
                    routes: rutas
                });
            } else {
                throw new Error("Una segunda app vue no permite definir rutas específicas.");
            }
        }
        // if(!("$i18n" in vue_global.prototype)) {
        //     vue_global_parameters.i18n = new VueI18next(i18next);
        // }
        const instancia_base = new vue_global(vue_global_parameters);
        if(typeof(montada) === "string") {
            instancia_base.$mount(montada);
        } else {
            console.log("[!] Aplicación Vue2 no montada.");
            console.log(" [+] montada:", montada);
            console.log(" [+] id:", id);
            console.log(" [+] plantilla:", plantilla);
            console.log(" [+] logica:", logica);
            console.log(" [+] estilos:", estilos);
            console.log(" [+] rutas:", rutas);
            console.log(" [+] traducciones:", traducciones);
        }
        vue_global.prototype.$primera_app_vue_desde_castelog = instancia_base;
        return instancia_base;
    } else if(typeof global === "object") {
        return;
    }
};