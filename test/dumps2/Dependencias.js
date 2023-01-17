const utilidades_de_diagrama_de_dependencias = {
    genera_encontrar_uno: function (dependencies_manager) {
        return function(filter) {
            const result = dependencies_manager.data.filter(filter);
            if(result.length === 0) throw new Error("Required parameter «filter» to result in any match on «" + dependencies_manager.scope + "» in order to «genera_encontrar_uno»");
            if(result.length !== 1) throw new Error("Required parameter «filter» to result in a match of only one item on «" + dependencies_manager.scope + "» in order to «genera_encontrar_uno»");
            return result[0];
        }
    },
    genera_apendizar_uno: function (dependencies_manager) {
        return function(item) {
            const sentence = {
                tipo: dependencies_manager.config.tipo,
                item,
            };
            dependencies_manager.data.push(sentence);
            dependencies_manager.dependencies.sentences.push(sentence);
        };
    },
    de_ambito_a_tipo: function(scope) {
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
    },
    de_sentencia_a_proyecto: async function(sentence, state) {
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
            } else throw new Error("Required property «tipo» to be identificable in order to «Gestor_de_dependencia.to.project»");
            return result;
        } catch (error) {
            throw error;
        }
    }
};

class Gestor_de_dependencia {
    constructor(dependencies, scope) {
        this.data = [];
        this.dependencies = dependencies;
        this.scope = scope;
        this.find = {
            one: utilidades_de_diagrama_de_dependencias.genera_encontrar_uno(this),
        };
        this.append = utilidades_de_diagrama_de_dependencias.genera_apendizar_uno(this);
        this.config = {
            tipo: utilidades_de_diagrama_de_dependencias.de_ambito_a_tipo(scope)
        };
    }
}

class Dependencias {
    constructor() {
        this.sentences = new Gestor_de_dependencia(this, "sentences");
        this.packages = new Gestor_de_dependencia(this, "packages");
        this.classes = new Gestor_de_dependencia(this, "classes");
        this.objects = new Gestor_de_dependencia(this, "objects");
        this.functions = new Gestor_de_dependencia(this, "functions");
        this.factories = new Gestor_de_dependencia(this, "factories");
        this.variables = new Gestor_de_dependencia(this, "variables");
        this.constants = new Gestor_de_dependencia(this, "constants");
        this.ui = {
            components: new Gestor_de_dependencia(this, "ui_components"),
            applications: new Gestor_de_dependencia(this, "ui_applications")
        };
        this.to = {
            project: async (basepath = ".") => {
                try {
                    const basedir = require("path").resolve(basepath);
                    const state = { dependencies: this, basedir, sentences: [], index: -1 };
                    for(let indexSentence = 0; indexSentence < this.sentences.data.length; indexSentence++) {
                        state.index = indexSentence;
                        const sentence = this.sentences.data[indexSentence];
                        const result = await utilidades_de_diagrama_de_dependencias.de_sentencia_a_proyecto(sentence, state);
                        state.sentences.push(result);
                    }
                    return result;
                } catch(error) {
                    throw error;
                }
            }
        };
    }
}

Dependencias.Dependencias = Dependencias;
Dependencias.Gestor_de_dependencia = Gestor_de_dependencia;
Dependencias.default = Dependencias;

Castelog.variables.Sistema_de_dependencias = Dependencias;
Castelog.variables.Gestor_de_dependencia = Gestor_de_dependencia;