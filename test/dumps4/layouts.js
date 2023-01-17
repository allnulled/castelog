
// [castelog:empaquetables] "./nativa.js"

// [castelog:empaquetables] "./estilos.js"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"layouts","version":"0.0.1","contenido":{"head":"<head>\n    <title>Layouts</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n</head>","body":"<body><div id=\"app\"></div></body>"}}

jQuery.fn.debugging = function( first,
second ) {console.log("[jQuery][DEBUG][SCOPE]");
console.log(this);
console.log("[jQuery][DEBUG][PARAMETER 1]");
console.log(first);
console.log("[jQuery][DEBUG][PARAMETER 2]");
console.log(second);
return this;
};
Castelog.metodos.un_componente_vue2("Imagen", "<img class=\"Imagen\" :src=\"fuente\" />", function(component) {return { props:{ fuente:{ type:String,
required:true
}
}
};}, null);
Castelog.metodos.un_componente_vue2("GaleriaDeImagenes", "<div class=\"GaleriaDeImagenes\">\n        <DisposicionLineal>\n            <Item>\n                <ControlParaBoton v-on:click.native=\"() => seleccionar_imagen_anterior()\">«</ControlParaBoton>\n            </Item>\n            <Item style=\"flex-grow: 1; text-align: center;\">{{ internal_imagen_seleccionada in imagenes ? imagenes[internal_imagen_seleccionada] : \"Ninguna.\" }}</Item>\n            <Item>\n                <ControlParaBoton v-on:click.native=\"() => seleccionar_imagen_siguiente()\">»</ControlParaBoton>\n            </Item>\n        </DisposicionLineal>\n        <div v-for=\"(imagen, imagenIndex) in internal_imagenes\" v-bind:key=\"'galeria-de-imagenes-' + uuid + '-imagen-' + imagenIndex\">\n            <template v-if=\"internal_imagen_seleccionada === imagenIndex\">\n                <Imagen :fuente=\"imagen\" style=\"max-width: 100%;\" />\n            </template>\n        </div>\n    </div>", function(component) {return { props:{ uuid:{ type:String,
default:function() {return Castelog.metodos.un_texto_aleatorio(10, undefined);
}
},
imagenes:{ type:Array,
default:function() {return [  ];
}
}
},
data:function() {return { internal_imagen_seleccionada:0 - 1,
internal_imagenes:this.imagenes
};
},
methods:{ establecer_imagenes:function( imagenes ) {this.internal_imagenes = imagenes;
this.$forceUpdate( true );
},
seleccionar_imagen_anterior:function(  ) {console.log("OK!!");
this.internal_imagen_seleccionada -= 1;
this.$forceUpdate( true );
},
seleccionar_imagen_siguiente:function(  ) {console.log("OK!");
this.internal_imagen_seleccionada += 1;
this.$forceUpdate( true );
}
}
};}, null);
Castelog.metodos.un_componente_vue2("SoloProyector", "<div class=\"SoloProyector\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("SoloTelevision", "<div class=\"SoloTelevision\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("SoloOrdenador", "<div class=\"SoloOrdenador\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("SoloTablet", "<div class=\"SoloTablet\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("SoloMovil", "<div class=\"SoloMovil\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("SoloReloj", "<div class=\"SoloReloj\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("Paragrafo", "<p class=\"Paragrafo\"><slot></slot></p>", null, null);
Castelog.metodos.un_componente_vue2("Pestanyas", "<div class=\"Pestanyas\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("BotonDePestanya", "<div class=\"BotonDePestanya\" :data-identificador-de-grupo=\"grupo\" :data-identificador-de-pestanya=\"identificador\">\n        <div class=\"Pestanya\" v-on:click=\"internal_al_clicar\">\n            <slot></slot>\n        </div>\n    </div>", function(component) {return { props:{ identificador:{ type:String,
required:true
},
grupo:{ type:String,
required:true
}
},
data:function() {return { internal_al_clicar:() => {const jThis = Castelog.metodos.un_elemento_jquery(( this.$el ));
const jPestanyaDestino = jThis.closest( ".BotonDePestanya" );
const jPestanyasDeGrupo = jThis.closest( ".Pestanyas" ).find( ".BotonDePestanya" ).filter( ( index,
elemento ) => {return elemento.getAttribute( "data-identificador-de-grupo" ) === this.grupo;
} ).removeClass( "seleccionado" );
const jPanelDestino = jThis.closest( ".Pestanyas" ).find( ".PanelDePestanya" ).filter( ( index,
elemento ) => {return elemento.getAttribute( "data-identificador-de-grupo" ) === this.grupo;
} ).removeClass( "seleccionado" ).filter( ( index,
elemento ) => {return elemento.getAttribute( "data-identificador-de-pestanya" ) === this.identificador;
} ).addClass( "seleccionado" );
jPestanyaDestino.addClass( "seleccionado" );
}
};
}
};}, null);
Castelog.metodos.un_componente_vue2("PanelDePestanya", "<div class=\"PanelDePestanya\"\n      :data-identificador-de-grupo=\"grupo\"\n      :data-identificador-de-pestanya=\"identificador\">\n        <slot></slot>\n    </div>", function(component) {return { props:{ identificador:{ type:String,
required:true
},
grupo:{ type:String,
required:true
}
}
};}, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia1", "<h1 class=\"TituloDeImportancia1\">\n        <slot></slot>\n    </h1>", null, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia2", "<h2 class=\"TituloDeImportancia2\">\n        <slot></slot>\n    </h2>", null, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia3", "<h3 class=\"TituloDeImportancia3\">\n        <slot></slot>\n    </h3>", null, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia4", "<h4 class=\"TituloDeImportancia4\">\n        <slot></slot>\n    </h4>", null, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia5", "<h5 class=\"TituloDeImportancia5\">\n        <slot></slot>\n    </h5>", null, null);
Castelog.metodos.un_componente_vue2("TituloDeImportancia6", "<h6 class=\"TituloDeImportancia6\">\n        <slot></slot>\n    </h6>", null, null);
Castelog.metodos.un_componente_vue2("Texto", "<div class=\"Texto\"><slot></slot></div>", null, null);
Castelog.metodos.un_componente_vue2("ControlParaBoton", "<button class=\"ControlParaBoton\">\n        <slot></slot>\n    </button>", null, null);
Castelog.metodos.un_componente_vue2("ControlParaDia", "<div class=\"ControlParaDia Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        <DisposicionLineal v-if=\"internal_value_date\">\n            \n            <DisposicionLineal class=\"disposicion_vertical\">\n                <EtiquetaDeControl>Año:</EtiquetaDeControl>\n                <DisposicionLineal class=\"contenedor_de_parte_de_fecha contenedor_de_anyo_de_fecha\">\n                    <ControlParaBoton v-on:click.native=\"ir_a_anyo_anterior\"> « </ControlParaBoton>\n                    <Capa class=\"caja_de_parte_de_fecha\">{{ $Castelog.metodos.un_relleno_de_texto(internal_value_date.getFullYear(), 4, \"0\") }}</Capa>\n                    <ControlParaBoton v-on:click.native=\"ir_a_anyo_siguiente\"> » </ControlParaBoton>\n                </DisposicionLineal>\n            </DisposicionLineal>\n\n            <DisposicionLineal class=\"disposicion_vertical\">\n                <EtiquetaDeControl>Mes:</EtiquetaDeControl>\n                <DisposicionLineal class=\"contenedor_de_parte_de_fecha contenedor_de_mes_de_fecha\">\n                    <ControlParaBoton v-on:click.native=\"ir_a_mes_anterior\"> « </ControlParaBoton>\n                    <Capa class=\"caja_de_parte_de_fecha\">{{ $Castelog.metodos.un_relleno_de_texto(internal_value_date.getMonth() + 1, 2, \"0\") }}</Capa>\n                    <ControlParaBoton v-on:click.native=\"ir_a_mes_siguiente\"> » </ControlParaBoton>\n                </DisposicionLineal>\n            </DisposicionLineal>\n            \n            <DisposicionLineal class=\"disposicion_vertical\">\n                <EtiquetaDeControl class=\"no_contraer_texto\">Día del mes:</EtiquetaDeControl>\n                <DisposicionLineal class=\"contenedor_de_parte_de_fecha contenedor_de_dia_de_fecha\">\n                    <ControlParaBoton v-on:click.native=\"ir_a_dia_anterior\"> « </ControlParaBoton>\n                    <Capa class=\"caja_de_parte_de_fecha\">{{ $Castelog.metodos.un_relleno_de_texto(internal_value_date.getDate(), 2, \"0\") }}</Capa>\n                    <ControlParaBoton v-on:click.native=\"ir_a_dia_siguiente\"> » </ControlParaBoton>\n                </DisposicionLineal>\n            </DisposicionLineal>\n            \n            <DisposicionLineal class=\"disposicion_vertical\">\n                <EtiquetaDeControl class=\"no_contraer_texto\">Día de la semana:</EtiquetaDeControl>\n                <DisposicionLineal class=\"contenedor_de_parte_de_fecha contenedor_de_dia_semanal_de_fecha\">\n                    <ControlParaBoton v-on:click.native=\"ir_a_dia_anterior\"> « </ControlParaBoton>\n                    <Capa class=\"caja_de_parte_de_fecha\">{{ $Castelog.metodos.un_dia_de_la_semana(internal_value_date.getDay()) }}</Capa>\n                    <ControlParaBoton v-on:click.native=\"ir_a_dia_siguiente\"> » </ControlParaBoton>\n                </DisposicionLineal>\n            </DisposicionLineal>\n\n        </DisposicionLineal>\n    </div>", function(component) {return { props:{ valorInicial:{ type:String,
default:Castelog.metodos.un_formateo_de_fecha(new Date(  ), null, "un formateo de fecha a texto")
}
},
data:function() {return { internal_value:this.valorInicial,
internal_value_date:Castelog.metodos.un_formateo_de_fecha(this.valorInicial, "YYYY/MM/DD HH:mm:ss.xxx", "un formateo de texto a fecha")
};
},
watch:{ internal_value_date:function( nuevoValor ) {console.log("Cambiado!");
this.internal_value = Castelog.metodos.un_formateo_de_fecha(nuevoValor, null, "un formateo de fecha a texto");
}
},
methods:{ coger_valor:function() {return this.internal_value;
},
ir_a_dia_anterior:function() {console.log("cambiado dia!");
const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setDate( fechaTemporal.getDate(  ) - 1 );
this.internal_value_date = fechaTemporal;
},
ir_a_mes_anterior:function() {const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setMonth( fechaTemporal.getMonth(  ) - 1 );
this.internal_value_date = fechaTemporal;
},
ir_a_anyo_anterior:function() {const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setFullYear( fechaTemporal.getFullYear(  ) - 1 );
this.internal_value_date = fechaTemporal;
},
ir_a_dia_siguiente:function() {const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setDate( fechaTemporal.getDate(  ) + 1 );
this.internal_value_date = fechaTemporal;
},
ir_a_mes_siguiente:function() {const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setMonth( fechaTemporal.getMonth(  ) + 1 );
this.internal_value_date = fechaTemporal;
},
ir_a_anyo_siguiente:function() {const fechaTemporal = new Date( this.internal_value_date );
fechaTemporal.setFullYear( fechaTemporal.getFullYear(  ) + 1 );
this.internal_value_date = fechaTemporal;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaHora", "<div class=\"ControlParaHora Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Hora...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaMomento", "<div class=\"ControlParaMomento Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Momento...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaPlazoTemporal", "<div class=\"ControlParaPlazoTemporal Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Plazo temporal...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaPuntoBidimensional", "<div class=\"ControlParaPuntoBidimensional Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Punto bidimensional...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaPuntoMultidimensional", "<div class=\"ControlParaPuntoMultidimensional Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Punto multidimensional...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaLista", "<div class=\"ControlParaLista Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Lista...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaObjeto", "<div class=\"ControlParaObjeto Control\">\n        <input class=\"PuntoDeControl\" type=\"hidden\" v-model=\"internal_value\" />\n        Objeto...\n    </div>", function(component) {return { data:function() {return { internal_value:this.valorInicial
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaEntrada", "<div class=\"ControlParaEntrada Control\">\n        <EtiquetaDeControl v-if=\"enunciado\">{{ enunciado }}</EtiquetaDeControl>\n        <ControlParaTexto v-if=\"tipo === 'texto'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaTextoLargo v-else-if=\"tipo === 'texto largo'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaNumero v-else-if=\"tipo === 'numero'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaDia v-else-if=\"tipo === 'dia'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaHora v-else-if=\"tipo === 'hora'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaMomento v-else-if=\"tipo === 'momento'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaPlazoTemporal v-else-if=\"tipo === 'plazo temporal'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaPunto v-else-if=\"tipo === 'punto'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaPuntoBidimensional v-else-if=\"tipo === 'punto bidimensional'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaPuntoMultidimensional v-else-if=\"tipo === 'punto multidimensional'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaLista v-else-if=\"tipo === 'lista'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaObjeto v-else-if=\"tipo === 'objeto'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaFichero v-else-if=\"tipo === 'fichero'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaEnvio v-else-if=\"tipo === 'envio'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaReset v-else-if=\"tipo === 'reset'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaColor v-else-if=\"tipo === 'color'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaContrasenya v-else-if=\"tipo === 'contrasenya'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaRango v-else-if=\"tipo === 'rango'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaGrupoDeOpciones v-else-if=\"tipo === 'grupo de opciones'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaOpcion v-else-if=\"tipo === 'opcion'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaTags v-else-if=\"tipo === 'tags'\" :valor-inicial=\"valorInicial\" />\n        <ControlParaSelectorAvanzado v-else-if=\"tipo === 'selectorAvanzado'\" :valor-inicial=\"valorInicial\" />\n        <Capa v-else-if=\"tipo === 'color'\" :valor-inicial=\"valorInicial\">\n            <Texto>No se encontró el tipo de control especificado, en este caso: {{ tipo }}.</Texto>\n        </Capa>\n    </div>", function(component) {return { props:{ enunciado:{ type:String,
default:function() {return "";
}
},
tipo:{ type:String,
default:function() {return "texto";
}
},
valorInicial:{ type:String,
default:function() {return "";
}
}
},
methods:{ coger_valor:function() {return jQuery( this.$el ).find( ".PuntoDeControl" ).eq( 0 ).val(  );
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaTextoLargo", "<textarea class=\"ControlParaTextoLargo Control PuntoDeControl\" v-model=\"internal_value\"></textarea>", function(component) {return { props:{ valorInicial:{ type:String,
default:function() {return "";
}
},
gestor:{ type:Object,
default:function() {return { 
};
}
},
propiedad:{ type:String,
default:function() {return "";
}
}
},
data:function() {return { internal_value:this.valor
};
},
watch:{ internal_value:function( nuevoValor ) {if(this.gestor && this.propiedad) {
this.gestor[ this.propiedad ] = nuevoValor;
}
}
},
methods:{ coger_valor:function() {return this.internal_value;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaTexto", "<input class=\"ControlParaTexto Control PuntoDeControl\" type=\"text\" v-model=\"internal_value\" />", function(component) {return { props:{ valorInicial:{ type:String,
default:function() {return "";
}
},
gestor:{ type:Object,
default:function() {return { 
};
}
},
propiedad:{ type:String,
default:function() {return "";
}
}
},
data:function() {return { internal_value:this.valor
};
},
watch:{ internal_value:function( nuevoValor ) {if(this.gestor && this.propiedad) {
this.gestor[ this.propiedad ] = nuevoValor;
}
}
},
methods:{ coger_valor:function() {return this.internal_value;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaNumero", "<input class=\"ControlParaNumero Control PuntoDeControl\" type=\"number\" v-model=\"internal_value\" />", function(component) {return { props:{ valorInicial:{ type:String,
default:function() {return "";
}
},
gestor:{ type:Object,
default:function() {return { 
};
}
},
propiedad:{ type:String,
default:function() {return "";
}
}
},
data:function() {return { internal_value:this.valor
};
},
watch:{ internal_value:function( nuevoValor ) {if(this.gestor && this.propiedad) {
this.gestor[ this.propiedad ] = nuevoValor;
}
}
},
methods:{ coger_valor:function() {return this.internal_value;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaBooleano", "<input class=\"ControlParaBooleano Control PuntoDeControl\" type=\"checkbox\" v-model=\"internal_value\" />", function(component) {return { props:{ valorInicial:{ type:String,
default:function() {return "";
}
},
gestor:{ type:Object,
default:function() {return { 
};
}
},
propiedad:{ type:String,
default:function() {return "";
}
},
modo:"booleano"
},
data:function() {return { internal_value:this.valor
};
},
watch:{ internal_value:function( nuevoValor ) {if(this.gestor && this.propiedad) {
this.gestor[ this.propiedad ] = nuevoValor;
}
}
},
methods:{ coger_valor:function() {return this.internal_value;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaSelectorSimple", "<select class=\"ControlParaSelectorSimple Control PuntoDeControl\" v-model=\"internal_value\">\n        <slot></slot>\n    </select>", function(component) {return { props:{ valorInicial:{ type:String,
default:function() {return "";
}
},
gestor:{ type:Object,
default:function() {return { 
};
}
},
propiedad:{ type:String,
default:function() {return "";
}
}
},
data:function() {return { internal_value:this.valor
};
},
watch:{ internal_value:function( nuevoValor ) {if(this.gestor && this.propiedad) {
this.gestor[ this.propiedad ] = nuevoValor;
}
}
},
methods:{ coger_valor:function() {return this.internal_value;
}
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaFichero", "<div class=\"ControlParaFichero\">\n        ControlParaFichero...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaEnvio", "<div class=\"ControlParaEnvio\">\n        ControlParaEnvio...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaReset", "<div class=\"ControlParaReset\">\n        ControlParaReset...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaColor", "<div class=\"ControlParaColor\">\n        ControlParaColor...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaContrasenya", "<div class=\"ControlParaContrasenya\">\n        ControlParaContrasenya...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaRango", "<div class=\"ControlParaRango\">\n        ControlParaRango...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaPunto", "<div class=\"ControlParaPunto\">\n        ControlParaPunto...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaPuntoMultidimensional", "<div class=\"ControlParaPuntoMultidimensional\">\n        ControlParaPuntoMultidimensional...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaGrupoDeOpciones", "<div class=\"ControlParaGrupoDeOpciones\">\n        ControlParaGrupoDeOpciones...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaOpcion", "<div class=\"ControlParaOpcion\">\n        ControlParaOpcion...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaTags", "<div class=\"ControlParaTags\">\n        ControlParaTags...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("ControlParaSelectorAvanzado", "<div class=\"ControlParaSelectorAvanzado\">\n        ControlParaSelectorAvanzado...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Castelog.metodos.un_componente_vue2("EtiquetaDeControl", "<label class=\"EtiquetaDeControl\">\n        <slot></slot>\n    </label>", null, null);
Castelog.metodos.un_componente_vue2("DisposicionLineal", "<div class=\"DisposicionLineal\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("DisposicionCuadricular", "<div class=\"DisposicionCuadricular\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("Item", "<div class=\"Item\">\n        <slot></slot>\n    </div>", null, null);
Castelog.metodos.un_componente_vue2("Capa", "<div class=\"Capa\">\n        <slot></slot>\n    </div>", null, null);
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio", "<div class=\"PaginaDeInicio Component\">\n    <Item>Column:</Item>\n    <DisposicionLineal style=\"flex-direction: column;\" class=\"bordeado\">\n        <Item>1</Item>\n        <Item>2</Item>\n        <Item>3</Item>\n    </DisposicionLineal>\n    <Item>Row:</Item>\n    <DisposicionLineal style=\"flex-direction: row;\" class=\"bordeado\">\n        <Item style=\"flex-grow: 0;\">1</Item>\n        <Item style=\"flex-grow: 1;\">2</Item>\n        <Item style=\"flex-grow: 0;\">3</Item>\n    </DisposicionLineal>\n    <Item>Row:</Item>\n    <DisposicionLineal style=\"flex-direction: row;\" class=\"bordeado\">\n        <Item style=\"flex-grow: 1;\">1</Item>\n        <Item style=\"flex-grow: 2;\">2</Item>\n        <Item style=\"flex-grow: 3;\">3</Item>\n        <Item style=\"flex-grow: 4;\">4</Item>\n        <Item style=\"flex-grow: 5;\">5</Item>\n        <Item style=\"flex-grow: 6;\">6</Item>\n    </DisposicionLineal>\n    <DisposicionCuadricular style=\"grid-template-columns: auto auto 1fr auto auto;\">\n        <Item>\n            <ControlParaBoton> «« </ControlParaBoton>\n        </Item>\n        <Item>\n            <ControlParaBoton> « </ControlParaBoton>\n        </Item>\n        <Item style=\"text-align: center;\">Texto...</Item>\n        <Item>\n            <ControlParaBoton> » </ControlParaBoton>\n        </Item>\n        <Item>\n            <ControlParaBoton> »» </ControlParaBoton>\n        </Item>\n        <Item>\n            <ControlParaBoton> «« </ControlParaBoton>\n        </Item>\n        <Item>\n            <ControlParaBoton> « </ControlParaBoton>\n        </Item>\n        <Item style=\"text-align: center;\">Texto...</Item>\n        <Item>\n            <ControlParaBoton> » </ControlParaBoton>\n        </Item>\n        <Item>\n            <ControlParaBoton> »» </ControlParaBoton>\n        </Item>\n    </DisposicionCuadricular>\n    <Pestanyas>\n        <BotonDePestanya grupo=\"uno\" identificador=\"x\" class=\"seleccionado\">x</BotonDePestanya>\n        <BotonDePestanya grupo=\"uno\" identificador=\"y\">y</BotonDePestanya>\n        <BotonDePestanya grupo=\"uno\" identificador=\"z\">z</BotonDePestanya>\n        <PanelDePestanya grupo=\"uno\" identificador=\"x\" class=\"seleccionado\">\n            <ChivatoDeVista />\n            <LineaHorizontal />\n            <Capa>\n                <ControlParaEntrada\n                    tipo=\"texto\"\n                    enunciado=\"Nombre completo:\"\n                    relleno=\"Pepito de los Palotes Vázquez\"\n                    :gestor=\"this\"\n                    propiedad=\"nombre_de_x\"\n                    valor-inicial=\"\"\n                />\n                <ControlParaEntrada\n                    tipo=\"texto\"\n                    enunciado=\"Ciudad:\"\n                    relleno=\"Alarcón de Pozuelo\"\n                    :gestor=\"this\"\n                    propiedad=\"ciudad_de_x\"\n                    valor-inicial=\"\"\n                />\n                <ControlParaEntrada\n                    tipo=\"texto largo\"\n                    enunciado=\"Descripción:\"\n                    :gestor=\"this\"\n                    propiedad=\"descripcion\"\n                    valor-inicial=\"\"\n                />\n            </Capa>\n        </PanelDePestanya>\n        <PanelDePestanya grupo=\"uno\" identificador=\"y\">\n            <ChivatoDeVista />\n            <div>Este es el panel y</div>\n        </PanelDePestanya>\n        <PanelDePestanya grupo=\"uno\" identificador=\"z\">\n            <ChivatoDeVista />\n            <div>Este es el panel z</div>\n        </PanelDePestanya>\n    </Pestanyas>\n    <GaleriaDeImagenes :imagenes=\"['./img/0.png','./img/1.png','./img/2.png','./img/3.png','./img/4.png','./img/5.png','./img/6.png','./img/7.png','./img/8.png','./img/9.png','./img/10.png']\" />\n    <ControlParaEntrada tipo=\"texto\" enunciado=\"Texto:\" />\n    <ControlParaEntrada tipo=\"texto largo\" enunciado=\"Texto largo:\" />\n    <ControlParaEntrada tipo=\"numero\" enunciado=\"Numero:\" />\n    <ControlParaEntrada tipo=\"dia\" enunciado=\"Dia:\" :valor-inicial=\"$Castelog.metodos.un_formateo_de_fecha(new Date(), 'YYYY/MM/DD HH:mm:ss.xxx', 'un formateo de fecha a texto')\" />\n    <ControlParaEntrada tipo=\"hora\" enunciado=\"Hora:\" />\n    <ControlParaEntrada tipo=\"momento\" enunciado=\"Momento:\" />\n    <ControlParaEntrada tipo=\"plazo temporal\" enunciado=\"Plazo temporal:\" />\n    <ControlParaEntrada tipo=\"punto\" enunciado=\"Punto:\" />\n    <ControlParaEntrada tipo=\"punto bidimensional\" enunciado=\"Punto bidimensional:\" />\n    <ControlParaEntrada tipo=\"punto multidimensional\" enunciado=\"Punto multidimensional:\" />\n    <ControlParaEntrada tipo=\"lista\" enunciado=\"Lista:\" />\n    <ControlParaEntrada tipo=\"objeto\" enunciado=\"Objeto:\" />\n    <ControlParaEntrada tipo=\"fichero\" enunciado=\"Fichero:\" />\n    <ControlParaEntrada tipo=\"envio\" enunciado=\"Envio:\" />\n    <ControlParaEntrada tipo=\"reset\" enunciado=\"Reset:\" />\n    <ControlParaEntrada tipo=\"color\" enunciado=\"Color:\" />\n    <ControlParaEntrada tipo=\"contrasenya\" enunciado=\"Contrasenya:\" />\n    <ControlParaEntrada tipo=\"rango\" enunciado=\"Rango:\" />\n    <ControlParaEntrada tipo=\"grupo de opciones\" enunciado=\"Grupo de opciones:\" />\n    <ControlParaEntrada tipo=\"opcion\" enunciado=\"Opcion:\" />\n    <ControlParaEntrada tipo=\"tags\" enunciado=\"Tags:\" />\n    <ControlParaEntrada tipo=\"selector avanzado\" enunciado=\"Selector avanzado:\" />\n    <ControlParaEntrada tipo=\"color\" enunciado=\"Color:\" />\n  </div>", function(component) {return { data:function() {return { nombre_de_x:"",
ciudad_de_x:""
};
}
};}, null);
const ChivatoDeVista = Castelog.metodos.un_componente_vue2("ChivatoDeVista", "<div>\n        <SoloReloj>\n            <div>Vista de reloj:</div>\n        </SoloReloj>\n        <SoloMovil>\n            <div>Vista de movil:</div>\n        </SoloMovil>\n        <SoloTablet>\n            <div>Vista de tablet:</div>\n        </SoloTablet>\n        <SoloOrdenador>\n            <div>Vista de ordenador:</div>\n        </SoloOrdenador>\n        <SoloTelevision>\n            <div>Vista de television:</div>\n        </SoloTelevision>\n        <SoloProyector>\n            <div>Vista de proyector:</div>\n        </SoloProyector>\n    </div>", null, null);
const LineaHorizontal = Castelog.metodos.un_componente_vue2("LineaHorizontal", "<div class=\"LineaHorizontal\"></div>", null, null);
const Carta = Castelog.metodos.un_componente_vue2("Carta", "<div class=\"Carta\">\n        Carta...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const Sonido = Castelog.metodos.un_componente_vue2("Sonido", "<div class=\"Sonido\">\n        Sonido...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const ReproductorDeSonido = Castelog.metodos.un_componente_vue2("ReproductorDeSonido", "<div class=\"ReproductorDeSonido\">\n        ReproductorDeSonido...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const Video = Castelog.metodos.un_componente_vue2("Video", "<div class=\"Video\">\n        Video...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const ReproductorDeVideo = Castelog.metodos.un_componente_vue2("ReproductorDeVideo", "<div class=\"ReproductorDeVideo\">\n        ReproductorDeVideo...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const VideoDeYoutube = Castelog.metodos.un_componente_vue2("VideoDeYoutube", "<div class=\"VideoDeYoutube\">\n        VideoDeYoutube...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const Tabla = Castelog.metodos.un_componente_vue2("Tabla", "<div class=\"Tabla\">\n        Tabla...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const Fila = Castelog.metodos.un_componente_vue2("Fila", "<div class=\"Fila\">\n        Fila...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const Celda = Castelog.metodos.un_componente_vue2("Celda", "<div class=\"Celda\">\n        Celda...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const GestorDeDatosDeTabla = Castelog.metodos.un_componente_vue2("GestorDeDatosDeTabla", "<div class=\"GestorDeDatosDeTabla\">\n        GestorDeDatosDeTabla...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const GestorDeDatosDeFila = Castelog.metodos.un_componente_vue2("GestorDeDatosDeFila", "<div class=\"GestorDeDatosDeFila\">\n        GestorDeDatosDeFila...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const BuscadorDeDatos = Castelog.metodos.un_componente_vue2("BuscadorDeDatos", "<div class=\"BuscadorDeDatos\">\n        BuscadorDeDatos...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const ListadorDeDatos = Castelog.metodos.un_componente_vue2("ListadorDeDatos", "<div class=\"ListadorDeDatos\">\n        ListadorDeDatos...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const PaginadorDeDatos = Castelog.metodos.un_componente_vue2("PaginadorDeDatos", "<div class=\"PaginadorDeDatos\">\n        PaginadorDeDatos...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const IndiceDePagina = Castelog.metodos.un_componente_vue2("IndiceDePagina", "<div class=\"IndiceDePagina\">\n        IndiceDePagina...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
const InterfazDeDialogos = Castelog.metodos.un_componente_vue2("InterfazDeDialogos", "<div class=\"InterfazDeDialogos\">\n        \n    </div>", function(component) {return { data:function() {return { dialogos:[  ]
};
}
};}, null);
const InterfazDeNotificaciones = Castelog.metodos.un_componente_vue2("InterfazDeNotificaciones", "<div class=\"InterfazDeNotificaciones\">\n        \n    </div>", function(component) {return { data:function() {return { notificaciones:[  ]
};
},
methods:{ notificar:function( datos ) {this.notificaciones.push({ tipo:datos.tipo || "info",
titulo:datos.tipo || "Nota informativa",
mensaje:datos.mensaje,
detalles:datos.detalles
})
},
notificar_error:function( error ) {this.notificaciones.push({ tipo:"error",
titulo:error.name,
mensaje:error.message,
detalles:error.stack
})
}
},
mounted:function() {this.$notificaciones = this;
Vue.prototype.$notificaciones = this;
}
};}, null);
const Hipervinculo = Castelog.metodos.un_componente_vue2("Hipervinculo", "<a class=\"Hipervinculo\"><slot></slot></a>", null, null);
const Icono = Castelog.metodos.un_componente_vue2("Icono", "<div class=\"Icono\">\n        Icono...\n    </div>", function(component) {return { data:function() {return { 
};
}
};}, null);
Vue.prototype.$Castelog = Castelog;
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">\n    <router-view></router-view>\n  </div>",
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
const estilos = Castelog.variables.estilos_en_cascada_1;
const configuraciones = { 
};
const parametros_de_estilos = Object.assign({ 
}, { estilos
}, { configuraciones
} );
Castelog.metodos.una_insercion_de_estilos_en_cascada("estilos generales", ( Castelog.metodos.una_plantilla(function(config, settings) {
  let $plantilla = "";
$plantilla += "\n    body {\n        margin: 0;\n        padding: 2px;\n        font-family: Roboto;\n        font-size: 12px;\n    }\n    input, button, textarea, select {\n        font-family: Roboto;\n        font-size: 12px;\n        ";
$plantilla += config.estilos.rasgos.para.espaciado_2;
$plantilla += "\n        min-width: 28px;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    .DisposicionLineal {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n    .DisposicionCuadricular > .Item {\n        ";
$plantilla += config.estilos.rasgos.para.bordeado_rallado;
$plantilla += "\n    }\n    .DisposicionLineal > .Item {\n        align-self: center;\n        justify-content: center;\n    }\n    .DisposicionCuadricular {\n        display: grid;\n    }\n    .BotonDePestanya {\n        display: inline-block;\n        cursor: pointer;\n    }\n    .BotonDePestanya > .Pestanya {\n        ";
$plantilla += config.estilos.rasgos.para.espaciado_2;
$plantilla += "\n        border: 1px solid #333;\n        border-bottom: 0px solid #333;\n        border-top-left-radius: 2pt;\n        border-top-right-radius: 2pt;\n        background-color: #CCC;\n    }\n    .BotonDePestanya.seleccionado > .Pestanya {\n        background-color: #FFF;\n    }\n    .PanelDePestanya {\n        ";
$plantilla += config.estilos.rasgos.para.espaciado_2;
$plantilla += "\n        display: none;\n        border: 1px solid #333;\n        border-bottom-left-radius: 2pt;\n        border-bottom-right-radius: 2pt;\n    }\n    .PanelDePestanya.seleccionado {\n        display: block;\n    }\n    .LineaHorizontal {\n        border-top: 1px solid #333;\n    }\n    select.PuntoDeControl,\n    textarea.PuntoDeControl,\n    input.PuntoDeControl {\n        width: 100%;\n    }\n    textarea.PuntoDeControl {\n        resize: vertical;\n        min-height: 80px;\n    }\n    .bordeado {\n        ";
$plantilla += config.estilos.rasgos.para.bordeado;
$plantilla += "\n    }\n    .bordeado_rallado {\n        ";
$plantilla += config.estilos.rasgos.para.bordeado_rallado;
$plantilla += "\n    }\n    .caja_de_parte_de_fecha {\n        flex-grow: 1;\n        text-align: center;\n    }\n    .contenedor_de_parte_de_fecha {\n        align-items: center;\n        justify-content: space-between;\n        margin: 2px;\n        box-shadow: 0 0 2px black;\n        padding: 2px;\n        border-radius: 2pt;\n    }\n    .contenedor_de_anyo_de_fecha { flex-grow: 0.5; }\n    .contenedor_de_mes_de_fecha { flex-grow: 0.5; }\n    .contenedor_de_dia_de_fecha { flex-grow: 0.5; }\n    .contenedor_de_dia_semanal_de_fecha { flex-grow: 0.5; }\n    .SoloReloj { display: none; }\n    .SoloMovil { display: none; }\n    .SoloTablet { display: none; }\n    .SoloOrdenador { display: none; }\n    .SoloTelevision { display: none; }\n    .SoloProyector { display: none; }\n    @media only screen and (min-width: 0px) and (max-width: 200px) {\n        .SoloReloj { display: block; }\n        .SoloMovil { display: none; }\n        .SoloTablet { display: none; }\n        .SoloOrdenador { display: none; }\n        .SoloTelevision { display: none; }\n        .SoloProyector { display: none; }\n    }\n    @media only screen and (min-width: 200px) and (max-width: 400px) {\n        .SoloReloj { display: none; }\n        .SoloMovil { display: block; }\n        .SoloTablet { display: none; }\n        .SoloOrdenador { display: none; }\n        .SoloTelevision { display: none; }\n        .SoloProyector { display: none; }\n    }\n    @media only screen and (min-width: 400px) and (max-width: 600px) {\n        .SoloReloj { display: none; }\n        .SoloMovil { display: none; }\n        .SoloTablet { display: block; }\n        .SoloOrdenador { display: none; }\n        .SoloTelevision { display: none; }\n        .SoloProyector { display: none; }\n    }\n    @media only screen and (min-width: 600px) and (max-width: 800px) {\n        .SoloReloj { display: none; }\n        .SoloMovil { display: none; }\n        .SoloTablet { display: none; }\n        .SoloOrdenador { display: block; }\n        .SoloTelevision { display: none; }\n        .SoloProyector { display: none; }\n    }\n    @media only screen and (min-width: 800px) and (max-width: 1000px) {\n        .SoloReloj { display: none; }\n        .SoloMovil { display: none; }\n        .SoloTablet { display: none; }\n        .SoloOrdenador { display: none; }\n        .SoloTelevision { display: block; }\n        .SoloProyector { display: none; }\n    }\n    @media only screen and (min-width: 1000px) {\n        .SoloReloj { display: none; }\n        .SoloMovil { display: none; }\n        .SoloTablet { display: none; }\n        .SoloOrdenador { display: none; }\n        .SoloTelevision { display: none; }\n        .SoloProyector { display: block; }\n    }\n    .no_contraer_texto {\n        white-space: nowrap;\n    }\n    .disposicion_vertical {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n    .EtiquetaDeControl {\n        display: block;\n        ";
$plantilla += config.estilos.rasgos.para.espaciado_2;
$plantilla += "\n        padding-bottom: 0px;\n        border-bottom: 1px solid #CCC;\n        font-size: 10px;\n        font-weight: bold;\n    }\n";
  return $plantilla;
} )(( parametros_de_estilos )) ));