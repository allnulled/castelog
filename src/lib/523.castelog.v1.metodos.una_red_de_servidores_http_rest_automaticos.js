Castelog.metodos.una_red_de_servidores_http_rest_automaticos = function (rutaDeProyectoPrototipo, deployerCallback) {
    if (typeof global === "object") {
        return new Promise((ok, fail) => {
            try {
                const path = require("path");
                const rutaInicial = path.resolve(rutaDeProyectoPrototipo);
                Castelog.variables.generador_de_proyector_rest(rutaInicial);
                const rutaGeneratorBuilder = path.resolve(rutaInicial, "./bin/build-generator.js");
                require(rutaGeneratorBuilder);
                const rutaApi = path.resolve(rutaInicial, "./api.js");
                const restApi = require(rutaApi);
                const { una_red_de_servidores_http_rest_automaticos } = restApi;
                return una_red_de_servidores_http_rest_automaticos(deployerCallback).then(() => {
                    console.log("La red de servidores http rest automáticos fue desplegada exitosamente,");
                    ok();
                }).catch(error => {
                    console.log("Hubo errores al intentar generar una red de servidores http rest automáticos:", error);
                    fail(error);
                });
            } catch (error) {
                return fail(error);
            }
        });
    } else {
        console.log("Sintaxis de red de servidores HTTP REST automáticos no soportada en navegadores");
    }
};