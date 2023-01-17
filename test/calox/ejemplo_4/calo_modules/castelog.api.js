const CastelogParser = require(__dirname + "/castelog.js");

class Castelog {

    static get HOOK_ID() {
        return {
            "Sentencia": "/\n  '######~{ Hooks del Parser de Castelog: SENTENCIA }~######'",
            "Generativa": "/\n  '######~{ Hooks del Parser de Castelog: GENERATIVA }~######'",
            "Prepéndice": "/\n  '######~{ Hooks del Parser de Castelog: PREPÉNDICE }~######'",
            "Apéndice": "/\n  '######~{ Hooks del Parser de Castelog: APÉNDICE }~######'"
        };
    }

    static getCaloxParser() {
        return require(__dirname + "/castelog-xtensions.js");
    }

    static getDefaultCastelogParserSourceCode() {
        return require("fs").readFileSync(__dirname + "/castelog.pegjs").toString();
    }

    static getDefaultParserExtensionsDirectory() {
        const fs = require("fs");
        const path = require("path");
        const basePath = path.resolve(process.cwd());
        let pivotPath = basePath;
        let previousPath = undefined;
        while(pivotPath !== previousPath) {
            const caloModulesDirectory = fs.readdirSync(pivotPath).filter(f => f === "calo_modules");
            if(caloModulesDirectory.length) {
                const caloModulesPath = path.resolve(pivotPath, "calo_modules");
                const caloModulesList = fs.readdirSync(caloModulesPath);
                return caloModulesPath;
            }
        }
        throw new Error("Required directory 'calo_modules' to exist in any subpath of «" + basePath + "» in order to «Castelog.getDefaultParserExtensionsDirectory»")
    }

    static generateCastelogClass() {
        return this.generateCastelogClassByDirectory();
    }

    static generateCastelogClassByDirectory(directory = undefined, options = {}, options2 = {}) {
        const parserExtensions = this.generateCastelogExtensionsByDirectory(directory, options);
        const parserClass = this.generateCastelogClassByExtensions(parserExtensions, options2, undefined);
        return parserClass;
    }

    static generateCastelogExtensionsByDirectory(directory = undefined, options = {}) {
        const path = require("path");
        if(typeof directory === "undefined") {
            directory = this.getDefaultParserExtensionsDirectory();
        }
        const extensionDirectories = require("fs").readdirSync(directory);
        let extensionsData = [];
        const calox = this.getCaloxParser();
        for(let index = 0; index < extensionDirectories.length; index++) {
            const extensionDirectory = extensionDirectories[index];
            const extensionPath = path.join(directory, extensionDirectory);
            const extensionCaloxFile = path.join(extensionPath, "extension.calox");
            const extensionContents = fs.readFileSync(extensionCaloxFile).toString();
            try {
                const extensionsAst = calox.parse(extensionContents, options);
                extensionsData = extensionsData.concat(extensionsAst);
            } catch(error) {
                console.error("Error compilando extensión: " + extensionDirectory);
                console.error(error);
                throw error;
            }
        }
        return extensionsData;
    }

    static generateCastelogClassByExtensions(extensions = {}, options = {}, source = undefined) {
        let extendedSource = source;
        if(typeof source === "undefined") {
            source = this.getDefaultCastelogParserSourceCode();
        }
        for(const extensionId in extensions) {
            const extensionObject = extensions[extensionId];
            const {
                hook_id,
                syntax_name,
                syntax_content,
                syntax_prescript
            } = extensionObject;
            if (typeof hook_id !== "string") throw new Error("Required parameter «hook_id» on index «extensions[" + extensionId + "]» to be a string in order «Castelog.generateCastelogClassByExtensions»");
            if (typeof syntax_name !== "string") throw new Error("Required parameter «syntax_name» on index «extensions[" + extensionId + "]» to be a string in order «Castelog.generateCastelogClassByExtensions»");
            if (typeof syntax_content !== "string") throw new Error("Required parameter «syntax_content» on index «extensions[" + extensionId + "]» to be a string in order «Castelog.generateCastelogClassByExtensions»");
            if (typeof syntax_prescript !== "string") throw new Error("Required parameter «syntax_prescript» on index «extensions[" + extensionId + "]» to be a string in order «Castelog.generateCastelogClassByExtensions»");
            if (!(hook_id in this.HOOK_ID)) throw new Error("Required parameter «hook_id» on index «extensions[" + extensionId + "]» to be a valid «HOOK_ID» in order «Castelog.generateCastelogClassByExtensions»");
            const hookId = this.HOOK_ID[hook_id];
            extendedSource = extendedSource
                .replace(hookId, syntax_name + "\n" + hook_id)
                .replace(this.HOOK_ID.Sintaxis, syntax_content + "\n" + this.HOOK_ID.Sintaxis)
                .replace(this.HOOK_ID.Prescript, syntax_prescript + "\n" + this.HOOK_ID.Prescript);
        }
        const pegjs = require("pegjs");
        let parser = undefined;
        try {
            parser = pegjs.generate(extendedSource, Object.assign({}, {
                format: "umd",
                exportVar: "Castelog_parser",
                output: "parser",
            }, options));
        } catch(error) {
            console.log("Error compilando parser de extensiones: " + JSON.stringify(Object.keys(extensions)) + "");
            console.log(error);
            throw error;
        }
        return Object.assign(class extends this {}, {
            parser,
            version: new Date(),
            grammars: Object.keys(extensions)
        });
    }

