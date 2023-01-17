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
	.usage("\nUsage:\n  $0 <command> <parameters> [options]")
	.version(packageVersion)
    .argv;

const output = Castelog_compiler.executeCalox(args);
