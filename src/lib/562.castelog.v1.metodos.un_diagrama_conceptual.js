Castelog.metodos.termino_el_programa = function(...args) {
    Castelog.metodos.debugar_sintaxis_de_diagramas(...args);
    process.exit(0);
};

Castelog.variables.DiagramaConceptualPorDefecto = function () {
    Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.variables.DiagramaConceptualPorDefecto");
    this.codigo = {
        cabeceras: "",
        pieceras: "",
        nodos: "",
        relaciones: ""
    };
    this.sentencias = [];
    this.toMermaidCode = () => {
        return this.codigo.cabeceras + "\n" + this.codigo.nodos + "\n" + this.codigo.relaciones + "\n" + this.codigo.pieceras;
    };
    return this;
};

Castelog.variables.ContextoDeDiagramaConceptual = function (id_original, extra) {
    Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.variables.ContextoDeDiagramaConceptual");
    let id = id_original;
    if(id_original instanceof Castelog.variables.ContextoDeDiagramaConceptual) {
        id = id_original.id;
    }
    if(!Array.isArray(id)) {
        throw new Error("Required argument «id» to be an array in order to «Castelog.variables.ContextoDeDiagramaConceptual»");
    }
    this.id = id;
    if(typeof extra === "string") {
        this.id = this.id.concat(extra);
    } else if(typeof extra === "undefined") {
        // @OK"
    } else {
        throw new Error("Required argument «extra» to be a string or undefined in order to «Castelog.variables.ContextoDeDiagramaConceptual»");
    }
    return this;
};
Castelog.variables.ContextoDeDiagramaConceptual.prototype = {};
Castelog.variables.ContextoDeDiagramaConceptual.prototype.tabulacion = function() {
    let tab = "";
    for(let index = 0; index < this.id.length; index++) {
        const id_item = this.id[index];
        tab += "  ";
    }
    return tab;
};

Castelog.variables.DiagramaConceptualSeleccionado = Castelog.variables.DiagramaConceptualPorDefecto;

Castelog.variables.configuraciones_de_constructor_de_diagramas = { debug: false };

Castelog.metodos.debugar_sintaxis_de_diagramas = function(...args) {
    if(Castelog.variables.configuraciones_de_constructor_de_diagramas.debug) {
        console.log(...args);
    }
};

Castelog.metodos.comprobar_objeto_de_diagrama = function(method, diagrama) {
    Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.comprobar_objeto_de_diagrama");
    Castelog.metodos.debugar_sintaxis_de_diagramas("OK en:" + method);
    if(!(diagrama instanceof Castelog.variables.DiagramaConceptualSeleccionado)) {
        throw new Error("Required argument «diagrama» to be an instance of «Castelog.variables.DiagramaConceptualSeleccionado» in order to «" + method + "»");
    }
};

Castelog.metodos.comprobar_contexto_de_diagrama = function (method, contexto) {
    Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.comprobar_contexto_de_diagrama");
    Castelog.metodos.debugar_sintaxis_de_diagramas("OK en:" + method);
    if(!(contexto instanceof Castelog.variables.ContextoDeDiagramaConceptual)) {
        throw new Error("Required argument «contexto» to be an instance of «Castelog.variables.ContextoDeDiagramaConceptual» in order to «" + method + "»");
    }
};

Castelog.metodos.comprobar_valor_de_diagrama = function (method, valor) {
    Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.comprobar_valor_de_diagrama");
    Castelog.metodos.debugar_sintaxis_de_diagramas("OK en:" + method);
    if (typeof valor !== "object") {
        throw new Error("Required argument «valor» to be an object in order to «" + method + "»");
    }
};

