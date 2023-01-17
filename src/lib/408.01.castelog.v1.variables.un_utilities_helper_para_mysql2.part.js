Castelog.variables.un_utilities_helper_para_mysql2 = class {
    constructor() {}
    escapeValue(text) {
        if (typeof text !== "string") throw new Error("Required text to be a string in order to «escapeValue«");
        return require("mysql2").escape(text);
    }
    escapeId(id) {
        if (typeof id !== "string") throw new Error("Required id to be a string in order to «escapeId«");
        return require("mysql2").escapeId(id);
    }
    escapeToOperator(operator) {
        const validOperators = {
            "<": " < ",
            "es menos que": " < ",
            ">": " > ",
            "es más que": " > ",
            "<=": " <= ",
            "es menos o igual que": " <= ",
            ">=": " >= ",
            "es más o igual que": " >= ",
            "=": " = ",
            "es igual que": " = ",
            "!=": " != ",
            "no es igual que": " != "
        };
        if(operator in validOperators) {
            return validOperators[operator];
        }
        throw new Error("Required «operator» to be a valid known operator in order to «escapeToOperator»");
    }
    escapeToWhereExpression(list) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToWhereExpression»");
        const mysql2 = require("mysql2");
        let out = "";
        out += "WHERE 1 = 1";
        for(let index = 0; index < list.length; index++) {
            const item = list[index];
            const [ subject, operator, predicate, predicateOptions = { as: "value" } ] = item;
            out += "\n  AND ";
            out += mysql2.escapeId(subject);
            out += this.escapeToOperator(operator);
            if(!("as" in predicateOptions)) {
                predicateOptions.as = "value";
            }
            if(predicateOptions.as === "value") {
                out += this.escapeValue(predicate);
            } else if (predicateOptions.as === "id") {
                out += this.escapeId(predicate);
            } else if (predicateOptions.as === "list") {
                out += this.escapeToValuesExpression(predicate);
            } else if (predicateOptions.as === "null") {
                out += "null";
            } else throw new Error("Required predicateOption to be a valid known predicate option for as property in order to «escapeToWhereExpression»");
        }
        return out;
    }
    escapeToFieldsExpression(list) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToFieldsExpression«");
        let out = "(";
        for (let index = 0; index < list.length; index++) {
            const item = list[index];
            out += (index !== 0) ? ", " : "";
            out += this.escapeId(item);
        }
        out += ")";
        return out;
    }
    escapeToValuesExpression(list) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToValuesExpression«");
        let out = "(";
        for(let index = 0; index < list.length; index++) {
            const item = list[index];
            out += (index !== 0) ? ", " : "";
            out += this.escapeValue(item);
        }
        out += ")";
        return out;
    }
    escapeToSetValuesExpression(values) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToSetValuesExpression«");
        const list = Object.keys(values);
        for (let index = 0; index < list.length; index++) {
            const key = list[index];
            const value = values[key];
            out += (index !== 0) ? ", " : "";
            out += this.escapeId(key);
            out += " = ";
            out += this.escapeValue(value);
        }
        return out;
    }
    escapeToIdsArray(list) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToIdsArray«");
        return list.map(item => require("mysql2").escapeId(item));
    }
    escapeToValuesArray(list) {
        if (!Array.isArray(list)) throw new Error("Required list to be an array in order to «escapeToValuesArray«");
        return list.map(item => require("mysql2").escape(item));
    }
};