#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const packageVersion = require(__dirname + "/../package.json").version;
const Castelog = require(__dirname + "/castelog.api.js");
const args = require("yargs")
	.usage("\nUsage:\n  $0 <command> <parameters> [options]")
	.version(packageVersion)
    .argv;

const output = Castelog.executeCalox(args);
