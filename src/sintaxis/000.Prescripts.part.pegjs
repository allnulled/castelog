{

  const jquery_source_code = /*::castelog_jquery_source_code::*/ 0
  let lib_source_code = /*::castelog_api_source_code::*/ 0

  const CHARS = {
    SIMBOLO_ABRIR_BLOQUE: "{",
    SIMBOLO_CERRAR_BLOQUE: "}",
  };
  const reduceGenerative = function(prependixes, generative, appendixes) {
    let output = generative;
    for(let index = 0; index < prependixes.length; index++) {
        const prependix = prependixes[index];
        if(typeof prependix === "object") {
          if(prependix.before && prependix.after) {
            output = prependix.before + output + prependix.after;
          } else {
            throw new Error("Prependix must have «before» and «after» if «object»");
          }
        } else {
          output = prependix.replace("${generativa}", output);
        }
    }
    for(let index = 0; index < appendixes.length; index++) {
        const appendix = appendixes[index];
        if(typeof appendix === "object") {
          if(appendix.before && appendix.after) {
            output = appendix.before + output + appendix.after;
          } else {
            throw new Error("Appendix must have «before» and «after» if «object»");
          }
        } else {
          output = appendix.replace("${generativa}", output);
        }
    }
    return output;
  };

  const wrapScriptCode = function(code) {
    return code;
  };

  const getErrorToCode = function(text, location) {
    const errorRangeByPosition = location.start.offset + "-" + location.end.offset;
    const errorRangeByColumns = location.start.line + ":" + location.start.column + "-" + location.end.line + ":" + location.end.column;
    return 'new Error("Error en fichero ['
      + (options && options.__filename ? options.__filename : "-")
      + '] en posición ['
      + errorRangeByPosition
      + "="
      + errorRangeByColumns
      + '] cuando: " + '
      + JSON.stringify(text.trim())
      + ')';
  };

  const fromComplexIdToSimple = function(txt) {
    return txt.substr(1, txt.length - 2).trim().replace(/ /g, "_");
  };

  const createShebang = function(shebang) {
    return "#!" + shebang + "\n";
  };

  const createExecutableComment = function(id, ejec) {
    return "\n// [castelog:ejecutable:" + id + "] Esto es un comando ejecutable por: " + ejec + "\n";
  }

  const createExecutedWithCommand = function(executableEnvironment) {
    return executableEnvironment ? "\n// [castelog:ejecutado-con] " + JSON.stringify(executableEnvironment) + "\n": "";
  }

  const fromLoopDataToCode = function(etiqueta, desde, hasta, usando, bloque) {
    const usandoVariable = usando ? usando[1] : "index";
    return (etiqueta ? etiqueta : "")
      + "for(let " 
      + usandoVariable 
      + " = " 
      + desde 
      + "; " 
      + usandoVariable 
      + " < " 
      + hasta 
      + "; " 
      + usandoVariable 
      + "++) {" 
      + bloque 
      + "}";
  };

  const fromBlockAndCatchToCode = function(block, catchBlock, forceTry = false, noTryBrackets = false, preTryBlock = "") {
    let output = "";
    if(catchBlock || forceTry){
      output += preTryBlock;
      if(!noTryBrackets) {
        output += "try {\n" + block + "\n} ";
      } else {
        output += "try " + block + "";
      }
      if(catchBlock) {
        output += catchBlock;
      } else {
        output += "catch(error) {\nconsole.log(error);\nthrow error;\n}\n";
      }
    }
    return output;
  };

  const wrapInVue2ComponentFactoryFunction = function(block) {
    return `function(component) {${block}}`;
  };

  const generate_import_module_expression = function(tipo, nombre, ruta, cacheado, creando, errores) {
    if(tipo === "módulo es6") {
      return `import ${creando ? (creando.replace(/^(let |var |const )/g, "").replace(/( *= *)$/g, "") + " from ") : nombre ? (nombre + ' from ') : ''} ${ruta}`;
    } else if(tipo === "módulo es5 fresco") {
      return `delete require.cache[require.resolve(${ruta})];\n${creando ? creando : nombre ? (nombre + ' = ') : ''}require(${ruta});`;
    } else if(tipo === "módulo es5") {
      return `${creando ? creando : nombre ? (nombre + ' = ') : ''}require(${ruta});`;
    } else if((tipo === "módulo nativo") || (tipo === "módulo universal estándar")) {
      return `${creando ? creando : ""}Castelog.metodos.un_modulo_importado(${nombre}, ${ruta})`;
    }
  };

  const generate_export_module_expression = function(valor, tipo, cacheado) {
    if(tipo === "módulo es6") {
      return `export default ${valor}`;
    } else if(tipo === "módulo es5") {
      return `module.exports = ${valor}`;
    } else if(tipo === "módulo nativo") {
      return `Castelog.metodos.un_modulo_exportado(${valor}, ${JSON.stringify(tipo)}, ${cacheado})`;
    }
  };

  const generate_siendo_attribute_expression = function(asincronamente, atributo, parametros) {
    return `[${asincronamente}, ${atributo}, ${parametros}]`;
  };

  const join_sentences_literalog = function ( sentences ) {
    let output = "";
    for(let i=0; i<sentences.length; i++) {
      let sentence = sentences[i];
      console.log(sentence);
      if(i !== 0) {
        output += ".";
      }
      if(sentence.startsWith("(")) {
        if(i !== 0) {
          output += "$.";
        }
      }
      output += sentence;
    }
    return output;
  };

  const generate_list_from_list = function(itemN, joiner = ".", starter = "") {
    let out = "";
    if(starter) {
      out += starter;
    }
    for(let i=0; i<itemN.length; i++) {
      const item_alone = itemN[i];
      if(typeof joiner === "string") {
        out += joiner + item_alone;
      } else if(typeof joiner === "function") {
        out += joiner(item_alone, i, itemN);
      } else {
        out += joiner + item_alone;
      }
    }
    return out;
  }

  const generate_list_from_1_and_n_pure = function(item1, itemN, joiner = ".", starter = "") {
    let out = "";
    if(item1) {
      out += starter + item1;
    }
    for(let i=0; i<itemN.length; i++) {
      const item_alone = itemN[i];
      if(typeof joiner === "string") {
        out += joiner + item_alone;
      } else if(typeof joiner === "function") {
        out += joiner(item_alone, i, itemN, item1);
      } else {
        out += joiner + item_alone;
      }
    }
    return out;
  }

  const generate_list_from_1_and_n = function(item1, itemN, joiner = ".", starter = "") {
    let out = "";
    if(item1) {
      out += starter + item1;
    }
    for(let i=0; i<itemN.length; i++) {
      const item_alone = itemN[i];
      if(item_alone.length) {
        out += joiner + item_alone[1];
      }
    }
    return out;
  }

  const generate_literalog_variable_access = function(i1, i2) {
    let salida = "";
    if(i1) {
      salida += i1;
    }
    if(i2 && i2.length) {
      for(let i=0; i<i2.length; i++) {
        const item = i2[i];
        if(typeof item === "string") {
          if(!item.startsWith("[")) {
            salida += ".";
          }
          salida += item;
        } else if(typeof item === "object") {
          salida += item.code;
        } else {
          throw new Error("Required argument «i2» on index «" + i + "» to be an object or a string on parsing time in order to «generate_literalog_variable_access»");
        }
      }
    }
    return salida;
  };

  const inicio_plantilla = function() {
    return `let $salida_de_plantilla = '';`;
  };

  const apendizar_plantilla = function(apendice) {
    return `$salida_de_plantilla += ${apendice};`;
  };

  const fin_plantilla = function() {
    return `return $salida_de_plantilla;`;
  };

  const reduce_plantilla = function(tokens) {
    return tokens.reduce((output, t) => {
      if(typeof t === "string") {
        output += "$plantilla += " + JSON.stringify(t) + ";\n";
      } else if(typeof t === "object") {
        if(t.bloque) {
          output += t.bloque + "\n";
        } else if(t.generativa) {
          output += "$plantilla += " + t.generativa + ";\n";
        }
      }
      return output;
    }, 'function(config, settings) {\n  let $plantilla = "";\n')
     + '  return $plantilla;\n}';
  };

  const formatear_ast_literalog = function(ast) {
    const formatear_recursivamente = function (branch, selector = []) {
      if(typeof branch === "object") {
        for(let prop in branch) {
          const subranch = branch[prop];
          branch[prop] = formatear_recursivamente(subranch, selector.concat([prop]));
        }
        if(Array.isArray(branch)) {
          return Object.assign( [], { $id: selector }, branch, { $id: selector });
        } else {
          return Object.assign( {}, { $id: selector }, branch, { $id: selector });
        }
      }
      return branch;
    };
    const ast2 = formatear_recursivamente(ast);
    return JSON.stringify(ast2, null, 2);
  }

  const DEFAULT_WEBMANIFEST_CONTENTS = {
    $schema: "https://json.schemastore.org/web-manifest-combined.json",
    name: "Nueva app",
    short_name: "Nueva app",
    start_url: ".",
    display: "standalone",
    background_color: "#EFEFEF",
    description: "Descripción de la aplicación aquí.",
    icons: [{
        src: "images/homescreen.48.png",
        sizes: "48x48",
        type: "image/png"
    }, {
        src: "images/homescreen.72.png",
        sizes: "72x72",
        type: "image/png"
    }, {
        src: "images/homescreen.96.png",
        sizes: "96x96",
        type: "image/png"
    }, {
        src: "images/homescreen.144.png",
        sizes: "144x144",
        type: "image/png"
    }, {
        src: "images/homescreen.168.png",
        sizes: "168x168",
        type: "image/png"
    }, {
        src: "images/homescreen.192.png",
        sizes: "192x192",
        type: "image/png"
    }],
    related_applications: [{
        platform: "play",
        url: "https://play.google.com/store/apps/details?id="
    }]
};

  /* HTML CODE:: */
      function node(name, attributes, content){
        var x$, that;
        x$ = {
            node: name
        };
        if (that = attributes) {
            x$.attrs = that;
        }
        if (content && content.length) {
            x$.content = content;
        }
        return x$;
    }
    function reduceToObj(xs){
        var x$, attr, setField, i$, y$, len$;
        x$ = attr = {};
        setField = function(x){
            if (x && x.name) {
            return attr[x.name] = x.text;
            }
        };
        for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
            y$ = xs[i$];
            setField(y$);
        }
        return x$;
    }
  /* ::HTML CODE */


  /* CSS CODE:: */
  function extractOptional(optional, index) {
    return optional ? optional[index] : null;
  }

  function extractList(list, index) {
    return list.map(function(element) { return element[index]; });
  }

  function buildList(head, tail, index) {
    return [head].concat(extractList(tail, index))
      .filter(function(element) { return element !== null; });
  }

  function buildExpression(head, tail) {
    return tail.reduce(function(result, element) {
      return {
        type: "Expression",
        operator: element[0],
        left: result,
        right: element[1]
      };
    }, head);
  }
  /* ::CSS CODE */

  const generate_sentence_for_una_aplicacion_vue2 = function(nombre, plantilla, logica, estilos, parametros_de_estilos, rutas, traducciones, montada) {
    return `Castelog.metodos.una_aplicacion_vue2(\n  ${
      nombre ? nombre[1] : "null"
    },\n  ${
      generate_splitted_stringification(plantilla)
    },\n  ${
      logica ? wrapInVue2ComponentFactoryFunction(logica[1]) : 'null'
    },\n  ${
      estilos ? estilos[1] : 'null'
    },\n  ${
      parametros_de_estilos ? parametros_de_estilos : 'null'
    },\n  ${
      rutas ? rutas[1] : '[]'
    },\n  ${
      traducciones ? traducciones[1] : '{}'
    },\n  ${
      montada ? montada[1] : 'null'
    })`
  };

  const generate_sentence_for_un_componente_vue2 = function(nombre, plantilla, logica, estilos, parametros_de_estilos) {
    return `Castelog.metodos.un_componente_vue2(${
      nombre ? nombre[1] : "null"
    },\n  ${
      generate_splitted_stringification(plantilla)
    },\n  ${
      logica ? wrapInVue2ComponentFactoryFunction(logica[1]) : 'null'
    },\n  ${
      estilos ? estilos[1] : 'null'
    })`;
  };

  const generate_splitted_stringification = function(text) {
    return text.split(/\n/g).map(t => JSON.stringify(t)).join("\n + ");
  };

  // @~{ Hooks del Parser de Castelog: CONTENIDOS DE PRESCRIPT }~@

}