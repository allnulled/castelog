
// [castelog:empaquetables] "./nativa.js"

// [castelog:empaquetables] "./estilos.js"

// [castelog:empaquetables] "./componentes.api.js"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"trash","version":"0.0.1","contenido":{"head":"<head>\n    <title></title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style>\n      \n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

Castelog.metodos.un_componente_vue2("ComponenteX", "<div>" + "    <ControlParaEntrada tipo=\"texto\" enunciado=\"Nombre:\" :gestor=\"this\" propiedad=\"internal_nombre\" :valor-inicial=\"internal_nombre\" />" + "    <ControlParaEntrada tipo=\"texto\" enunciado=\"Apellido:\" :gestor=\"this\" propiedad=\"internal_apellidos\" :valor-inicial=\"internal_apellidos\" />" + "    <ControlParaBoton v-on:click.native=\"() => $comunicaciones.resolver_comunicacion(internal_value)\">Resolvemos</ControlParaBoton>" + "  </div>", function(component) {return { props:{ nombre:{ type:String,
default:function() {return "";
}
},
apellidos:{ type:String,
default:function() {return "";
}
}
},
data:function() {return { internal_nombre:this.nombre,
internal_apellidos:this.apellidos
};
},
computed:{ internal_value:function() {return [ this.internal_nombre,
this.internal_apellidos ];
}
}
};}, null);
Castelog.metodos.un_componente_vue2("BotonParaAbrirDialogo", "<div>" + "    <ControlParaBoton v-on:click.native=\"emitir_evento\">Abrir diálogo.</ControlParaBoton>" + "    <pre v-if=\"ultima_respuesta\">{{ ultima_respuesta[1] }}, {{ ultima_respuesta[0] }}</pre>" + "  </div>", function(component) {return { data:function() {return { ultima_respuesta:[ "",
"" ]
};
},
methods:{ emitir_evento:async function() {this.ultima_respuesta = (await Castelog.metodos.una_comunicacion_de_entrada_de_usuario("ComponenteX", { style:"border: 1px solid blue;",
nombre:this.ultima_respuesta[ 0 ],
apellidos:this.ultima_respuesta[ 1 ]
}, { 
}));
}
}
};}, null);
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio", "<div class=\"PaginaDeInicio Component\">" + "    <BotonParaAbrirDialogo />" + "  </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">" + "    <router-view></router-view>" + "    <PuertoDeComunicaciones />" + "  </div>",
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
component:PaginaDeInicio,
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