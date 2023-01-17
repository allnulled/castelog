try {

    const fs = require("fs");
    const path = require("path");
    const pegjs = require("pegjs");

    const projectDir = __dirname + "/..";
    const sourceDir = __dirname + "/../src";
    const sintaxisDir = __dirname + "/../src/sintaxis";

    const padLeft = function (inp_parameter, str, len) {
        const inp = inp_parameter + "";
        let out = inp;
        for (let index = 0; out.length < len; index++) {
            out += str;
        }
        return out;
    };

    const formatDate = function (date) {
        return `${padLeft(date.getFullYear(), '0', 4)
            }/${padLeft(date.getMonth() + 1, '0', 2)
            }/${padLeft(date.getDate(), '0', 2)
            } ${padLeft(date.getHours(), '0', 2)
            }:${padLeft(date.getMinutes(), '0', 2)
            }.${padLeft(date.getSeconds(), '0', 2)
            }.${padLeft(date.getMilliseconds(), '0', 3)
            }`;
    };

    /* 1. compile lib of castelog api */
    const libFiles = fs.readdirSync(sourceDir + "/lib");
    let libOutput = "";
    for (let index = 0; index < libFiles.length; index++) {
        const file = libFiles[index];
        let contenido = fs.readFileSync(sourceDir + "/lib/" + file).toString();
        if (file.endsWith("castelog.v1.inicializacion.part.js")) {
            contenido = contenido.replace(`compilacion: {} // Metadatos de la ultima compilacion de Castelog, aqui.`, `compilacion: ${JSON.stringify({
                ruta_del_sistema: process.cwd(),
                sistema_operativo: "",
                fecha: formatDate(new Date())
            }, null, 2)}`)
        }
        libOutput += "\n\n//Included:lib/" + file + "\n" + contenido;
    }
    fs.writeFileSync(sourceDir + "/castelog.libs.js", libOutput, "utf8");
    fs.writeFileSync(sourceDir + "/castelog.libs.str.js", JSON.stringify(libOutput), "utf8");
    fs.writeFileSync(sourceDir + "/castelog.libs.byt.json", JSON.stringify(libOutput.split("").map(c => c.charCodeAt(0))), "utf8");

    /* 2. compile castelog pegjs syntax */
    const files = fs.readdirSync(sintaxisDir);
    let finalContents = "";
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const contents = fs.readFileSync(sintaxisDir + "/" + file).toString();
        finalContents += "\n" + contents;
    }
    const encodedSnippet = JSON.stringify(require(__dirname + "/../src/castelog.libs.byt.json"));
    const jquerySnippet = JSON.stringify(fs.readFileSync(__dirname + "/../src/others/jquery.js").toString().split("").map(c => c.charCodeAt(0)));
    finalContents = finalContents
        .replace(/\/\*::castelog_jquery_source_code::\*\/[^\n]+/g, "/*::castelog_jquery_source_code::*/ " + jquerySnippet + '.map(i => String.fromCharCode(i)).join("");')
        .replace(/\/\*::castelog_api_source_code::\*\/[^\n]+/g, "/*::castelog_api_source_code::*/ " + encodedSnippet + '.map(i => String.fromCharCode(i)).join("");');
    fs.writeFileSync(sourceDir + "/castelog.pegjs", finalContents, "utf8");

    /* 3. generate castelog parser source code */
    const formattedDate = formatDate(new Date());
    let generated_parser = undefined;
    try {
        generated_parser = pegjs.generate(finalContents, {
            format: "umd",
            exportVar: "Castelog_parser",
            output: "source",
            // trace: true,
        });
    } catch (error) {
        console.log("Error compilando parser de fichero: " + sourceDir + "/castelog.pegjs");
        console.log(error);
        throw error;
    }
    let sourcecodeFinalParser = `/*::Esta compilación de Castelog fue creada en ${formattedDate}::*/\n` + generated_parser;
    fs.writeFileSync(sourceDir + "/castelog.js", sourcecodeFinalParser, "utf8");
    fs.writeFileSync("/home/carlos/Escritorio/Nuevo/Castelog/castelog-site/scripts/api-castelog.js", sourcecodeFinalParser, "utf8");
    
    /* 4. generate castelog-Xtensions parser source code */
    const castelogXtensionsInput = path.resolve(__dirname + "/../src/castelog-xtensions.pegjs");
    const castelogXtensionsOutput = path.resolve(__dirname + "/../src/castelog-xtensions.js");
    const castelogXtensionsParserSourceCode = fs.readFileSync(castelogXtensionsInput).toString();
    try {
        const castelogXtensionsApiSource = pegjs.generate(castelogXtensionsParserSourceCode, {
            format: "umd",
            exportVar: "Castelog_xtensions_parser",
            output: "source",
            trace: true,
        });
        fs.writeFileSync(castelogXtensionsOutput, castelogXtensionsApiSource, "utf8");
    } catch (error) {
        console.error("Error compilando parser de castelog-xtensions: " + castelogXtensionsInput);
        console.error(error);
    }
    
    /* 5. all ok */
    console.log("[CASTELOG] Compilación exitosa.");

} catch (error) {
    console.log(error);
}