Castelog.metodos.una_conexion_de_base_de_datos = async function (configuraciones, tipo = "simplestdb", en_errores = undefined, ontologia = "") {
    try {
        const metodo_final = "una_conexion_de_base_de_datos_tipo_" + tipo + (ontologia ? ("_" + ontologia) : "");
        if (!(metodo_final in Castelog.metodos)) {
            throw new Error("Tipo de conexión no identificado");
        }
        return await Castelog.metodos[metodo_final](configuraciones);
    } catch(error) {
        if(en_errores) {
            return en_errores(error);
        }
        throw error;
    }
};

Castelog.metodos.una_conexion_de_base_de_datos_tipo_rest = function(configuraciones) {
    return Castelog.variables.Automatic_http_rest_api_interface(configuraciones);
}

Castelog.metodos.una_conexion_de_base_de_datos_tipo_simplestdb = function(configuraciones) {
    return new SimplestDB(configuraciones.schema || {}, configuraciones.validateSchema || false);
};

Castelog.metodos.una_conexion_de_base_de_datos_tipo_ranasdb = function (configuraciones) {
    return RanasDB.connect(configuraciones.id, configuraciones.versionado);
};

Castelog.metodos.una_conexion_de_base_de_datos_tipo_mysql2 = function (configuraciones) {
    if(!configuraciones.database) {
        configuraciones.database = undefined;
    }
    if(!configuraciones.host) {
        configuraciones.host = "127.0.0.1";
    }
    if(!configuraciones.port) {
        configuraciones.port = 3306;
    }
    if(!configuraciones.user) {
        configuraciones.user = "root";
    }
    if(!configuraciones.password) {
        configuraciones.password = "";
    }
    return new Promise(async (ok, fail) => {
        try {
            const mysql = require("mysql2/promise");
            const connection = await mysql.createConnection(configuraciones);
            const connectionProxy = new Castelog.variables.un_proxy_de_conexion_para_mysql2(connection);
            return ok(connectionProxy);
        } catch(error) {
            return fail(error);
        }
    });
};

Castelog.metodos.una_conexion_de_base_de_datos_tipo_mysql2_pool = function (configuraciones) {
    if(!configuraciones.database) {
        configuraciones.database = undefined;
    }
    if(!configuraciones.host) {
        configuraciones.host = "127.0.0.1";
    }
    if(!configuraciones.port) {
        configuraciones.port = 3306;
    }
    if(!configuraciones.user) {
        configuraciones.user = "root";
    }
    if(!configuraciones.password) {
        configuraciones.password = "";
    }
    return new Promise(async (ok, fail) => {
        try {
            const mysql = require("mysql2/promise");
            const pool = await mysql.createPool(configuraciones);
            const poolProxy = new Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2(pool);
            return ok(poolProxy);
        } catch (error) {
            return fail(error);
        }
    });
};