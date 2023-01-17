Castelog.variables.Gestor_de_dependencia = class {
    static create(...args) {
        return new this(...args);
    }
    constructor(dependencies, scope) {
        this.data = [];
        this.dependencies = dependencies;
        this.scope = scope;
        this.find = {
            one: this.$find_one,
        };
        this.append = this.$append;
        this.config = {
            tipo: this.$from_scope_to_tipo(scope)
        };
    }
    $find_one(filter) {
        const result = this.data.filter(filter);
        if (result.length === 0) throw new Error("Required parameter «filter» to result in any match on «" + this.scope + "» in order to «Castelog.variables.Gestor_de_dependencia.find_one»");
        if (result.length !== 1) throw new Error("Required parameter «filter» to result in a match of only one item on «" + this.scope + "» in order to «Castelog.variables.Gestor_de_dependencia.find_one»");
        return result[0];
    }
    $append() {
        const sentence = {
            tipo: this.config.tipo,
            item,
        };
        this.data.push(sentence);
        this.dependencies.sentences.push(sentence);
    }
    $from_scope_to_tipo(scope) {
        return scope === "packages" ? "defino paquete" :
            scope === "classes" ? "defino clase" :
            scope === "objects" ? "defino objeto" :
            scope === "functions" ? "defino función" :
            scope === "factories" ? "defino fábrica" :
            scope === "variables" ? "defino variable" :
            scope === "constants" ? "defino constante" :
            scope === "ui_components" ? "defino componente UI" :
            scope === "ui_applications" ? "defino aplicación UI" :
            false;
    }
};

Castelog.variables.Sistema_de_dependencias_de_software = class {
    static create(...args) {
        return new this(...args);
    }
    constructor() {
        this.sentences = Castelog.variables.Gestor_de_dependencia.create(this, "sentences");
        this.packages = Castelog.variables.Gestor_de_dependencia.create(this, "packages");
        this.classes = Castelog.variables.Gestor_de_dependencia.create(this, "classes");
        this.objects = Castelog.variables.Gestor_de_dependencia.create(this, "objects");
        this.functions = Castelog.variables.Gestor_de_dependencia.create(this, "functions");
        this.factories = Castelog.variables.Gestor_de_dependencia.create(this, "factories");
        this.variables = Castelog.variables.Gestor_de_dependencia.create(this, "variables");
        this.constants = Castelog.variables.Gestor_de_dependencia.create(this, "constants");
        this.ui = {
            components: Castelog.variables.Gestor_de_dependencia.create(this, "ui_components"),
            applications: Castelog.variables.Gestor_de_dependencia.create(this, "ui_applications")
        };
        this.to = {
            validation: () => {
                try {
                    
                } catch(error) {
                    throw error;
                }
            },
            project: async (basepath = ".") => {
                try {
                    const basedir = require("path").resolve(basepath);
                    const state = { dependencies: this, basedir, sentences: [], index: -1 };
                    for (let indexSentence = 0; indexSentence < this.sentences.data.length; indexSentence++) {
                        state.index = indexSentence;
                        const sentence = this.sentences.data[indexSentence];
                        const result = await this.de_sentencia_a_proyecto(sentence, state);
                        state.sentences.push(result);
                    }
                    return result;
                } catch (error) {
                    throw error;
                }
            }
        };
    }
    async de_sentencia_a_proyecto(sentence, state) {
        try {
            let result = false;
            if (false) {
            } else if (sentence.tipo === "defino paquete") {
                // @TODO...
            } else if (sentence.tipo === "defino clase") {
                // @TODO...
            } else if (sentence.tipo === "defino objeto") {
                // @TODO...
            } else if (sentence.tipo === "defino función") {
                // @TODO...
            } else if (sentence.tipo === "defino fábrica") {
                // @TODO...
            } else if (sentence.tipo === "defino variable") {
                // @TODO...
            } else if (sentence.tipo === "defino constante") {
                // @TODO...
            } else if (sentence.tipo === "defino componente UI") {
                // @TODO...
            } else if (sentence.tipo === "defino aplicación UI") {
                // @TODO...
            } else throw new Error("Required property «tipo» to be identificable in order to «Castelog.variables.Gestor_de_dependencia.to.project»");
            return result;
        } catch (error) {
            throw error;
        }
    }
};

Castelog.metodos.un_diagrama_de_dependencias = function(diagrama) {

};