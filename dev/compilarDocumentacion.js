const fs = require("fs");
const path = require("path");
const child_process = require("child_process");


const digestSintaxisExamplesDir = function(dir, dirDest) {
    const files = fs.readdirSync(dir);
    for(let index = 0; index < files.length; index++) {
        const file = files[index];
        if(file.endsWith(".calo")) {
            const fileSrc = path.resolve(dir, file);
            const contents = fs.readFileSync(fileSrc).toString();
            const fileDest = path.resolve(dirDest, file.replace(/\.calo$/g, ".md"));
            const fileContents = fs.readFileSync(fileDest).toString().replace(/```calo(.|[\n])+/g, "") + "```calo\n" + contents.trim() + "\n```";
            fs.writeFileSync(fileDest, fileContents, "utf8");
        }
    }
};

const digestSchemasDir = function(dir) {
    let docs = "";
    const nodes = fs.readdirSync(dir);
    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        const nodepath = path.resolve(dir, node);
        const isMermaid = nodepath.endsWith(".mmd");
        const isNoop = node.match(/^[0]+\./g);
        if((!isNoop) && isMermaid) {
            const rutaMermaid = `${__dirname}/../node_modules/.bin/mmdc`;
            const comando = `${JSON.stringify(rutaMermaid)} -i ${JSON.stringify(nodepath)} -o ${JSON.stringify(nodepath.replace(/\.mmd$/gi, ".png"))}`;
            console.log("Ejecutando comando: " + comando);
            child_process.execSync(comando, {});
        }
    }
    return docs;
};

const digestDocsDir = function(dir) {
    let docs = "";
    const nodes = fs.readdirSync(dir);
    for(let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        const nodepath = path.resolve(dir, node);
        const nodestat = fs.lstatSync(nodepath);
        const isMarkdown = nodepath.endsWith(".md");
        const isNoop = node.match(/^[0]+\./g);
        if(!isNoop) {
            console.log("Node: " + nodepath);
            if(index !== 0) {
                docs += "\n\n----";
            }
            if(isMarkdown && nodestat.isFile()) {
                docs += "\n\n" + fs.readFileSync(nodepath).toString();
            } else if(nodestat.isDirectory()) {
                docs += "\n\n" + digestDocsDir(nodepath);
            }
        }
    }
    return docs;
};

try {
    digestSintaxisExamplesDir(
        __dirname + "/../test/scripts_de_documentacion/Sentencias",
        __dirname + "/../docs/reference/07.Sintaxis/02.Sentencias"
    );
    digestSintaxisExamplesDir(
        __dirname + "/../test/scripts_de_documentacion/Generativas",
        __dirname + "/../docs/reference/07.Sintaxis/03.Generativas"
    );
    digestSintaxisExamplesDir(
        __dirname + "/../test/scripts_de_documentacion/Prependices",
        __dirname + "/../docs/reference/07.Sintaxis/04.Prependices"
    );
    digestSintaxisExamplesDir(
        __dirname + "/../test/scripts_de_documentacion/Apendices",
        __dirname + "/../docs/reference/07.Sintaxis/05.Apendices"
    );
    digestSchemasDir(__dirname + "/../docs/00.Recursos/mermaid/");
    const allDocs = digestDocsDir(__dirname + "/../docs/reference");
    fs.writeFileSync(__dirname + "/../docs/REFERENCE.md", allDocs, "utf8");
} catch(error) {
    console.log(error);
}