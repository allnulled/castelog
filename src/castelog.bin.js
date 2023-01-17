#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const packageVersion = (() => {
	try {
		// Caso de en: /castelog-core/src
		return require(__dirname + "/../package.json").version;
	} catch(error) {
		try {
			// Caso de en: /calo_modules/.source
			return require(__dirname + "/../../package.json").version;
		} catch(error) {
			try {
				// Caso de en: /calox
				return require(__dirname + "/package.json").version;
			} catch (error) {
				throw new Error("Could not find «package.json»");
			}
		}
	}
})();
const Castelog_compiler = (() => {
    try {
        // Caso de en: /castelog-core/src y /calo_modules/.source
        return require(__dirname + "/castelog.api.js");
    } catch (error) {
        try {
            // Caso de en: /calox
            return require(__dirname + "/calo_modules/.source/castelog.api.js");;
        } catch (error) {
            throw new Error("Could not find «castelog.api.js»");
        }
    }
})();
const args = require("yargs")
	.version(packageVersion)
    .option("ejecutar", {
		type: "boolean",
		alias: "e",
		default: false,
		describe: "Ejecuta el primer fichero tras la compilación.",
	})
    .argv;

if(args._.length === 0) {
    Castelog_compiler.help_for_cli();
    process.exit(0);
}

const output = Castelog_compiler.compileFiles(args._, { ...args.empaquetar ? { empaquetar: args.salida } : {} });

let overrideExecutable = (output.$ && output.$.executable) ? output.$.executable : false;

if(args.ejecutar) {
    const firstClgFile = args._[0];
    const firstJsFile = overrideExecutable ? overrideExecutable : path.resolve(firstClgFile.replace(/\.(calo)$/gi, "") + ".js");
    const command2 = "node " + JSON.stringify(firstJsFile);
    console.log(command2);
    child_process.execSync(command2, {
        cwd: process.cwd(),
        stdio: [ process.stdio, process.stdout, process.stderr ],
    });
}