    static get parser() {
        return CastelogParser;
    }

    static normalize_file_1(file_dirty, file_dir, file_dir_2 = process.cwd()) {
        const path = require("path");
        return file_dirty.startsWith("./")
            ? path.resolve(file_dir, file_dirty.substr(2))
            : file_dirty.startsWith("@/")
                ? path.resolve(file_dir_2, file_dirty.substr(2))
                : file_dirty;
    }

    static dirname(file) {
        return require("path").dirname(file);
    }

    static custom_require(file, dirname, dirprocess) {
        return `function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, ${JSON.stringify(dirname)}, ${JSON.stringify(dirprocess)});
})(id);
}`;
    }

    static get custom_module() {
        return `{ exports:undefined }`;
    }

    static getIndexesOf(str, searchKeyword) {
        let startingIndices = [];
        let indexOccurence = str.indexOf(searchKeyword, 0);
        while (indexOccurence >= 0) {
            startingIndices.push(indexOccurence);
            indexOccurence = str.indexOf(searchKeyword, indexOccurence + 1);
        }
        return startingIndices;
    }

    static wrapUmdModuleFunction(mod, file) {
        const dirname = this.dirname(file);
        const dirprocess = process.cwd();
        const sane_dirname = JSON.stringify(dirname);
        const sane_dirprocess = JSON.stringify(dirprocess);
        return `\n// [castelog:modulo] [origen:] ${file}\n(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : ${this.custom_require(file, dirname, dirprocess)};
        const module_ = (typeof module !== "undefined") ? module : ${this.custom_module};
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, ${sane_dirname}, ${sane_dirprocess} );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\\n  - " + envs.join("\\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo ${file}:", error);
        throw error;
    }
})(${mod});`;
    }

    static compileCode(code, customOption = {}) {
        return this.parser.parse(code, {
            customOption: {
                ...customOption,
            }
        });
    }

    static compileFile(fileParameter, customOption, console_log = console.log) {
        let last_file = undefined;
        const fs = require("fs");
        const path = require("path");
        const file = path.resolve(fileParameter);
        const jsFile = file.replace(/\.(calo)$/gi, ".js");
        if (!fs.existsSync(file)) {
            throw new Error("[CASTELOG] File not found: " + file);
        } else if (!fs.lstatSync(file).isFile()) {
            throw new Error("[CASTELOG] Path must point to a file: " + file);
        }
        last_file = file;
        const clgCode = fs.readFileSync(file).toString();
        let jsCode = undefined;
        try {
            jsCode = this.compileCode(clgCode, {
                ...customOption,
            });
        } catch (error) {
            console_log("Error al compilar fichero Castelog a JavaScript: " + file, error);
            error.castelog_api_last_file = last_file;
            throw error;
        }
        try {
            fs.writeFileSync(jsFile, jsCode, "utf8");
        } catch (error) {
            console_log("Error al volcar fichero JavaScript a Castelog: " + file, error);
            error.castelog_api_last_file = last_file;
            throw error;
        }
        return jsCode;
    }