Castelog.metodos.un_diagrama_conceptual = async function(datos_de_diagrama, en_errores) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.un_diagrama_conceptual");
        if (typeof datos_de_diagrama !== "function") {
            throw new Error("Required argument «datos_de_diagrama» to be a function in order to «Castelog.metodos.un_diagrama_conceptual»");
        }
        const diagrama_objeto = new Castelog.variables.DiagramaConceptualSeleccionado();
        const contexto_de_diagrama = new Castelog.variables.ContextoDeDiagramaConceptual([]);
        await datos_de_diagrama(diagrama_objeto, contexto_de_diagrama);
        return diagrama_objeto;
    } catch(error) {
        if(typeof en_errores === "function") {
            return en_errores(error);
        }
        throw error;
    }
};

Castelog.metodos.defino_direccion_de_diagrama = async function(diagrama, valor) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_direccion_de_diagrama");
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_direccion_de_diagrama", diagrama);
        diagrama.codigo.cabeceras += "graph ";
        switch (valor) {
            case "izquierda a derecha":
                diagrama.codigo.cabeceras += "LR;\n";
                break;
            case "derecha a izquierda":
                diagrama.codigo.cabeceras += "RL;\n";
                break;
            case "arriba a abajo":
                diagrama.codigo.cabeceras += "TB;\n";
                break;
            case "abajo a arriba":
                diagrama.codigo.cabeceras += "BT;\n";
                break;
            default:
                throw new Error("Required argument «valor» to be recognized on «Castelog.metodos.defino_direccion_de_diagrama»");
        }
        diagrama.sentencias.push({ tipo: "dirección de diagrama", valor });
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_direccion_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_nodo_de_diagrama = async function(diagrama, valor, contexto) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_nodo_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_nodo_de_diagrama", diagrama, valor, contexto);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_nodo_de_diagrama", diagrama);
        Castelog.metodos.comprobar_contexto_de_diagrama("Castelog.metodos.defino_nodo_de_diagrama", contexto);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_nodo_de_diagrama", valor);
        const { nombre } = valor;
        let { texto } = valor;
        if (typeof nombre !== "string") {
            throw new Error("Required argument «nombre» to be a string in order to «Castelog.metodos.defino_nodo_de_diagrama»");
        }
        if(!("texto" in valor)) {
            texto = nombre;
        }
        if (typeof texto !== "string") {
            throw new Error("Required argument «texto» to be a string in order to «Castelog.metodos.defino_nodo_de_diagrama»");
        }
        const abre_grupo = "[";
        const cierra_grupo = "]";
        diagrama.codigo.nodos += `${contexto.tabulacion()}${nombre}${abre_grupo}${JSON.stringify(texto)}${cierra_grupo};\n`;
        diagrama.sentencias.push({ tipo: "nodo de diagrama", valor, contexto });
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_nodo_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_relacion_de_diagrama = async function(diagrama, valor) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_relacion_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_relacion_de_diagrama", diagrama, valor);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_relacion_de_diagrama", diagrama);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_relacion_de_diagrama", valor);
        const { origen, texto, destino } = valor;
        if (typeof origen !== "string") {
            throw new Error("Required argument «origen» to be a string in order to «Castelog.metodos.defino_relacion_de_diagrama»");
        }
        if (typeof texto !== "string") {
            throw new Error("Required argument «texto» to be a string in order to «Castelog.metodos.defino_relacion_de_diagrama»");
        }
        if (typeof destino !== "string") {
            throw new Error("Required argument «destino» to be a string in order to «Castelog.metodos.defino_relacion_de_diagrama»");
        }
        const abre_relacion = "-- ";
        const cierra_relacion = " -->";
        diagrama.codigo.relaciones += `${origen} ${abre_relacion}${texto}${cierra_relacion} ${destino}\n`;
        diagrama.sentencias.push({ tipo: "relación de diagrama", valor });
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_relacion_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_conjunto_de_diagrama = async function(diagrama, valor, contexto) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_conjunto_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_conjunto_de_diagrama", diagrama, valor, contexto);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_conjunto_de_diagrama", diagrama);
        Castelog.metodos.comprobar_contexto_de_diagrama("Castelog.metodos.defino_conjunto_de_diagrama", contexto);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_conjunto_de_diagrama", valor);
        const { nombre, callback } = valor;
        if (typeof nombre !== "string") {
            throw new Error("Required argument «nombre» to be a string in order to «Castelog.metodos.defino_conjunto_de_diagrama»");
        }
        if(typeof callback !== "function") {
            throw new Error("Required argument «callback» to be a function in order to «Castelog.metodos.defino_conjunto_de_diagrama»");
        }
        const nuevo_contexto = new Castelog.variables.ContextoDeDiagramaConceptual(contexto, nombre);
        diagrama.sentencias.push({ tipo: "conjunto de diagrama", valor, contexto });
        diagrama.codigo.nodos += `${contexto.tabulacion()}subgraph ${nombre}:\n`;
        await callback(diagrama, nuevo_contexto);
        diagrama.codigo.nodos += `${contexto.tabulacion()}end\n`;
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_conjunto_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_clase_de_diagrama = async function(diagrama, valor) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_clase_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_clase_de_diagrama", diagrama, valor);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_clase_de_diagrama", diagrama);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_clase_de_diagrama", valor);
        const { nombre, relleno = "#FFF", grosor = "1px", borde = "#333" } = valor;
        if(typeof nombre !== "string") {
            throw new Error("Required argument «nombre» to be a string in order to «Castelog.metodos.defino_clase_de_diagrama»");
        }
        if (typeof relleno !== "string") {
            throw new Error("Required argument «relleno» to be a string in order to «Castelog.metodos.defino_clase_de_diagrama»");
        }
        if (typeof grosor !== "string") {
            throw new Error("Required argument «grosor» to be a string in order to «Castelog.metodos.defino_clase_de_diagrama»");
        }
        if (typeof borde !== "string") {
            throw new Error("Required argument «borde» to be a string in order to «Castelog.metodos.defino_clase_de_diagrama»");
        }
        diagrama.sentencias.push({ tipo: "clase de diagrama", valor });
        diagrama.codigo.pieceras += `classDef ${nombre} fill:${relleno},stroke:${borde},stroke-width:${grosor}\n`;
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_clase_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_clasificacion_de_diagrama = async function(diagrama, valor) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_clasificacion_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_clasificacion_de_diagrama", diagrama, valor);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_clasificacion_de_diagrama", diagrama);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_clasificacion_de_diagrama", valor);
        const { nombre, nodos } = valor;
        if (typeof nombre !== "string") {
            throw new Error("Required argument «nombre» to be a string in order to «Castelog.metodos.defino_clasificacion_de_diagrama");
        }
        if (!Array.isArray(nodos)) {
            throw new Error("Required argument «nodos» to be an array in order to «Castelog.metodos.defino_clasificacion_de_diagrama");
        }
        for(let index = 0; index < nodos.length; index++) {
            const nodo = nodos[index];
            diagrama.codigo.pieceras += `class ${nombre} ${nodo}\n`;
            diagrama.sentencias.push({ tipo: "clasificación de diagrama", valor });
        }
    } catch(error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_clasificacion_de_diagrama»:", error);
        throw error;
    }
};

Castelog.metodos.defino_estrategias_de_diagrama = async function(diagrama, valor) {
    try {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Entro en: Castelog.metodos.defino_estrategias_de_diagrama");
        Castelog.metodos.debugar_sintaxis_de_diagramas("defino_estrategias_de_diagrama", diagrama, valor);
        Castelog.metodos.comprobar_objeto_de_diagrama("Castelog.metodos.defino_estrategias_de_diagrama", diagrama);
        Castelog.metodos.comprobar_valor_de_diagrama("Castelog.metodos.defino_estrategias_de_diagrama", valor);
    } catch (error) {
        Castelog.metodos.debugar_sintaxis_de_diagramas("Error on «Castelog.metodos.defino_estrategias_de_diagrama»:", error);
        throw error;
    }
};
