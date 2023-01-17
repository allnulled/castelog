Castelog.variables.un_proxy_de_conexion_para_mysql2 = class extends Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2 {
    constructor(connection, options = {}) {
        super();
        this.connection = connection;
        Object.assign(this, options);
    }
    getConnection() {
        return this.connection;
    }
    create(options) {
        return new Castelog.variables.un_proxy_de_conexion_para_mysql2(this.connection, options);
    }
};