    static compileFiles(files, customOption, console_log = console.log) {
        let last_file = undefined;
        try {
            const starting_moment = new Date();
            const resultado_final = {}
            const fs = require("fs");
            const path = require("path");
            let compiled_files = {};
            let configurations = { isHtml5: false };
            const token_compilable = "\n// [castelog:compilables] ";
            const token_empaquetable = "\n// [castelog:empaquetables] ";
            const token_html5izable = "\n// [castelog:html5izable] ACTIVADO con:";
            console_log(`[Paso 1.1] Compilando ${files.length} fichero${(files.length > 1) ? "s" : ""} principal${(files.length > 1) ? "s" : ""} de Castelog a JavaScript. ${JSON.stringify(files, null, 2)}`)
            let first_file = undefined;
            let first_file_original = undefined;
            for (let index = 0; index < files.length; index++) {
                const file = files[index];
                let js_code = "";
                try {
                    last_file = file;
                    console.log("[Paso 1.1." + (index+1) + "] Compilando fichero principal: " + file);
                    js_code = Castelog.compileFile(file, {
                        __filename: file,
                        is_runnable: index === 0,
                        ...customOption
                    });
                    compiled_files[file] = js_code;
                    if (index === 0) {
                        first_file = { file, js_code };
                        first_file_original = { file, js_code };
                    }
                } catch (error) {
                    console_log("Error compilando fichero (principal) Castelog a JavaScript: " + file);
                    error.castelog_api_last_file = last_file;
                    throw error;
                }
                try {
                    fs.writeFileSync(file.replace(/\.(calo)$/gi, "") + ".js", js_code);
                } catch (error) {
                    console_log("Error volcando fichero (principal) JavaScript (de Castelog): " + file);
                    error.castelog_api_last_file = last_file;
                    throw error;
                }
            }
            last_file = first_file.file;
            const compilable_files = (() => {
                try {
                    const compilableMatches = this.getIndexesOf(first_file.js_code, token_compilable).map(ind => {
                        try {
                            const substr_1 = first_file.js_code.substr(ind + token_compilable.length);
                            const next_line_pos_1_ = substr_1.indexOf("\n");
                            const next_line_pos_1 = (next_line_pos_1_ === -1) ? first_file.js_code.length : next_line_pos_1_;
                            const compilable_item = JSON.parse(substr_1.substr(0, next_line_pos_1).trim());
                            return compilable_item;
                        } catch (error) {
                            throw error;
                        }
                    });
                    return compilableMatches;
                } catch(error) {
                    console.log("Error obteniendo detalles de ficheros secundarios:", error);
                    throw error;
                }
            })();
            const file_dir = path.dirname(first_file.file);
            if (compilable_files.length) {
                const compilable_files_2 = compilable_files.map(f => this.normalize_file_1(f, file_dir, process.cwd()));
                console_log(`[Paso 1.2] Compilando ${compilable_files.length} fichero${(compilable_files.length > 1) ? "s" : ""} asociado${(compilable_files.length > 1) ? "s" : ""} de Castelog a JavaScript. ${JSON.stringify(compilable_files_2, null, 2)}`)
                for (let index = 0; index < compilable_files_2.length; index++) {
                    const file_dirty = compilable_files_2[index];
                    const file = file_dirty;
                    last_file = file;
                    let js_code = "";
                    try {
                        console.log("[Paso 1.2." + (index+1) + "] Compilando fichero secundario " + file)
                        js_code = Castelog.compileFile(file, {
                            __filename: file,
                            is_runnable: index === 0,
                            ...customOption
                        });
                        compiled_files[file] = js_code;
                    } catch (error) {
                        console_log("Error compilando fichero (asociado) Castelog a JavaScript: " + file);
                        error.castelog_api_last_file = last_file;
                        throw error;
                    }
                    let js_file = file.replace(/\.(calo)$/gi, "") + ".js";
                    try {
                        fs.writeFileSync(js_file, js_code, "utf8");
                    } catch (error) {
                        console_log("Error volcando fichero (asociado) JavaScript (de Castelog): " + js_file);
                        error.castelog_api_last_file = last_file;
                        throw error;
                    }
                }
                Object.assign(resultado_final, { compiled_files });
            } else {
                console_log("No se encontraron compilables asociados.");
            }
            console_log(`[Paso 1.2] ¡Compilación de ficheros Castelog a JavaScript exitoso!`)
            //const child_process = require("child_process");
            const salida = path.resolve(customOption.empaquetar || path.dirname(first_file.file));
            const calofiles = compilable_files.map(file => path.resolve(file));
            try {
                fs.mkdirSync(salida);
            } catch (error) {
                // @noop.
            }
            let main_contents = "";
            try {
                const empaquetableMatches = this.getIndexesOf(first_file.js_code, token_empaquetable).map(ind => {
                    const substr_1 = first_file.js_code.substr(ind + token_empaquetable.length);
                    const next_line_pos_1_ = substr_1.indexOf("\n");
                    const next_line_pos_1 = (next_line_pos_1_ === -1) ? substr_1.length : next_line_pos_1_;
                    const empaquetable_item = this.normalize_file_1(JSON.parse(substr_1.substr(0, next_line_pos_1).trim()), file_dir, process.cwd());
                    return empaquetable_item;
                });
                if (empaquetableMatches.length) {
                    console_log(`[Paso 2.1] Empaquetando ${empaquetableMatches.length} ficheros JavaScript en 1. ${JSON.stringify(empaquetableMatches, null, 2)}`);
                    Object.assign(resultado_final, { packed_files: empaquetableMatches });
                    const output_dir = salida;
                    const main_file = path.resolve(salida, "main.js");
                    const main_dir = file_dir;
                    const process_dir = process.cwd();
                    main_contents = empaquetableMatches.map(file => {
                        last_file = file;
                        const js_code = fs.readFileSync(file).toString();
                        return this.wrapUmdModuleFunction(`function(require, module, __filename, __dirname) {
    try {
        ${js_code}
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + ${JSON.stringify(file)} + ':', error);
        throw error;
    }
}, ${JSON.stringify(file)}`, file);
                    }).join("\n\n");
                    main_contents += "\n" + this.wrapUmdModuleFunction(`function(require, module, __filename, __dirname) {
    try {
        ${first_file_original.js_code}
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + ${JSON.stringify(first_file_original.file)} + ':', error);
        throw error;
    }
}, ${JSON.stringify(first_file_original.file)}`, first_file_original.file, { output_dir, main_file, main_dir, process_dir, });
                    console_log("Empaquetación en: " + main_file);
                    fs.writeFileSync(main_file, main_contents, "utf8");
                    console_log("[Paso 2.2] ¡Empaquetación en 1 JavaScript exitosa! Ver: " + main_file);
                } else {
                    console_log("[Paso 2.1] No se encontraron empaquetables asociados.");
                    main_contents = first_file.js_code;
                }
            } catch (error) {
                console_log("Hubo errores en el proceso de empaquetación de Castelog a 1 fichero JavaScript:", error);
                throw error;
            }
            try {
                last_file = first_file.file;
                const html5izableMatches = this.getIndexesOf(first_file.js_code, token_html5izable).map(ind => {
                    const substr_1 = first_file.js_code.substr(ind + token_html5izable.length);
                    const next_line_pos_1_ = substr_1.indexOf("\n");
                    const next_line_pos_1 = (next_line_pos_1_ === -1) ? substr_1.length : next_line_pos_1_;
                    const app_metadata_json = substr_1.substr(0, next_line_pos_1).trim();
                    const html5izable_item = JSON.parse(app_metadata_json);
                    return html5izable_item;
                });
                if (html5izableMatches.length) {
                    console_log("[Paso 3.1] Compilando aplicación HTML5...");
                    const app = html5izableMatches[0];
                    const { nombre, version, autor, prefijo = false, sufijo = false } = app;
                    const { head, body } = app.contenido;
                    const html5file = path.resolve(salida, `${prefijo ? (prefijo + ".") : ""}${nombre}.${version}${sufijo ? ("." + sufijo) : ""}.html`);
                    Object.assign(resultado_final, { html5_app: { app, file: html5file } });
                    const html5contents = `<!DOCTYPE html><html>${head}${
                            body.trim()
                                .replace(/\<[\t\r\n ]*\/[\t\r\n ]*body[\t\r\n ]*\>[\t\r\n ]*$/g, "")
                        }<script>${
                            main_contents
                                .replace(/\<script/g, "&gt;script")
                                .replace(/\<\/script/g, "&gt;/script")
                        }</script></body></html>`;
                    fs.writeFileSync(html5file, html5contents, "utf8");
                    console_log("[Paso 3.2] ¡Compilación en HTML5 exitosa! Ver: " + html5file);
                } else {
                    console_log("[Paso 3.1] No se encontró app HTML5 asociada.");
                }
            } catch (error) {
                console_log("Hubo errores en el proceso de compilación a app HTML5:", error);
                error.castelog_api_last_file = last_file;
                throw error;
            }
            console.log("La compilación tomó " + (((new Date()) - starting_moment) / 1000) + " segundos.")
            return {};
        } catch (error) {
            console_log("Error compilando ficheros Castelog a JavaScript:", error);
            error.castelog_api_last_file = last_file;
            throw error;
        }
    }

