
// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/prescripts.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components", "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
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
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components", "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/prescripts.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        

    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/prescripts.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/prescripts.js");

// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/components.calo
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components", "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
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
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components", "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/components.calo:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        // [castelog:compilables] "./nativa.calo"
// [castelog:compilables] "./estilos.calo"
// [castelog:compilables] "./componentes.api.calo"

// [castelog:empaquetables] "./prescripts.js"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"components","version":"0.0.1","contenido":{"head":"<head>\n    <title>Componentes de la API Nativa de Castelog</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"./nativa.js\"></script>\n    <script src=\"./estilos.js\"></script>\n    <script src=\"./componentes.api.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <button v-on:click=\"() => $comunicaciones.una_entrada({ componente: 'Comunicacion1', atributos: {} })\">Go!</button>"
 + "    <router-view></router-view>"
 + "    <PuertoDeComunicaciones :aplicacion=\"this\" />"
 + "    <PuertoDeDialogos :aplicacion=\"this\" />"
 + "    <PuertoDeNotificaciones :aplicacion=\"this\" />"
 + "  </div>",
  function(component) {return { data() {return { 
};
},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "\"html {}\\n    body {}\\n    .Component {}\\n    .App {}\\n\", null", {},
  [ { path:"/",
name:"Home",
component:Vue.options.components.PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/components.calo" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo/Castelog/castelog-core/src/vue_components/components.calo");