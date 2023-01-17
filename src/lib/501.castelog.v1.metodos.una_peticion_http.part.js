Castelog.variables.cliente_http = Castelog.variables.axios.create();

Castelog.metodos.una_peticion_http = function (url, method_p, data, headers, client = Castelog.variables.cliente_http, en_errores = console.log) {
    const errorHandler = (typeof en_errores === "function") ? en_errores : error => console.log("Error en petición HTTP:", error);
    const requests_client = (typeof client === "function") ? client : Castelog.variables.cliente_http;
    try {
        const method = method_p ? method_p.toLowerCase() : "get";
        return requests_client[method](url, data, { headers }).catch(errorHandler);
    } catch (error) {
        return errorHandler(error) || error;
    }
};