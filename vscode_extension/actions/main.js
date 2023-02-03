const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
const dbgObject = x => vscode.window.showInformationMessage(JSON.stringify(Object.keys(x), null, 2), { modal: true });
const dbgAny = x => vscode.window.showInformationMessage(JSON.stringify(x), { modal: true });
let client;
let outputChannel = vscode.window.createOutputChannel("[Castelog]");
const dbg = function(...args) {
	for(let index = 0; index < args.length; index++) {
		let arg = args[index];
		outputChannel.appendLine(arg);
	}
}
const ejecutarFicheroNode = async function() {
	const console = { log: dbg , error: dbg };
	try {
		vscode.window.activeTextEditor.document.save();
		const file = vscode.window.activeTextEditor.document.uri.fsPath;
		vscode.window.showInformationMessage("Ejecutando «js»: " + path.basename(file), { modal: false });
		/////////////////////////////////////////////////////////////////////
		// Para que te salte el error concreto de sintaxis:
		require(file);
	} catch (error) {
		console.error(error.name, error.message, error.stack);
	}
};
const evaluarFicheroNode = async function () {
	const console = { log: dbg, error: dbg };
	try {
		vscode.window.activeTextEditor.document.save();
		const file = vscode.window.activeTextEditor.document.uri.fsPath;
		vscode.window.showInformationMessage("Ejecutando «js»: " + path.basename(file), { modal: false });
		/////////////////////////////////////////////////////////////////////
		// Sin embargo antes usábamos, por alguna razón:
		/////////////////////////////////////////////////////////////////////
		const codejs = require("fs").readFileSync(file).toString();
		eval(`(function() {const __dirname = path.dirname(file);${codejs}})();`);
		/////////////////////////////////////////////////////////////////////
	} catch (error) {
		console.error(error.name, error.message, error.stack);
	}
};
const ejecutarFicheroCalo = async function () {
	const console = { log: dbg, error: dbg };
	try {
		await compilarFicheroCalo();
		const file = vscode.window.activeTextEditor.document.uri.fsPath;
		const filejs = file.replace(/\.calo$/gi, ".js");
		vscode.window.showInformationMessage("Ejecutando «calo»: " + path.basename(filejs), { modal: false });
		/////////////////////////////////////////////////////////////////////
		// Para que te salte el error concreto de sintaxis:
		require(filejs);
		/////////////////////////////////////////////////////////////////////
		// Sin embargo antes usábamos, por alguna razón:
		/////////////////////////////////////////////////////////////////////
		// const codejs = require("fs").readFileSync(filejs).toString();
		// eval(`(function() {const __dirname = path.dirname(filejs);${codejs}})();`);
		/////////////////////////////////////////////////////////////////////
	} catch (error) {
		console.error(error.name, error.message, error.stack);
	}
};
const evaluarFicheroCalo = async function () {
	const console = { log: dbg, error: dbg };
	try {
		await compilarFicheroCalo();
		const file = vscode.window.activeTextEditor.document.uri.fsPath;
		const filejs = file.replace(/\.calo$/gi, ".js");
		vscode.window.showInformationMessage("Ejecutando «calo»: " + path.basename(filejs), { modal: false });
		/////////////////////////////////////////////////////////////////////
		// Sin embargo antes usábamos, por alguna razón:
		/////////////////////////////////////////////////////////////////////
		const codejs = require("fs").readFileSync(filejs).toString();
		eval(`(function() {const __dirname = path.dirname(filejs);${codejs}})();`);
		/////////////////////////////////////////////////////////////////////
	} catch (error) {
		console.error(error.name, error.message, error.stack);
	}
};
const compilarFicheroCalo = async function () {
	try {
		const file = vscode.window.activeTextEditor.document.uri.fsPath;
		const editor = vscode.window.activeTextEditor;
		let contents = undefined;
		if (editor) {
			const documentText = editor.document.getText();
			contents = documentText;
		}
		if (typeof contents === "undefined") {
			vscode.window.showErrorMessage("Para compilar Castelog a JavaScript debe estar abierto el fichero *.calo a compilar.", { modal: true });
			return;
		}
		if (typeof vscode.workspace.workspaceFolders !== "undefined") {
			const wasSaved = await editor.document.save();
			if(!wasSaved) {
				return vscode.window.showInformationMessage("No se pudo compilar el código fuente Castelog.");
			}
			message = `Compilando «calo» a «js»: ${path.basename(file)}`;
			vscode.window.showInformationMessage(message);
		} else {
			message = "No se encontró fichero abierto (tipo *.calo) para compilar.";
			vscode.window.showErrorMessage(message);
		}
		// vscode.window.showInformationMessage("Iniciando compilación de Castelog a JavaScript.", { modal: false });
		try {
			current_process: {
				const CastelogAPI = require(__dirname + "/castelog.api.js");
				//vscode.window.showInformationMessage("Compilando fichero Castelog: " + file, { modal: false });
				CastelogAPI.compileFiles([file], { empaquetar: path.dirname(file) }, dbg);
				//vscode.window.showInformationMessage("¡Compilación exitosa!", { modal: false });
			}
			return file;
		} catch (error) {
			const last_file = (typeof error.castelog_api_last_file !== "undefined") ? error.castelog_api_last_file : "undefined";
			const is_same_file = last_file === file;
			if (error.location) {
				const offset_start = error.location.start.offset;
				const line_start = error.location.start.line;
				const column_start = error.location.start.column;
				const offset_end = error.location.end.offset;
				const line_end = error.location.end.line;
				const column_end = error.location.end.column;
				const editor = vscode.window.activeTextEditor;
				const errorMessage = `Errores compilando:
	- Fichero principal: ${file}
	- Fichero fallido:   ${last_file}
	- Posición XY:       ${line_start}:${column_start}-${line_end}:${column_end}
	- Posición X:        ${offset_start}-${offset_end}
	- Encontrado:        ${error.found}
	- Esperado:          ${error.expected.map(x => JSON.stringify(x).toLowerCase()).reduce((o, x) => {
					if (o.indexOf(x) === -1) {
						o.push(x);
					}
					return o;
				}, []).join("\n  ...o: ")}`;
				errorMessage.substr(0, 200);
				vscode.window.showInformationMessage(errorMessage, { modal: false });
				if(is_same_file) {
					const newPositionStart = editor.selection.active.with(line_start - 1, column_start - 1);
					const newPositionEnd = editor.selection.active.with(line_end - 1, column_end - 1);
					const newSelection = new vscode.Selection(newPositionStart, newPositionEnd);
					editor.selection = newSelection;
				}
				dbg("Hubo errores [de sintaxis] en la compilación: ", errorMessage);
				vscode.commands.executeCommand("editor.action.triggerSuggest");
			} else {
				const errorMessage = "Errores compilando: " + `${error.name}:${error.message}\nDetalles: ${error.stack}`;
				vscode.window.showInformationMessage(errorMessage, { modal: true });
				dbg("Hubo errores [genéricos] en la compilación: ", errorMessage);
			}
		}
	} catch (error) {
		dbg("Hubo errores en el comando de compilación de Castelog:", error);
	}
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	//vscode.window.showInformationMessage('¡Castelog está activándose!');
	dbg('¡Muy bien! ¡La extensión oficial de "Castelog" ha sido activada exitosamente!');
	let disposable0 = vscode.commands.registerCommand('castelog.evaluarFicheroNode', evaluarFicheroNode);
	let disposable1 = vscode.commands.registerCommand('castelog.ejecutarFicheroNode', ejecutarFicheroNode);
	let disposable2 = vscode.commands.registerCommand('castelog.compilarFicheroCalo', compilarFicheroCalo);
	let disposable3 = vscode.commands.registerCommand('castelog.evaluarFicheroCalo', evaluarFicheroCalo);
	let disposable4 = vscode.commands.registerCommand('castelog.ejecutarFicheroCalo', ejecutarFicheroCalo);
	context.subscriptions.push(disposable0, disposable1, disposable2, disposable3, disposable4);
	try {
		// The server is implemented in node
		const serverModule = context.asAbsolutePath(path.join('actions', 'server.js'));
		// The debug options for the server
		// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
		const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
		// If the extension is launched in debug mode then the debug server options are used
		// Otherwise the run options are used
		const serverOptions = {
			run: { module: serverModule, transport: node_1.TransportKind.ipc },
			debug: {
				module: serverModule,
				transport: node_1.TransportKind.ipc,
				options: debugOptions
			}
		};
		// Options to control the language client
		const clientOptions = {
			// Register the server for plain text documents
			documentSelector: [{ scheme: 'file', language: 'castelog' }],
			synchronize: {
				// Notify the server about file changes to '.clientrc files contained in the workspace
				fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
			}
		};
		// Create the language client and start the client.
		client = new node_1.LanguageClient('CastelogLanguageServer', 'Servidor de Lenguaje de Castelog', serverOptions, clientOptions);
		// Start the client. This will also launch the server
		setTimeout(() => {
			vscode.window.showInformationMessage(
			    "Castelog dice: CTRL + ALT + [Y|U|I|O|P]\n" +
				"Y: Evaluar fichero JS\n" +
				"U: Ejecutar fichero JS\n" +
				"I: Compilar fichero CALO\n" +
				"O: Evaluar fichero CALO\n" +
				"P: Ejecutar fichero CALO\n" 
			);
		}, 1000);
		client.start();
	} catch (error) {
		dbg("Error al activar el servidor del lenguaje de la extensión de Castelog:", error);
		vscode.window.showErrorMessage("Hubo un error al activar el servidor del lenguaje de la extensión de Castelog: " + JSON.stringify(error, null, 2));
	}
}

function deactivate() {
	vscode.window.showInformationMessage('¡Castelog ha sido desactivado!');
	dbg('De acuerdo. La extensón oficial de "Castelog" ha sido desactivada.');
	if (!client) {
		return undefined;
	}
	return client.stop();
}

module.exports = {
	activate,
	deactivate
}