    static executeCalox(args) {
        let command = "";
        let indexArgs = -1;
        IteraComando:
        for(let index = 0; index < args._.length; index++) {
            indexArgs = index + 2;
            const arg = args._[index];
            if(arg === "instalar") {
                if(args._[index+1] === "sintaxis") {
                    command = "instalar sintaxis";
                    break IteraComando;
                }
            } else if (arg === "desinstalar") {
                if (args._[index + 1] === "sintaxis") {
                    command = "desinstalar sintaxis";
                    break IteraComando;
                }
            } else if (arg === "listar") {
                if (args._[index + 1] === "sintaxis") {
                    command = "listar sintaxis";
                    break IteraComando;
                }
            } else if (arg === "iniciar") {
                if (args._[index + 1] === "proyecto") {
                    command = "iniciar proyecto";
                    break IteraComando;
                }
            } else if (arg === "compilar") {
                command = "compilar";
                break IteraComando;
            }
        }
        const positionals = args._.slice(indexArgs);
        if(command === "instalar sintaxis") {
            return this.installSyntax(args, positionals);
        } else if (command === "desinstalar sintaxis") {
            return this.uninstallSyntax(args, positionals);
        } else if (command === "listar sintaxis") {
            return this.listSyntax(args, positionals);
        } else if (command === "iniciar proyecto") {
            return this.initiateProject(args, positionals);
        } else if (command === "compilar") {
            return this.compileBinaries(args, positionals);
        } else {
            return this.help_for_calox_cli();
        }
    }

