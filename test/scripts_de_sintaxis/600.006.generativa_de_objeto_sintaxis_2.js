
const x = { name:"ComponenteVariopinto",
data:function() {return { url_para_datos:"http://www.example.com"
};
},
methods:{ refrescar_datos:async function() {this.$cliente.get( this.url_data_datos );
},
cargar_componente:async function() {(await this.refrescar_datos(  ));
},
"como_string":"un string"
}
};