
const x = { name:"ComponenteVariopinto",
data:function() {try {
return { url_para_datos:"http://www.example.com"
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ refrescar_datos:async function() {try {
this.$cliente.get( this.url_data_datos );
} catch(error) {
console.log(error);
throw error;
}

},
cargar_componente:async function() {try {
(await this.refrescar_datos(  ));
} catch(error) {
console.log(error);
throw error;
}

},
"como_string":"un string"
}
};