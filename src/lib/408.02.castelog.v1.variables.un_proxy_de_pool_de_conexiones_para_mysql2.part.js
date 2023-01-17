Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2 = class extends Castelog.variables.un_utilities_helper_para_mysql2 {
    constructor(pool, options = {}) {
        super();
        this.pool = pool;
        Object.assign(this, options);
    }
    getConnection() {
        return this.pool.getConnection();
    }
    create(options) {
        return new Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2(this.pool, options);
    }
    // Schema:
    async getSchema() {
        try {
            return this.schema;
        } catch (error) {
            throw error;
        }
    }
    buildSelectQuery(modelo, filtrando, ordenando, agrupando, paginando, db, objetivo) {
        let query = "";
        query += "SELECT * FROM ";
        query += this.escapeId(modelo);
        query += "\n";
        query += this.escapeToWhereExpression(filtrando);
        if(Array.isArray(ordenando) && ordenando.length) {
            query += "\n  ORDER BY ";
            for(let index = 0; index < ordenando.length; index++) {
                const orden = ordenando[index];
                const isDesc = orden.startsWith("!");
                const columna = isDesc ? orden.substr(1) : orden;
                if(index !== 0) {
                    query += ", ";
                }
                query += "" + this.escapeId(columna) + (isDesc ? " DESC" : " ASC");
            }
        }
        if(Array.isArray(paginando)) {
            const [ page = 1, items = 20 ] = paginando;
            const offset = page * (items - 1);
            query += "\n  LIMIT " + items;
            query += "\n  OFFSET " + offset;
        }
        return query;
    }
    // Select
    async select(modelo, filtrando, ordenando, agrupando, paginando, db = "system", adaptador = Castelog.variables.SimplestDB, objetivo = "a varios ítems") {
        try {
            if(objetivo === "a varios ítems") {
                return await this.select_many(modelo, filtrando, ordenando, agrupando, paginando, db, adaptador);
            } else if(objetivo === "a un ítem") {
                return await this.select_one(modelo, filtrando, ordenando, agrupando, paginando, db, adaptador);
            } else if(objetivo === "al primer ítem") {
                return await this.select_first(modelo, filtrando, ordenando, agrupando, paginando, db, adaptador);
            } else if(objetivo === "al último ítem") {
                return await this.select_last(modelo, filtrando, ordenando, agrupando, paginando, db, adaptador);
            }
        } catch (error) {
            throw error;
        }
    }
    async select_many(modelo, filtrando, ordenando, agrupando, paginando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = this.buildSelectQuery(modelo, filtrando, ordenando, agrupando, paginando, db);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    async select_one(modelo, filtrando, ordenando, agrupando, paginando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = this.buildSelectQuery(modelo, filtrando, ordenando, agrupando, paginando, db);
            const result = await connection.query(query);
            const [ output, fields ] = result;
            if(output.length > 1) throw new Error("Required output to be 1 and no more than 1 row in order to «Castelog.variables.un_proxy_de_pool_de_conexiones_para_mysql2.select_one»");
            if(output.length === 0) return undefined;
            const [row] = output;
            return row;
        } catch (error) {
            throw error;
        }
    }
    async select_first(modelo, filtrando, ordenando, agrupando, paginando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = this.buildSelectQuery(modelo, filtrando, ordenando, agrupando, paginando, db);
            const result = await connection.query(query);
            const [output, fields] = result;
            if (output.length === 0) return undefined;
            const [row] = output;
            return row;
        } catch (error) {
            throw error;
        }
    }
    async select_last(modelo, filtrando, ordenando, agrupando, paginando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = this.buildSelectQuery(modelo, filtrando, ordenando, agrupando, paginando, db);
            const result = await connection.query(query);
            const [output, fields] = result;
            if (output.length === 0) return undefined;
            const row = output.pop();
            return row;
        } catch (error) {
            throw error;
        }
    }
    // Insert
    buildInsertManyQuery(modelo, items) {
        if(items.length < 1) throw new Error("Required parameter «items» to be an array of 1 or more items in order to «buildInsertManyQuery»");
        const [item] = items;
        const columnas = Object.keys(item);
        let query = "";
        query += "INSERT INTO ";
        query += this.escapeId(modelo);
        query += "\n";
        query += this.escapeToFieldsExpression(columnas);
        query += " VALUES \n";
        for(let index = 0; index < items.length; index++) {
            const iteratedItem = items[index];
            const values = Object.values(iteratedItem);
            if(index !== 0) {
                query += ",\n";
            }
            query += this.escapeToValuesExpression(values);
        }
        return query;
    }
    buildInsertOneQuery(modelo, item) {
        const columnas = Object.keys(item);
        const valores = Object.values(item);
        let query = "";
        query += "INSERT INTO ";
        query += this.escapeId(modelo);
        query += "\n";
        query += this.escapeToFieldsExpression(columnas);
        query += " VALUES \n";
        query += this.escapeToValuesExpression(valores);
        return query;
    }
    insert(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        return Array.isArray(valor) ? this.insert_many(modelo, valor, db, adaptador) : this.insert_one(modelo, valor, db, adaptador);
    }
    async insert_one(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildInsertOneQuery(modelo, valor);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    async insert_many(modelo, valores, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildInsertManyQuery(modelo, valores);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    // Update
    async update(modelo, filtrando, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        return Array.isArray(filtrando) ? this.update_many(modelo, filtrando, valor, db, adaptador) : this.update_one(modelo, filtrando, valor, db, adaptador);
    }
    buildUpdateManyQuery(modelo, filtrando, valor) {
        if (valor.length < 1) throw new Error("Required parameter «valor» to be an object in order to «buildUpdateManyQuery»");
        let query = "";
        query += "UPDATE ";
        query += this.escapeId(modelo);
        query += "\n" + this.escapeToWhereExpression(filtrando);
        query += "\nSET\n";
        query += this.escapeToSetValuesExpression(valor);
        return query;
    }
    buildUpdateOneQuery(modelo, filtrando, valor) {
        if (valor.length < 1) throw new Error("Required parameter «valor» to be an object in order to «buildUpdateOneQuery»");
        let query = "";
        query += "UPDATE ";
        query += this.escapeId(modelo);
        query += "\n" + this.escapeToWhereExpression(filtrando);
        query += "\nSET\n";
        query += this.escapeToSetValuesExpression(valor);
        return query;
    }
    async update_one(modelo, filtrando, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildUpdateOneQuery(modelo, filtrando, valor);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    async update_many(modelo, filtrando, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildUpdateManyQuery(modelo, filtrando, valor);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    // Delete
    async delete(modelo, filtrando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        return Array.isArray(filtrando) ? this.delete_many(modelo, filtrando, db, adaptador) : this.delete_one(modelo, filtrando, db, adaptador);
    }
    buildDeleteManyQuery(modelo, filtrando) {
        let query = "";
        query += "DELETE FROM ";
        query += this.escapeId(modelo);
        query += "\n" + this.escapeToWhereExpression(filtrando);
        return query;
    }
    buildDeleteOneQuery(modelo, filtrando) {
        if (filtrando.length < 1) throw new Error("Required parameter «filtrando» to be an array of 1 or more items in order to «buildDeleteOneQuery»");
        let query = "";
        query += "DELETE FROM ";
        query += this.escapeId(modelo);
        query += "\n" + this.escapeToWhereExpression(filtrando);
        return query;
    }
    async delete_one(modelo, filtrando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildDeleteOneQuery(modelo, filtrando);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    async delete_many(modelo, filtrando, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            const query = await this.buildDeleteManyQuery(modelo, filtrando);
            const result = await connection.query(query);
            const [output, fields] = result;
            return output;
        } catch (error) {
            throw error;
        }
    }
    // Metacrud:
    async add_table(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async add_column(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async add_database(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async execute_script(modelo, valor, db = "system", adaptador = Castelog.variables.SimplestDB) {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async alter_table() {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async alter_column() {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async drop_table() {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async drop_column() {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
    async drop_database() {
        try {
            const connection = await this.getConnection();
            // @TODO...
            return { message: "This work is still to be done!" };
        } catch (error) {
            throw error;
        }
    }
};