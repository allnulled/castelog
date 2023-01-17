Castelog.metodos.un_fichero_xml = async fichero => {
    try {
        const fs = require("fs");
        const xml2js = require("xml2js");
        const parser = new xml2js.Parser();
        const data = await fs.promises.readFile(fichero, "utf8");
        const result = await new Promise((ok, fail) => {
            parser.parseString(data, function (error, result) {
                if (error) {
                    return fail(error);
                }
                return ok(result);
            });
        });
        return result;
    } catch (error) {
        console.log("Error al intentar «Castelog.metodos.un_fichero_xml»:", error);
        console.log("Nota específica de error (1): recuerda que para usar «Castelog.metodos.un_fichero_xml» necesitas la dependencia «xml2js» en tu «node_modules»");
        throw error;
    }
};