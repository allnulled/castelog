#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const packageVersion = require(__dirname + "/../package.json").version;
const Castelog = require(__dirname + "/castelog.api.js");
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
    Castelog.help_for_cli();
    process.exit(0);
}

const output = Castelog.compileFiles(args._, { ...args.empaquetar ? { empaquetar: args.salida } : {} });

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