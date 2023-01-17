/*lib:simplest-db@1.0.3 + modifications*/
(function (root, factory) {
    const scope = (typeof window !== 'undefined') ? window : global;
    if("SimplestDB" in scope) return scope.SimplestDB;
    const output = factory();
    if(typeof module === 'object' && typeof module.exports === 'object')
        module.exports = output;
    if(typeof define === 'function' && define.amd)
        define([], factory);
    if(typeof exports === 'object')
        exports["SimplestDB"] = output;
    scope["SimplestDB"] = output;
})(this, function() {

    class SimplestDB {

        static create(...args) {
            return new this(...args);
        }

        static getFS() {
            if(this.$fs) {
                return this.$fs;
            }
            this.$fs = new SimplestDB({
                schema: "system",
                tables: {
                    "fs": {
                        columns: {
                            "path": { is_type: "string" },
                            "contents": { is_type: "string" },
                            "metadata": { is_type: "object" },
                        }
                    }
                }
            });
            return this.$fs;
        }

        static getCache() {
            if(this.$cache) {
                return this.$cache;
            }
            this.$cache = new SimplestDB({
                schema: "system",
                tables: {
                    "cache": {
                        columns: {
                            "key": { is_type: "string" },
                            "value": { is_type: "string" },
                        }
                    }
                }
            });
            return this.$cache;
        }

        constructor(schema = {}, noValidate = false) {
            if(typeof schema !== "object") throw new Error("Required «schema» to be an object, found «" + typeof(schema) + "» [0301]");
            if(typeof schema.schema !== "string") schema.schema = "system";
            if(!("attributes" in schema)) {Object.assign(schema, {attributes:{}})}
            if(!("tables" in schema)) {Object.assign(schema, {tables:{}})}
            this.schema = this.validateSchema(schema);
            this.noValidate = noValidate;
            this.baseDir = (typeof schema.baseDir === "string" ? schema.baseDir.replace(/^\/+/g, "").replace(/\/+$/g, "") : "./sdb_modules") + "/";
            if(typeof global === "object") {
                const fs = require("fs");
                const hasBaseDir = fs.existsSync(this.baseDir) && fs.lstatSync(this.baseDir).isDirectory();
                if(!hasBaseDir) {
                    fs.mkdirSync(this.baseDir);
                }
            }
        }

        validateTable(tableId) {
            if(typeof tableId !== "string") throw new Error("Required parameter table «" + tableId + "» to be a string, found «" + typeof(tableId) + "» [0101]");
            if(this.noValidate) return this.schema.tables[tableId];
            if(!(tableId in this.schema.tables)) throw new Error("Required parameter table «" + tableId + "» to exist as table in schema, only accepted: «" + Object.keys(this.schema.tables).join("», «") + "» [0402]");
            return this.schema.tables[tableId];
        }
        
        validateRow(tableId, value) {
            if(typeof tableId !== "string") throw new Error("Required parameter table «" + tableId + "» to be a string, found «" + typeof(tableId) + "» [0801]");
            if(this.noValidate) return this.schema.tables[tableId];
            if(!(tableId in this.schema.tables)) throw new Error("Required parameter table «" + tableId + "» to exist as table in schema, only accepted: «" + Object.keys(this.schema.tables).join("», «") + "» [0802]");
            return true;
        }

        validateSchema(schema) {
            if(typeof schema !== "object") throw new Error("Required «schema» to be an object, found «" + typeof(schema) + "» [0301]");
            if(typeof schema.schema !== "string") throw new Error("Required «schema.schema» to be a string, found «" + typeof(schema) + "» [0302]");
            if(typeof schema.attributes === "undefined") schema.attributes = {};
            if(typeof schema.attributes !== "object") throw new Error("Required «schema.attributes» to be an object, found «" + typeof(attributes) + "» [0303]");
            if(typeof schema.tables === "undefined") schema.tables = {};
            if(typeof schema.tables !== "object") throw new Error("Required «schema.tables» to be an object, found «" + typeof(tables) + "» [0304]");
            const tableIds = Object.keys(schema.tables);
            for(let indexTable = 0; indexTable < tableIds.length; indexTable++) {
                const tableId = tableIds[indexTable];
                if(typeof schema.tables[tableId] !== "object") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "]» to be an object, found «" + typeof(schema.tables[tableId]) + "» [0305]");
                if(typeof schema.tables[tableId].attributes === "undefined") schema.tables[tableId].attributes = {};
                if(typeof schema.tables[tableId].attributes !== "object") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "].attributes» to be an object, found «" + typeof(attributes) + "» [0306]");
                if(typeof schema.tables[tableId].columns === "undefined") schema.tables[tableId].columns = {};
                if(typeof schema.tables[tableId].columns !== "object") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "].columns» to be an object, found «" + typeof(columns) + "» [0307]");
                const tableData = schema.tables[tableId];
                const columnIds = Object.keys(tableData.columns);
                for(let indexColumn = 0; indexColumn < columnIds.length; indexColumn++) {
                    const columnId = columnIds[indexColumn];
                    const columnData = tableData.columns[columnId];
                    if(typeof columnData !== "object") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "].columns[" + JSON.stringify(columnId) + "]»")
                    if(typeof columnData.attributes === "undefined") columnData.attributes = {};
                    if(typeof columnData.attributes !== "object") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "].columns[" + JSON.stringify(columnId) + "].attributes»")
                    if(typeof columnData.is_type !== "string") throw new Error("Required «schema.tables[" + JSON.stringify(tableId) + "].columns[" + JSON.stringify(columnId) + "].is_type»")
                }
            }
            return schema;
        }

        setSchema(schema) {
            this.schema = this.validateSchema(schema);
        }

        consumeIdOf(tableId) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be an object, found «" + typeof(tableId) + "» [0901]");
            this.validateTable(tableId);
            if(typeof window === "object") {
                const storageId = "SDB_STORAGE_FOR_" + this.schema.schema;
                if(!(storageId in localStorage)) {
                    localStorage[storageId] = JSON.stringify({$KEYS:{[tableId]:1},[tableId]:{}});
                    return 1;
                }
                const storageJson = localStorage[storageId];
                const storageData = JSON.parse(storageJson);
                const tableLastId = storageData.$KEYS[tableId]++;
                localStorage[storageId] = JSON.stringify(storageData);
                return tableLastId;
            } else if(typeof global === "object") {
                const storageId = this.baseDir + this.schema.schema + ".data.json";
                const fs = require("fs");
                if(!fs.existsSync(storageId)) {
                    fs.writeFileSync(storageId, JSON.stringify({$KEYS:{[tableId]:1},[tableId]:{}}));
                    return 1;
                }
                const storageJson = fs.readFileSync(storageId).toString();
                const storageData = JSON.parse(storageJson);
                const tableLastId = storageData.$KEYS[tableId]++;
                fs.writeFileSync(storageId, JSON.stringify(storageData), "utf8");
                return tableLastId;
            }
        }

        getData(tableId) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be an object, found «" + typeof(tableId) + "» [0401]");
            this.validateTable(tableId);
            if(typeof window === "object") {
                const storageId = "SDB_STORAGE_FOR_" + this.schema.schema;
                if(!(storageId in localStorage)) {
                    localStorage[storageId] = JSON.stringify({$KEYS:{}});
                }
                const storageJson = localStorage[storageId];
                const storageData = JSON.parse(storageJson);
                if(!(tableId in storageData)) {
                    return {};
                    throw new Error("Required model «" + tableId + "» to exist in database and not only in schema «" + this.schema.schema + "» [0402]");
                }
                return storageData[tableId];
            } else if(typeof global === "object") {
                const storageId = this.baseDir + this.schema.schema + ".data.json";
                const fs = require("fs");
                if(!fs.existsSync(storageId)) {
                    fs.writeFileSync(storageId, JSON.stringify({$KEYS:{}}), "utf8");
                }
                const storageJson = fs.readFileSync(storageId).toString();
                const storageData = JSON.parse(storageJson);
                if(!(tableId in storageData)) {
                    return {};
                    throw new Error("Required model «" + tableId + "» to exist in database and not only in schema «" + this.schema.schema + "» [0403]");
                }
                return Object.assign({}, storageData[tableId]);
            }
        }
        
        setData(tableId, modelId, data) {
            if(typeof window === "object") {
                if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [0501]");
                if(typeof modelId !== "number") throw new Error("Required «modelId» to be an number, found «" + typeof(modelId) + "» [0502]");
                if(typeof data === "undefined") {}
                else if(typeof data !== "object") throw new Error("Required «data» to be an object, found «" + typeof(data) + "» [0503]");
                this.validateTable(tableId);
                const storageId = "SDB_STORAGE_FOR_" + this.schema.schema;
                if(!(storageId in localStorage)) {
                    localStorage[storageId] = JSON.stringify({$KEYS:{}});
                }
                const storageJson = localStorage[storageId];
                const storageData = JSON.parse(storageJson);
                if(!(tableId in storageData)) {
                    storageData[tableId] = {};
                    storageData.$KEYS[tableId] = 1;
                }
                let operation = "update";
                let selectedId = (modelId === 0) ? storageData.$KEYS[tableId]++ : modelId; 
                if(!(selectedId in storageData[tableId])) {
                    if(modelId !== 0) {
                        throw new Error("Required parameter modelId «" + modelId + "» to be 0 or to exist as id in table «" + storageId + ":" + tableId + "» [0504]")
                    } else operation = "insert";
                }
                if(typeof data === "undefined") {
                    delete storageData[tableId][selectedId];
                } else {
                    if(operation === "insert") {
                        data.id = selectedId;
                    }
                    storageData[tableId][selectedId] = Object.assign({}, storageData[tableId][selectedId] || {}, data);
                }
                const json = JSON.stringify(storageData);
                localStorage[storageId] = json;
                return selectedId;
            } else if(typeof global === "object") {
                if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [1101]");
                if(typeof modelId !== "number") throw new Error("Required «modelId» to be an number, found «" + typeof(modelId) + "» [1102]");
                if(typeof data === "undefined") {}
                else if(typeof data !== "object") throw new Error("Required «data» to be an object, found «" + typeof(data) + "» [1103]");
                this.validateTable(tableId);
                const fs = require("fs");
                const storageId = this.baseDir + this.schema.schema + ".data.json";
                if(!fs.existsSync(storageId)) {
                    fs.writeFileSync(storageId, JSON.stringify({[tableId]:{},$KEYS:{[tableId]:1}}), "utf8");
                }
                const storageJson0 = fs.readFileSync(storageId).toString();
                const storageData = JSON.parse(storageJson0);
                if(!(tableId in storageData)) {
                    storageData[tableId] = {};
                    storageData.$KEYS[tableId] = 1;
                }
                let operation = "update";
                let selectedId = modelId === 0 ? storageData.$KEYS[tableId]++ : modelId; 
                if(!(selectedId in storageData[tableId])) {
                    if(modelId !== 0) {
                        throw new Error("Required id «" + modelId + "» to be 0 (insert) or to exist as id in table «" + storageId + ":" + tableId + "#" + modelId + "» [1104]")
                    } else operation = "insert";
                }
                if(typeof data === "undefined") {
                    delete storageData[tableId][selectedId];
                } else {
                    if(operation === "insert") {
                        data.id = selectedId;
                    }
                    storageData[tableId][selectedId] = Object.assign({}, storageData[tableId][selectedId] || {}, data);
                }
                const json = JSON.stringify(storageData);
                fs.writeFileSync(storageId, json, "utf8");
                return selectedId;
            }
        }

        select(tableId, filter) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [0601]");
            this.validateTable(tableId);
            const data = this.getData(tableId);
            if(typeof filter === "function") {
                return Object.values(data).filter(filter).reduce((output, item) => {
                    try {
                        output[item.id] = item;
                        return output;
                    } catch (error) {
                        return false;
                    }
                }, {});
            } else if(typeof filter === "undefined") {
                return data;
            } else {
                throw new Error("Required «filter» to be a valid, found «" + typeof(filter) + "» type [0602]");
            }
        }

        insert(tableId, value) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [0701]");
            if(typeof value !== "object") throw new Error("Required «value» to be an object, found «" + typeof(value) + "» [0702]");
            this.validateRow(tableId, value);
            return this.setData(tableId, 0, value);
        }

        update(tableId, instanceId, value) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [1201]");
            if(typeof instanceId !== "number") throw new Error("Required «instanceId» to be an number, found «" + typeof(instanceId) + "» [1202]");
            if(typeof value !== "object") throw new Error("Required «value» to be an object, found «" + typeof(value) + "» [1203]");
            this.validateRow(tableId, value);
            return this.setData(tableId, instanceId, value);
        }

        delete(tableId, instanceId) {
            if(typeof tableId !== "string") throw new Error("Required «tableId» to be a string, found «" + typeof(tableId) + "» [1401]");
            if(typeof instanceId !== "number") throw new Error("Required «instanceId» to be an number, found «" + typeof(instanceId) + "» [1402]");
            this.validateTable(tableId);
            return this.setData(tableId, instanceId, undefined);
        }
    }
  
    SimplestDB.default = SimplestDB;

    return SimplestDB;

}, this);