    static installSyntax(args, positionals) {
        try {
            console.log("[CALOX] Instalando sintaxis...");
            // @TODO...
            console.log("[CALOX] Sintaxis instalada exitosamente.");
        } catch(error) {
            console.log("[CALOX] Hubo errores al instalar sintaxis:");
            console.log(error);
            throw error;
        }
    }

    static uninstallSyntax(args, positionals) {
        try {
            console.log("[CALOX] Desinstalando sintaxis...");
            // @TODO...
            console.log("[CALOX] Sintaxis desinstalada exitosamente.");
        } catch(error) {
            console.log("[CALOX] Hubo errores al desinstalar sintaxis:");
            console.log(error);
            throw error;
        }
    }

    static listSyntax(args, positionals) {
        try {
            console.log("[CALOX] Listar sintaxis...");
        } catch(error) {
            console.log("[CALOX] Hubo errores al listar sintaxis:");
            console.log(error);
            throw error;
        }
    }

    static compileBinaries(args, positionals) {
        try {
            console.log("[CALOX] Compilando binarios...");
            console.log(args);
        } catch (error) {
            console.log("[CALOX] Hubo errores al listar sintaxis:");
            console.log(error);
            throw error;
        }
    }

    static copyAllFileContents(files) {
        const fs = require("fs");
        const path = require("path");
        for(let index = 0; index < files.length; index++) {
            const file = files[index];
            const { src, dst } = file;
            const srcSolved = path.resolve(src);
            const dstSolved = path.resolve(dst);
            const srcContents = fs.readFileSync(srcSolved).toString();
            fs.writeFileSync(dstSolved, srcContents, "utf8");
            console.log("[CALOX] Copiado fichero «" + path.basename(srcSolved) + "» a «" + path.basename(dstSolved) + "»")
        }
    }

