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