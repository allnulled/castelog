/*lib:castelog@0.0.1*/
Castelog = (function(factory, scope) {
    const output = factory.call(scope);
    if(typeof window === "object") {
        window["Castelog"] = output;
    }
    if(typeof global === "object") {
        global["Castelog"] = output;
    }
    if(typeof module === "object") {
        module.exports = output;
    }
    return output;
})(function() {
    if((typeof(window) !== "undefined") && (typeof(window.Castelog) !== "undefined")) {
        return window.Castelog;
    }
    if((typeof(global) !== "undefined") && (typeof(global.Castelog) !== "undefined")) {
        return global.Castelog;
    }
    
    const globalmente = (typeof(window) !== "undefined") ? window : (typeof(global) !== "undefined") ? global : this;
    const Castelog = {
        globalmente,
        metodos: {},
        modulos: {},
        variables: {
            noop: function() {},
            mysql2: undefined,
            Automatic_http_rest_api_interface: Automatic_http_rest_api_interface,
            RanasDB: typeof globalmente.RanasDB !== "undefined" ? globalmente.RanasDB : undefined,
            SimplestDB: globalmente.SimplestDB,
            adaptador_de_bases_de_datos_por_defecto: globalmente.SimplestDB,
            axios: typeof window !== "object" ? require("axios") : globalmente.axios,
            ejs: globalmente.ejs,
            globales: {
                entorno: "development"
            },
            alfabeto_ingles: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            Entorno_de_testeo: function(parametros = {}) {
                Object.assign(this, parametros);
                return this;
            }
        },
        compilacion: {} // Metadatos de la ultima compilacion de Castelog, aqui.
    };

    return Castelog;
}, this);