    static initiateProject(args, positionals) {
        try {
            const fs = require("fs");
            const path = require("path");
            console.log("[CALOX] Iniciar proyecto...");
            console.log(args, positionals);
            if(positionals.length === 0) {
                throw new Error("Required positional argument «positionals» to be an array of 1 item in order to «Castelog.initiateProject»")
            }
            const [ directorio ] = positionals;
            const directorioAbsoluto = path.resolve(directorio);
            console.log("[CALOX] Iniciando proyecto en:");
            console.log("[CALOX]   " + directorioAbsoluto);
            try {fs.mkdirSync(directorioAbsoluto);} catch(error) {}
            if(!fs.lstatSync(directorioAbsoluto).isDirectory()) {
                throw new Error("Required to create directory «./» in project in order to «Castelog.initiateProject»");
            }
            const directorioModulos = path.resolve(directorio, "calo_modules");
            try {fs.mkdirSync(directorioModulos);} catch(error) {}
            if(!fs.lstatSync(directorioModulos).isDirectory()) {
                throw new Error("Required to create directory «./calo_modules» in project root in order to «Castelog.initiateProject»");
            }
            console.log("[CALOX] Creada carpeta «calo_modules» para proyecto.");
            this.copyAllFileContents([{
                src: path.resolve(__dirname, "castelog.bin.js"),
                dst: path.resolve(directorioModulos, "castelog.bin.js")
            }, {
                src: path.resolve(__dirname, "castelog.api.js"),
                dst: path.resolve(directorioModulos, "castelog.api.js")
            }, {
                src: path.resolve(__dirname, "castelog.pegjs"),
                dst: path.resolve(directorioModulos, "castelog.pegjs")
            }, {
                src: path.resolve(__dirname, "castelog.js"),
                dst: path.resolve(directorioModulos, "castelog.js")
            }, {
                src: path.resolve(__dirname, "castelog-xtensions.js"),
                dst: path.resolve(directorioModulos, "castelog-xtensions.js")
            }, {
                src: path.resolve(__dirname, "castelog-xtensions.bin.js"),
                dst: path.resolve(directorioModulos, "castelog-xtensions.bin.js")
            }, {
                src: path.resolve(__dirname, "castelog-xtensions.pegjs"),
                dst: path.resolve(directorioModulos, "castelog-xtensions.pegjs")
            }]);
            console.log("[CALOX] Creados ficheros de Castelog-Xtensions en la carpeta «calo_modules» del proyecto.");
            try { fs.unlinkSync(path.resolve(directorioAbsoluto, "calo")); } catch (error) { }
            try { fs.unlinkSync(path.resolve(directorioAbsoluto, "calox")); } catch (error) { }
            fs.symlinkSync(
                path.resolve(directorioModulos, "castelog.bin.js"),
                path.resolve(directorioAbsoluto, "calo"),
            );
            fs.symlinkSync(
                path.resolve(directorioModulos, "castelog-xtensions.bin.js"),
                path.resolve(directorioAbsoluto, "calox"),
            );
            require("child_process").execSync("npm init -y", {
                cwd: directorioAbsoluto
            });
            console.log("[CALOX] Iniciado como proyecto npm.");
            console.log("[CALOX] Disponibles los ejecutable en:");
            console.log("[CALOX]   ./calo");
            console.log("[CALOX]   ./calox");
            console.log("[CALOX] Directorio raíz:");
            console.log("[CALOX]   " + directorioAbsoluto);
            console.log("[CALOX] Proyecto iniciado exitosamente.");
        } catch (error) {
            console.log("[CALOX] Hubo errores al iniciar proyecto:");
            console.log(error);
            throw error;
        }
    }

    static help_for_calox_cli() {
        const packageVersion = require(__dirname + "/../package.json").version;
        console.log("  Bienvenido a la ayuda de Castelog-Xtensions v0.0.1");
        console.log("    Versión de proyecto: " + packageVersion + "");
        console.log("    Uso desde línea de comandos:");
        console.log("       [ Iniciar proyecto:       ]");
        console.log("      ~$ calox iniciar proyecto .");
        console.log("       [ Listar sintaxis:        ]");
        console.log("      ~$ calox listar sintaxis");
        console.log("       [ Instalar sintaxis:      ]");
        console.log("      ~$ calox instalar sintaxis './sintaxis-x.calox'");
        console.log("       [ Desinstalar sintaxis:   ]");
        console.log("      ~$ calox desinstalar sintaxis 'Sintaxis-x'");
        console.log("       [ Compilar binarios:      ]");
        console.log("      ~$ calox compilar");
        return;
    }

    static help_for_cli() {
        const packageVersion = require(__dirname + "/../package.json").version;
        console.log("  Bienvenido a la ayuda de Castelog v0.0.1");
        console.log("    Versión de proyecto: " + packageVersion + "");
        console.log("    Uso desde línea de comandos:");
        console.log("      ~$ calo 1.calo 2.calo 3.calo { opciones }");
        console.log("    Opciones:");
        console.log("      [ Opción:        ] --ejecutar | -e");
        console.log("        [ Ejemplo:     ] calo 1.calo 2.calo --ejecutar");
        console.log("        [ Descripción: ] Correría 1.calo tras la compilación.");
        return;
    }

}

Castelog.default = Castelog;

module.exports = Castelog;