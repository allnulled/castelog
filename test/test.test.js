const { expect } = require("chai");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

describe("Castelog: Sintaxis del lenguaje", function() {

    this.timeout(1000 * 10);
    before(async function() {});
    after(async function() {});
    let CastelogParser = undefined;

    it("Sentencia: El típico 'Hola mundo'", async function() {
        try {
            CastelogParser = require(__dirname + "/../src/castelog.js");
            const output = CastelogParser.parse("Hago console.log('Hola, mundo!').");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Condicional (basic)", async function() {
        try {
            const output = CastelogParser.parse("Si 0 {} pero si 1 {} y si no {}.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Bucle (mientras) (basic)", async function() {
        try {
            const output = CastelogParser.parse("Mientras 0 {}.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Retorno (basic)", async function() {
        try {
            const output = CastelogParser.parse("Retorno 0.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Hago (basic)", async function() {
        try {
            const output = CastelogParser.parse("Hago console.log('algo').");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Hago (asyincrono)", async function() {
        try {
            const output = CastelogParser.parse("Hago asíncronamente console.log('algo').");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Asigno (basic)", async function() {
        try {
            const output = CastelogParser.parse("Asigno x como 0.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Creo (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como 0.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Sentencia: Creo variable (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo variable x como 0.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

/*

  Generativa_numero /
  Generativa_texto /
  Generativa_objeto /
  Generativa_array /
  Generativa_funcion /
  Generativa_variable_llamable

//*/

    it("Generativas: numero (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como 0.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: texto (') (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como ''.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: texto (\") (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como \"\".");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: texto (`) (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como ``.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: objeto (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como {}.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: objeto (con propiedades)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como { a: 0, b: 1 }.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: lista (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como [0, 1].");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: función (basic)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como una función.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: función (parámetros sin bloque)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como una función con (a, b).");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: función (parámetros sin bloque)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como una función(a, b).");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: función (sin parámetros y con bloque)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como una función {}.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: función (con parámetros y con bloque)", async function() {
        try {
            const output = CastelogParser.parse("Creo x como una función con (a, b) donde {}.");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });

    it("Generativas: llamada", async function() {
        try {
            const output = CastelogParser.parse("Creo x como parseInt('90').");
            expect(typeof output).to.equal("string");
        } catch(error) {
            throw error;
        }
    });
    
    const scriptsDir = __dirname + "/scripts_de_sintaxis/";
    const files = fs.readdirSync(scriptsDir);
    IteratingClgFiles:
    for(let index = 0; index < files.length; index++) {
        const file = files[index];
        if(!file.endsWith(".calo")) {
            continue IteratingClgFiles;
        }
        it("Script execution por API: " + file, async function() {
            try {
                const contents = fs.readFileSync(scriptsDir + file).toString();
                const output = CastelogParser.parse(contents, {
                    
                });
                expect(typeof output).to.equal("string");
                const outputFile = scriptsDir + file.replace(/\.calo$/g, ".js");
                fs.writeFileSync(outputFile, output, "utf8");
                await require(outputFile);
                //fs.unlinkSync(outputFile);
            } catch(error) {
                console.error("[Error en test 'execution por API'] File: " + file, error);
                throw error;
            }
        });
    }
    
    const binScriptsDir = __dirname + "/scripts_de_binario/";
    const compilations = [
        [
            binScriptsDir + "P01/main.calo",
            binScriptsDir + "P01/F01.lib.calo",
            binScriptsDir + "P01/F02.lib.calo",
            binScriptsDir + "P01/F03.lib.calo",
        ],[
            binScriptsDir + "P02/main.calo",
            binScriptsDir + "P02/F01.lib.calo",
            binScriptsDir + "P02/F02.lib.calo",
            binScriptsDir + "P02/F03.lib.calo",
        ],[
            binScriptsDir + "P03/main.calo",
            binScriptsDir + "P03/F01.lib.calo",
            binScriptsDir + "P03/F02.lib.calo",
            binScriptsDir + "P03/F03.lib.calo",
        ],
    ];
    const { execSync } = require("child_process");
    IteratingClgFiles:
    for(let index = 0; index < compilations.length; index++) {
        const files = compilations[index];
        it("Script compilation por CLI:\n  - " + (files).join("\n  - "), async function() {
            try {
                execSync(`${__dirname}/../src/castelog.bin.js ${files.map(file => JSON.stringify(file)).join(" ")}`);
            } catch(error) {
                console.error("[Error en test 'compilation por CLI'] Compilando:\n" + files.join("\n"), error);
                throw error;
            }
        });
    }

    it("Script de API 'todo en uno':\n", async function() {
        try {
            const source1 = path.resolve(__dirname,"scripts_de_api/todo_en_uno.calo");
            const contents = fs.readFileSync(source1).toString();
            CastelogParser = require(__dirname + "/../src/castelog.js");
            const output = CastelogParser.parse(contents, {});
            expect(typeof output).to.equal("string");
            const outputFile = source1.replace(/\.calo$/g, ".js");
            fs.writeFileSync(outputFile, output, "utf8");
            await require(outputFile);
        } catch(error) {
            console.error("[Error en test 'todo en uno'] En test de API 'todo en uno':", error);
            throw error;
        }
    });

});